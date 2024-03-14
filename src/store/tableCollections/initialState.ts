import { tPopupCollection } from 'src/typed/types';

export type tPopupCollectionState = {
	selectedCollection: tPopupCollection;
};

export const popupStateCol: tPopupCollection = {
	thumb: '',
	title: '',
	collectionNumber: '',
};

export const initialState: tPopupCollectionState = {
	selectedCollection: popupStateCol,
};
