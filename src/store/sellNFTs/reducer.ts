import { sellInitialState, tSellNFTState } from "./initialState";
import { IAction } from "src/typed/interfaces";
import {
  GET_ALL_SELL_CARDS,
  SELECT_ITEM_OF_SELL_CARDS,
  REMOVE_ITEM_OF_SELL_CARDS,
  GET_TOTAL_AMOUNT_OF_SELL_NFTS,
  REMOVE_ALL_ITEMS_OF_SELL_CARDS,
  GET_ALL_MARKETPLACES,
  SELECT_A_MARKETPLACE,
  CHANGE_MARKETPLACE_DURATION,
  CHANGE_NFT_PRICE,
  REMOVE_FROM_MARKETPLACE,
  REFRESH_ITEMS_MARKETPLACES,
  CANCEL_ITEM_FROM_LISTING,
  SELECT_ITEM_ROW,
  UPDATE_SUMMARY,
} from "./action-types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tCollectionItem, tCollectionItemExtend } from "src/typed/types";
import { tMarketplacesExtend } from "src/view/pages/SellNFTs/CreateListing/types";
import { toLocaleUS, uniqueBy } from "src/helpers";
import { ReactNode } from "react";

export type tSellNFTsReducer = {
  arrayOfCards: tCollectionItemExtend[];
  selectedCards: tCollectionItemExtend[];
  selectedItem: tCollectionItemExtend;
  removedItem: tCollectionItemExtend;
  totalAmountOfNFTs: number;
  byRangeSelected: tCollectionItemExtend[];
  arrayOfMarketPlaces: tMarketplacesExtend[];
  selectedMarketplace: tMarketplacesExtend;
  duration: string;
  nftPriceElement: {
    cur?: string;
    price?: number | string;
    id: number | string;
  };
  itemToRemoveFromMarketPlace: {
    market: string;
    id: number | string;
  };
  iconEther?: ReactNode | boolean;
  itemId: number | string;
  selectItemRow: { val: boolean; id: number | string };
};

const sellNFTsPersistConfig = {
  key: "sellInitialState",
  storage: storage,
  whitelist: [
    "arrayOfCards",
    "selectedCards",
    "arrayOfMarketPlaces",
    "summarySection",
  ],
};

