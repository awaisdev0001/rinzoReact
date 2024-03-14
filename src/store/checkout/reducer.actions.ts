import { PLACE_ORDER_CHECKOUT } from './action-types';

export const addPlaceOrder = (order: boolean) => ({
	type: PLACE_ORDER_CHECKOUT,
	payload: {
		placeOrder: order,
	},
});
