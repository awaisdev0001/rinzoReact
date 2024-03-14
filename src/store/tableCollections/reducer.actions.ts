import { tPopupCollection } from 'src/typed/types';
import { CLICKED_COLLECTION } from './action-types';

export const selectClickedCollection = (item: tPopupCollection) => ({
	type: CLICKED_COLLECTION,
	payload: {
		selectedCollection: item,
	},
});
