import { IAction } from 'src/typed/interfaces';
import { accountState, initialState, tAccountState } from './initialState';
import { CHANGE_USER_OF_APP, CLEAR_USER_OF_APP, OPEN_WALLET_POP_UP } from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tAccount } from 'src/typed/types';

const accountPersistConfig = {
	key: 'accountState',
	storage: storage,
	whitelist: ['account'],
};

export type tAccountActionReducer = {
	account: tAccount;
	openWalletPopUp: boolean;
};

const account = (state = initialState, action: IAction<tAccountActionReducer>): tAccountState => {
	switch (action.type) {
		case CHANGE_USER_OF_APP: {
			window.analytics.track("auth/login", {
				address: state.account.address,
			})
			return {
				...state,
				account: action.payload?.account ?? accountState,
			};
		}

		case CLEAR_USER_OF_APP: {
			window.analytics.track("auth/logout", {
				address: state.account.address,
			})
			return {
				...state,
				account: accountState,
			};
		}

		case OPEN_WALLET_POP_UP: {
			return {
				...state,
				openWalletPopUp: action.payload?.openWalletPopUp ?? false,
			};
		}
		default:
			return state;
	}
};

export const accountReducer = persistReducer<any>(accountPersistConfig, account);
