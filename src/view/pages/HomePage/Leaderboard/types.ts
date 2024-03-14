export type tTopRows = {
	id: string | number;
	wallet_address: string;
	collection: { imageUrl: string };
	portfolio_value: number | string;
	pnl: number | string;
	winning_trades: number;
	losing_trades: number;
	spent: string;
	mints: number;
};
