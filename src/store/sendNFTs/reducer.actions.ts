import {
	GET_ALL_SEND_CARDS,
	REMOVE_ITEM_OF_SEND_CARDS,
	REMOVE_ALL_ITEMS_OF_SEND_CARDS,
	SELECT_ITEM_OF_SEND_CARDS,
	GET_TOTAL_AMOUNT_OF_NFTS,
} from './action-types';
import { tCollectionItem } from 'src/typed/types';

export const getDataOfSentNFTs = (arr: tCollectionItem[]) => ({
	type: GET_ALL_SEND_CARDS,
	payload: {
		arrayOfCards: arr,
	},
});

export const selectItemOfSentNFTs = (item: tCollectionItem) => {
	return {
		type: SELECT_ITEM_OF_SEND_CARDS,
		payload: {
			selectedItem: item,
		},
	};
};

export const removeItemOfSentNFTs = (item: tCollectionItem) => {
	return {
		type: REMOVE_ITEM_OF_SEND_CARDS,
		payload: {
			removedItem: item,
		},
	};
};

export const removeAllItemsOfSentNFTs = () => {
	return {
		type: REMOVE_ALL_ITEMS_OF_SEND_CARDS,
	};
};

export const getTotalAmountOfNFTs = (amount: number) => {
	return {
		type: GET_TOTAL_AMOUNT_OF_NFTS,
		payload: {
			totalAmountOfNFTs: amount,
		},
	};
};
