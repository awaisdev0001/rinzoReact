import {
  GET_ALL_COLLECTION_CARDS,
  REMOVE_ITEM_OF_COLLECTION_CARDS,
  REMOVE_ALL_ITEMS_OF_COLLECTION_CARDS,
  SELECT_ITEM_OF_COLLECTION_CARDS,
  GET_TOTAL_AMOUNT_OF_ITEMS,
  GET_RANGE_SELECTED_ITEMS,
  PUSH_TO_CART,
  GET_FILTER_RECORDS,
  ADD_NEW_ITEM_IN_COLLECTION_CARDS,
} from './action-types';
import { tCollectionItem } from 'src/typed/types';

export const getDataOfCollections = (arr: tCollectionItem[]) => ({
	type: GET_ALL_COLLECTION_CARDS,
	payload: {
		arrayOfCards: arr,
	},
});

export const selectItemOfCollections = (item: tCollectionItem) => {
	return {
		type: SELECT_ITEM_OF_COLLECTION_CARDS,
		payload: {
			selectedItem: item,
		},
	};
};

export const removeItemOfCollections = (item: tCollectionItem) => {
	return {
		type: REMOVE_ITEM_OF_COLLECTION_CARDS,
		payload: {
			removedItem: item,
		},
	};
};

export const removeAllItemsOfCollections = () => {
	return {
		type: REMOVE_ALL_ITEMS_OF_COLLECTION_CARDS,
	};
};

export const getTotalAmountOfCards = (amount: number) => {
	return {
		type: GET_TOTAL_AMOUNT_OF_ITEMS,
		payload: {
			totalAmountOfCards: amount,
		},
	};
};

export const rangeSelectOfCards = (arr: tCollectionItem[]) => {
	return {
		type: GET_RANGE_SELECTED_ITEMS,
		payload: {
			byRangeSelected: arr,
		},
	};
};

export const isFilterCollection = (is_filtred: boolean) => {
	return {
    type: GET_FILTER_RECORDS,
       payload: {
      isFiltered: is_filtred,
     },
  };
};

export const newlistingOfCards = (arr: tCollectionItem[]) => {
    return {
    type: ADD_NEW_ITEM_IN_COLLECTION_CARDS,
    payload: {
      newListing: arr,
    },
  };
};
export const pushToCart = (item: tCollectionItem) => {
	return {
		type: PUSH_TO_CART,
		payload: {
			selectedItem: item,
		},
	};
};
