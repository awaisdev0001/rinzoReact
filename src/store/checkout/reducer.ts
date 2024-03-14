import { IAction } from 'src/typed/interfaces';
import { checkoutInitialState } from './initialState';
import { PLACE_ORDER_CHECKOUT } from './action-types';

export type tCheckoutReducer = {
	placeOrder: boolean;
};

export const checkoutReducer = (
	state = checkoutInitialState,
	action: IAction<tCheckoutReducer>
): tCheckoutReducer => {
	switch (action.type) {
		case PLACE_ORDER_CHECKOUT:
			return {
				...state,
				placeOrder: action.payload?.placeOrder ?? false,
			};
		default:
			return state;
	}
};