export const sellNfts = (
  state = sellInitialState,
  action: IAction<tSellNFTsReducer>
): tSellNFTState => {
  switch (action.type) {
    case GET_TOTAL_AMOUNT_OF_SELL_NFTS:
      return {
        ...state,
        totalAmountOfNFTs: action.payload?.totalAmountOfNFTs ?? 0,
      };
    case GET_ALL_SELL_CARDS:
      return {
        ...state,
        arrayOfCards:
          action.payload?.arrayOfCards.map((item) => {
            const selectedItem = state.selectedCards.find(
              (card) => card.id === item.id
            );
            if (selectedItem && selectedItem.checked) {
              return { ...item, checked: true };
            }
            return item;
          }) ?? ([] as tCollectionItemExtend[]),
        selectedCards: state.selectedCards
          .filter((item) => item.checked)
          .filter((card) => {
            return state.arrayOfCards.some((item) => item.id === card.id);
          }),
      };
    case SELECT_ITEM_OF_SELL_CARDS:
      return {
        ...state,
        arrayOfCards: state.arrayOfCards.map((item) =>
          +item.id === action?.payload?.selectedItem?.id
            ? { ...item, checked: !item.checked }
            : item
        ),
        selectedCards: Array.from(
          new Set([
            ...state.selectedCards,
            action.payload?.selectedItem as tCollectionItemExtend,
          ])
        )
          .map((item) =>
            +item.id === action?.payload?.selectedItem?.id
              ? { ...item, checked: !item.checked }
              : item
          )
          .filter((item) => item.checked),
      };

    case REMOVE_ITEM_OF_SELL_CARDS:
      return {
        ...state,
        arrayOfCards: state.arrayOfCards.map((item) =>
          +item.id === action?.payload?.removedItem?.id
            ? { ...item, checked: !item.checked }
            : item
        ),
        selectedCards: state.selectedCards.filter(
          (item) => +item.id !== action.payload?.removedItem.id
        ),
      };
    case REMOVE_ALL_ITEMS_OF_SELL_CARDS:
      return {
        ...state,
        arrayOfCards: state.arrayOfCards.map((item) => {
          return { ...item, checked: false };
        }),
        selectedCards: [],
      };
    case GET_ALL_MARKETPLACES:
      return {
        ...state,
        arrayOfMarketPlaces: [
          ...state.arrayOfMarketPlaces,
          ...(action.payload?.arrayOfMarketPlaces || []).filter(
            (obj2) =>
              !state.arrayOfMarketPlaces.some(
                (obj1) => obj1.title === obj2.title
              )
          ),
        ],
      };

    case SELECT_A_MARKETPLACE:
      return {
        ...state,
        arrayOfMarketPlaces: state.arrayOfMarketPlaces.map((el) => {
          if (el.title === action.payload?.selectedMarketplace.title) {
            return {
              ...el,
              checked: !action.payload?.selectedMarketplace?.checked,
            };
          }
          return el;
        }),
      };

    case CHANGE_MARKETPLACE_DURATION:
      return {
        ...state,
        arrayOfMarketPlaces: state.arrayOfMarketPlaces.map((el) => {
          return {
            ...el,
            duration: action.payload?.duration,
          };
        }),
      };

    case CHANGE_NFT_PRICE:
      return {
        ...state,
        selectedCards: state.selectedCards.map((el) => {
          if (action?.payload?.nftPriceElement?.id === "all" && el.checked) {
            let newprice: number | string = 0;
            if (action?.payload?.nftPriceElement?.price === "floor_price") {
              newprice =
                el.list_price.priceCurrency === "eth"
                  ? el.list_price.floor.eth
                  : el.list_price.floor.usd;
            }
            if (action?.payload?.nftPriceElement?.price === "estimated_price") {
              newprice =
                el.list_price.priceCurrency === "eth"
                  ? el.estimatedPriceETH
                  : el.estimatedPriceUSD;
            }
            return {
              ...el,
              list_price: {
                ...el.list_price,
                priceCurrency: action?.payload?.nftPriceElement?.cur
                  ? action?.payload?.nftPriceElement?.cur
                  : el.list_price.priceCurrency,
                price: newprice
                  ? newprice
                  : action?.payload?.nftPriceElement?.price ||
                    action?.payload?.nftPriceElement?.price === ""
                  ? action?.payload?.nftPriceElement?.price
                  : el.list_price.price,
              },
            };
          } else if (el.id === action?.payload?.nftPriceElement?.id) {
            return {
              ...el,
              list_price: {
                ...el.list_price,
                priceCurrency: action?.payload?.nftPriceElement?.cur
                  ? action?.payload?.nftPriceElement?.cur
                  : el.list_price.priceCurrency,
                price:
                  action?.payload?.nftPriceElement?.price ||
                  action?.payload?.nftPriceElement?.price === 0
                    ? action?.payload?.nftPriceElement?.price
                    : el.list_price.price,
              },
            };
          }
          return el;
        }),
      };
    case REMOVE_FROM_MARKETPLACE:
      return {
        ...state,
        selectedCards: state.selectedCards.map((el) => {
          if (el.id === action?.payload?.itemToRemoveFromMarketPlace?.id) {
            return {
              ...el,
              markets: el.markets.filter(
                (mar) =>
                  mar.title !==
                  action?.payload?.itemToRemoveFromMarketPlace?.market
              ),
            };
          } else return el;
        }),
      };
    case REFRESH_ITEMS_MARKETPLACES:
      return {
        ...state,
        selectedCards:
          state.selectedCards.map((el) => {
            if (el.checked) {
              const newMarkets = state.arrayOfMarketPlaces
                .filter((market) => market.checked)
                .map((market) => {
                  return {
                    url: "",
                    image: market.image,
                    title: market.title,
                    additionData:
                      el.list_price.price &&
                      el.list_price.priceCurrency === "eth"
                        ? action.payload?.iconEther
                        : false,
                    data: el.list_price.price
                      ? toLocaleUS(
                          (+el.list_price.price / 100) * +(market.percent || 0)
                        )
                      : "-",
                    duration: market.duration ? market.duration : "---",
                  };
                });
              return {
                ...el,
                markets: [...newMarkets],
              };
            } else return el;
          }) ?? ([] as tCollectionItemExtend[]),
      };
    case CANCEL_ITEM_FROM_LISTING:
      return {
        ...state,
        selectedCards: state.selectedCards.filter(
          (row) => row.id !== action.payload?.itemId
        ),
        summarySection: state.summarySection.filter(
          (row) => row.id !== action.payload?.itemId
        ),
      };

    case SELECT_ITEM_ROW:
      return {
        ...state,
        selectedCards: state.selectedCards.map((el) => {
          if (action.payload?.selectItemRow.id === "all") {
            return { ...el, checked: action.payload.selectItemRow.val };
          } else if (el.id === action.payload?.selectItemRow.id) {
            return { ...el, checked: action.payload.selectItemRow.val };
          }
          return el;
        }),
      };
    case UPDATE_SUMMARY:
      const selectedCards = state.selectedCards.filter((card) => card.checked);
      const newSummary = selectedCards.reduce(
        (summary, card) => {
          const existingIndex = summary.findIndex(
            (item) => item.id === card.id
          );
          if (existingIndex !== -1) {
            summary[existingIndex] = card;
          } else {
            summary.push(card);
          }
          return summary;
        },
        [...selectedCards]
      );
      const unique = uniqueBy(newSummary, "id");
      return { ...state, summarySection: unique };

    default:
      return state;
  }
};

export const sellNFTsReducerReducer = persistReducer<any>(
  sellNFTsPersistConfig,
  sellNfts
);
