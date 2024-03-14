import { tAccount } from 'src/typed/types';

export type tAccountState = {
	account: tAccount;
	openWalletPopUp: boolean;
};

export const accountState: tAccount = {
	image: '',
	address: '',
	connectType: {
		name: '',
		image: '',
	},
	portfolioValue: '',
	checked: false,
	blurToken: '',
	blurLoggedIn: false,
	x2y2Token: '',
	x2y2LoggedIn: false
};

export const initialState: tAccountState = {
	account: accountState,
	openWalletPopUp: false,
};
