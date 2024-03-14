import { SHIFT_CURRENCY } from './action-types';

type tCurrency = 'usd' | 'eth';

export const shiftCurrency = (currencyType: tCurrency) => ({
	type: SHIFT_CURRENCY,
	payload: {
		currency: currencyType,
	},
});
