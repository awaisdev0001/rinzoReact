export type tLayoutState = {
	cartOpen: boolean;
	sweepOpen: boolean;
	popupOpen: boolean;
	visitCount: boolean;
};

export const initialState = {
	cartOpen: false,
	sweepOpen: false,
	popupOpen: false,
	visitCount: true,
};
