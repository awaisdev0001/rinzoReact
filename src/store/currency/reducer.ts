import { currencyInitialState } from './initialState';
import { IAction } from 'src/typed/interfaces';
import { SHIFT_CURRENCY } from './action-types';
import { tCurrency } from 'src/typed/types';

export type tCurrencyReducer = {
	currency: tCurrency;
};

export const currencyReducer = (
	state = currencyInitialState,
	action: IAction<tCurrencyReducer>
): tCurrencyReducer => {
	switch (action.type) {
		case SHIFT_CURRENCY:
			return {
				...state,
				currency: action.payload?.currency ?? 'eth',
			};
		default:
			return state;
	}
};
