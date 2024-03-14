import { sendInitialState, tSendInitialState } from './initialState';
import { IAction } from 'src/typed/interfaces';
import {
	GET_ALL_SEND_CARDS,
	SELECT_ITEM_OF_SEND_CARDS,
	REMOVE_ITEM_OF_SEND_CARDS,
	GET_TOTAL_AMOUNT_OF_NFTS,
	REMOVE_ALL_ITEMS_OF_SEND_CARDS,
} from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tCollectionItem } from 'src/typed/types';

export type tSentNFTsReducer = {
	arrayOfCards: tCollectionItem[];
	selectedCards: tCollectionItem[];
	selectedItem: tCollectionItem;
	removedItem: tCollectionItem;
	totalAmountOfNFTs: number;
	byRangeSelected: tCollectionItem[];
};

const sentNFTsPersistConfig = {
	key: 'sendInitialState',
	storage: storage,
	whitelist: ['arrayOfCards', 'selectedCards'],
};

export const sentNFTsReducerReducer = (
	state = sendInitialState,
	action: IAction<tSentNFTsReducer>
): tSendInitialState => {
	switch (action.type) {
		case GET_TOTAL_AMOUNT_OF_NFTS:
			return {
				...state,
				totalAmountOfNFTs: action.payload?.totalAmountOfNFTs ?? 0,
			};
		case GET_ALL_SEND_CARDS:
			return {
				...state,
				arrayOfCards: action.payload?.arrayOfCards ?? ([] as tCollectionItem[]),
			};
		case SELECT_ITEM_OF_SEND_CARDS:
			return {
				...state,
				arrayOfCards: state.arrayOfCards.map((item: tCollectionItem) =>
					+item.id === action?.payload?.selectedItem?.id
						? { ...item, checked: !item.checked }
						: item
				),
				selectedCards: Array.from(
					new Set([
						...state.selectedCards,
						action.payload?.selectedItem as tCollectionItem,
					])
				)
					.map(item =>
						+item.id === action?.payload?.selectedItem?.id
							? { ...item, checked: !item.checked }
							: item
					)
					.filter(item => item.checked),
			};
		case REMOVE_ITEM_OF_SEND_CARDS:
			return {
				...state,
				arrayOfCards: state.arrayOfCards.map((item: tCollectionItem) =>
					+item.id === action?.payload?.removedItem?.id
						? { ...item, checked: !item.checked }
						: item
				),
				selectedCards: state.selectedCards.filter(
					item => +item.id !== action.payload?.removedItem.id
				),
			};
		case REMOVE_ALL_ITEMS_OF_SEND_CARDS:
			return {
				...state,
				arrayOfCards: state.arrayOfCards.map((item: tCollectionItem) => {
					return { ...item, checked: false };
				}),
				selectedCards: [],
			};
		default:
			return state;
	}
};

// export const sentNFTsReducerReducer = persistReducer<any>(sentNFTsPersistConfig, collection);
