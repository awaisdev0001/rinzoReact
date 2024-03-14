import { collectionsInitialState, tCollectionState } from './initialState';
import { accountState } from 'src/store/user/initialState';
import { IAction } from 'src/typed/interfaces';
import {
  GET_ALL_COLLECTION_CARDS,
  SELECT_ITEM_OF_COLLECTION_CARDS,
  REMOVE_ITEM_OF_COLLECTION_CARDS,
  GET_TOTAL_AMOUNT_OF_ITEMS,
  GET_RANGE_SELECTED_ITEMS,
  REMOVE_ALL_ITEMS_OF_COLLECTION_CARDS,
  PUSH_TO_CART,
  GET_FILTER_RECORDS,
  ADD_NEW_ITEM_IN_COLLECTION_CARDS,
} from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tCollectionItem } from 'src/typed/types';

const collectionPersistConfig = {
	key: 'collectionState',
	storage: storage,
	whitelist: ['arrayOfCards', 'selectedCards', 'cartSliderRange'],
};

export type tCollectionReducer = {
	arrayOfCards: tCollectionItem[];
	selectedCards: tCollectionItem[];
	cartSliderRange: number;
	selectedItem: tCollectionItem;
	removedItem: tCollectionItem;
	totalAmountOfCards: number;
	byRangeSelected: tCollectionItem[];
    isFiltered: boolean;
    newListing: tCollectionItem[];

};

export const collection = (
  state = collectionsInitialState,
  action: IAction<tCollectionReducer>
): tCollectionState => {
  switch (action.type) {
    case GET_TOTAL_AMOUNT_OF_ITEMS:
      return {
        ...state,
        totalAmountOfCards: action.payload?.totalAmountOfCards ?? 0,
      };
    case GET_ALL_COLLECTION_CARDS:
      return {
        ...state,
        arrayOfCards: action.payload?.arrayOfCards ?? [],
      };
    case SELECT_ITEM_OF_COLLECTION_CARDS:
      const checkCardsDuplication = () => {
        const selectedCards: any[] = [...state?.selectedCards];

        const cardIndexInSelectedCards = selectedCards.findIndex((card) => card?.collection?.contract_address === action?.payload?.selectedItem?.collection?.contract_address && card?.collection?.token_id === action?.payload?.selectedItem?.collection?.token_id && card?.id === action?.payload?.selectedItem?.id)
          
          if(cardIndexInSelectedCards !== -1)
            selectedCards[cardIndexInSelectedCards].checked = false;            

          else{
            const sameContractAddressAndTokenIdIndex = selectedCards.findIndex((card)=> (card?.collection?.contract_address === action?.payload?.selectedItem?.collection?.contract_address && card?.collection?.token_id === action?.payload?.selectedItem?.collection?.token_id));

            if(sameContractAddressAndTokenIdIndex === -1)
              selectedCards.push({...action?.payload?.selectedItem, checked: true});
          }
          return selectedCards.filter((card) => card.checked);
      }

      // const checkCardsSelection = () => {
      //   const arrayOfCards :tCollectionItem[] = [...state?.arrayOfCards];
      //   const cardIndexInArrayOfCards = state?.arrayOfCards?.findIndex((card) => +card?.id === action?.payload?.selectedItem?.id);

      //   if(state?.selectedCards?.length){
      //     const cardIndexInSelectedCards = checkCardsDuplication().findIndex((card)=>+card?.id === action?.payload?.selectedItem?.id);

      //     if(cardIndexInSelectedCards !== -1)
      //       arrayOfCards[cardIndexInArrayOfCards].checked = true;

      //     else
      //       arrayOfCards[cardIndexInArrayOfCards].checked = false;
      //   }
      //   else 
      //     arrayOfCards[cardIndexInArrayOfCards].checked = true

      //     return arrayOfCards;
      // }

      return {
        ...state,
        // arrayOfCards: checkCardsSelection(),
        selectedCards: state?.selectedCards?.length ? checkCardsDuplication() : [{...action?.payload?.selectedItem, checked: true}],
      };
    case REMOVE_ITEM_OF_COLLECTION_CARDS:
      window.analytics.track('nfts/removed-from-cart', {
        location: '',
        token_id: 0,
        contract_address: accountState.address,
        price: action?.payload?.removedItem?.priceETH,
        price_usd: action?.payload?.removedItem?.priceUSD,
        wallet_balance: 0,
      });

      return {
        ...state,
        arrayOfCards: state.arrayOfCards.map((item: tCollectionItem) =>
          (item.collection?.contract_address ===
            action?.payload?.selectedItem?.collection?.contract_address &&
            item.collection?.token_id ===
              action?.payload?.selectedItem?.collection?.token_id) ||
            item.id === action?.payload?.removedItem?.id
            ? { ...item, checked: false }
            : item
        ),
        selectedCards: state.selectedCards.filter(
          (item) => item.id !== action.payload?.removedItem.id
        ),
      };
    case REMOVE_ALL_ITEMS_OF_COLLECTION_CARDS:
      return {
        ...state,
        arrayOfCards: state.arrayOfCards.map((item: tCollectionItem) => {
          return { ...item, checked: false };
        }),
        selectedCards: [],
      };
    case GET_RANGE_SELECTED_ITEMS:
      return {
        ...state,
        arrayOfCards: action.payload?.byRangeSelected ?? [],
        selectedCards:
          action.payload?.byRangeSelected.filter((item) => item.checked) ?? [],
      };

    case GET_FILTER_RECORDS:
      return {
        ...state,
        isFiltered: action.payload?.isFiltered ?? false,
      };


    case ADD_NEW_ITEM_IN_COLLECTION_CARDS:
        const new_values:any = action?.payload?.newListing.filter((x: any) =>
          !state.arrayOfCards?.some((y) => y.id === x.id)
        );

        for (var i = 0; i < new_values.length; i++) {
          state.arrayOfCards.push(new_values[i]);
        }

      return {
        ...state,
        arrayOfCards: [...state.arrayOfCards],
      } as tCollectionState;

    case PUSH_TO_CART: {
      let containId = false;
      state.selectedCards?.forEach((item: tCollectionItem) => {
        if (item.id === action?.payload?.selectedItem?.id) containId = true;
        window.analytics.track('nfts/added-to-cart', {
          location: '',
          token_id: 0,
          contract_address: accountState.address,
          price: action?.payload?.selectedItem?.priceETH,
          price_usd: action?.payload?.selectedItem?.priceUSD,
          wallet_balance: 0,
        });
      });
      return {
        ...state,
        selectedCards:
          (containId
            ? state.selectedCards
            : [...state.selectedCards, action.payload?.selectedItem]) ?? [],
      } as tCollectionState;
    }

    default:
      return state;
  }
};

export const collectionReducer = persistReducer<any>(collectionPersistConfig, collection);
