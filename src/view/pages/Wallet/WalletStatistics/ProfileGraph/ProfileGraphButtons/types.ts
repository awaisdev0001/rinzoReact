export type tProfileGraphButtonOptions = 'pnl' | 'portfolioValue' | 'assetsAcquired';

export type tProfileGraphButton = {
	title: string;
	price: string;
	hasEth: boolean;
	hasUsd: boolean;
	btnType: tProfileGraphButtonOptions;
	usd?: number;
};
