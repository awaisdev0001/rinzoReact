import { tMarketplacesExtend } from "src/view/pages/SellNFTs/CreateListing/types";
import {
  GET_ALL_SELL_CARDS,
  REMOVE_ITEM_OF_SELL_CARDS,
  REMOVE_ALL_ITEMS_OF_SELL_CARDS,
  SELECT_ITEM_OF_SELL_CARDS,
  GET_TOTAL_AMOUNT_OF_SELL_NFTS,
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
import { tCollectionItem } from "src/typed/types";
import { ReactNode } from "react";

export const getDataOfSellNFTs = (arr: tCollectionItem[]) => ({
  type: GET_ALL_SELL_CARDS,
  payload: {
    arrayOfCards: arr,
  },
});

export const getAllMarketPlaces = (arr: tMarketplacesExtend[]) => ({
  type: GET_ALL_MARKETPLACES,
  payload: {
    arrayOfMarketPlaces: arr,
  },
});

export const selectMarketPlace = (item: tMarketplacesExtend) => ({
  type: SELECT_A_MARKETPLACE,
  payload: {
    selectedMarketplace: item,
  },
});

export const changeMarketPlacesDurations = (key: string) => ({
  type: CHANGE_MARKETPLACE_DURATION,
  payload: { duration: key },
});

export const selectItemOfSellNFTs = (item: tCollectionItem) => {
  return {
    type: SELECT_ITEM_OF_SELL_CARDS,
    payload: {
      selectedItem: item,
    },
  };
};

export const removeItemOfSellNFTs = (item: tCollectionItem) => {
  return {
    type: REMOVE_ITEM_OF_SELL_CARDS,
    payload: {
      removedItem: item,
    },
  };
};

export const removeAllItemsOfSellNFTs = () => {
  return {
    type: REMOVE_ALL_ITEMS_OF_SELL_CARDS,
  };
};

export const getTotalAmountOfSellNFTs = (amount: number) => {
  return {
    type: GET_TOTAL_AMOUNT_OF_SELL_NFTS,
    payload: {
      totalAmountOfNFTs: amount,
    },
  };
};

export const changeNFTPrice = (nftPriceElement: {
  cur?: string;
  price?: number | string;
  id: number | string;
}) => {
  return {
    type: CHANGE_NFT_PRICE,
    payload: {
      nftPriceElement: nftPriceElement,
    },
  };
};

export const removeNFTFromMarketPlace = (itemToRemoveFromMarketPlace: {
  market: string;
  id: number | string;
}) => {
  return {
    type: REMOVE_FROM_MARKETPLACE,
    payload: {
      itemToRemoveFromMarketPlace: itemToRemoveFromMarketPlace,
    },
  };
};

export const refreshTheMarketPlacesAndData = (iconEther: ReactNode) => {
  return {
    type: REFRESH_ITEMS_MARKETPLACES,
    payload: {
      iconEther: iconEther,
    },
  };
};
export const cencelItemFromListing = (itemId: number | string) => {
  return {
    type: CANCEL_ITEM_FROM_LISTING,
    payload: {
      itemId: itemId,
    },
  };
};

export const selectTheRowItem = (selectItemRow: {
  val: boolean;
  id: number | string;
}) => {
  return {
    type: SELECT_ITEM_ROW,
    payload: {
      selectItemRow: selectItemRow,
    },
  };
};

export const updateTheSummary = () => {
  return {
    type: UPDATE_SUMMARY,
  };
};
