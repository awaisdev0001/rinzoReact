import {
	CHANGE_CART_OPEN_OF_APP,
	CHANGE_SWEEP_OPEN_OF_APP,
	CHANGE_POPUP_OPEN_OF_APP,
	CHANGE_VISIT_COUNT_OF_APP,
} from './action-types';

export const changeOpenCart = (open: boolean) => {
	return {
		type: CHANGE_CART_OPEN_OF_APP,
		payload: {
			cartOpen: open,
		},
	};
};

export const changeSweepCart = (open: boolean) => {
	return {
		type: CHANGE_SWEEP_OPEN_OF_APP,
		payload: {
			sweepOpen: open,
		},
	};
};

export const changePopUp = (open: boolean) => {
	return {
		type: CHANGE_POPUP_OPEN_OF_APP,
		payload: {
			popupOpen: open,
		},
	};
};

export const changeVisitCount = (visitCount: boolean) => {
	return {
		type: CHANGE_VISIT_COUNT_OF_APP,
		payload: {
			visitCount: visitCount,
		},
	};
};
