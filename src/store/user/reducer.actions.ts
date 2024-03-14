import { CHANGE_USER_OF_APP, CLEAR_USER_OF_APP, OPEN_WALLET_POP_UP } from './action-types';
import { tAccount } from 'src/typed/types';

export const changeAccountParams = (account: tAccount) => {
	return {
		type: CHANGE_USER_OF_APP,
		payload: {
			account: account,
		},
	};
};

export const clearAccountParams = () => {
	return {
		type: CLEAR_USER_OF_APP,
	};
};

export const changeOpenWalletPopUp = (openWalletPopUp: boolean) => {
	return {
		type: OPEN_WALLET_POP_UP,
		payload: {
			openWalletPopUp: openWalletPopUp,
		},
	};
};
