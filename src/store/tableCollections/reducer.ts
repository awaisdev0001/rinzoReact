import { initialState, tPopupCollectionState, popupStateCol } from './initialState';
import { CLICKED_COLLECTION } from './action-types';
import { IAction } from 'src/typed/interfaces';

type tTableCollectionReducer = {
	selectedCollection: tTableCollectionReducer;
};

export const tableCollectionReducer = (
	state = initialState,
	action: IAction<tTableCollectionReducer>
): tPopupCollectionState => {
	switch (action.type) {
		case CLICKED_COLLECTION:
			return <tPopupCollectionState>{
				selectedCollection: action.payload?.selectedCollection ?? popupStateCol,
			};
		default:
			return state;
	}
};
