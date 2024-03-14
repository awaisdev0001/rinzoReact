import { IAction } from 'src/typed/interfaces';
import { initialState, tLayoutState } from './initialState';
import {
	CHANGE_CART_OPEN_OF_APP,
	CHANGE_SWEEP_OPEN_OF_APP,
	CHANGE_POPUP_OPEN_OF_APP,
	CHANGE_VISIT_COUNT_OF_APP,
} from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartOpenPersistConfig = {
	key: 'openCartState',
	storage: storage,
	whitelist: ['cartOpen', 'sweepOpen', 'visitCount'],
};

export type tCartOpenReducer = {
	cartOpen: boolean;
	sweepOpen: boolean;
	popupOpen?: boolean;
	visitCount?: boolean;
};

const cart = (state = initialState, action: IAction<tCartOpenReducer>): tLayoutState => {
	switch (action.type) {
		case CHANGE_CART_OPEN_OF_APP:
			return {
				...state,
				cartOpen: action.payload?.cartOpen ?? false,
			};
		case CHANGE_SWEEP_OPEN_OF_APP:
			return {
				...state,
				sweepOpen: action.payload?.sweepOpen ?? false,
				cartOpen: action.payload?.sweepOpen ? true : state.cartOpen,
			};

		case CHANGE_POPUP_OPEN_OF_APP:
			return {
				...state,
				popupOpen: action.payload?.popupOpen ?? false,
			};
		case CHANGE_VISIT_COUNT_OF_APP:
			return {
				...state,
				visitCount: action.payload?.visitCount ?? true,
			};

		default:
			return state;
	}
};

export const cartOpenReducer = persistReducer<any>(cartOpenPersistConfig, cart);
