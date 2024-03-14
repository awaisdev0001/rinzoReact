export type tTopRows = {
	id: string | number;
	volume: {
		value: number | string;
		percent: string;
		duration: boolean;
	};
	collection: { imageUrl: string; name: string; contract_address: string; };
	floor_price: {
		value: number | string;
		percent: string;
		duration: boolean;
	};
	owners: {
		value: string;
		percent: string;
		duration: boolean;
	};
	smart_wallets: {
		value: string;
		percent: string;
		duration: boolean;
	};
	sales?: {
		value: number;
		percent: string;
		duration: boolean;
	};
	outlook: boolean;
	history: any;
	open?: boolean;
};
