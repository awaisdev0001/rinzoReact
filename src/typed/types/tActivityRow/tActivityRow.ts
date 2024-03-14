export type tActivityRow = {
	id: string | number;
	item: {
		imageUrl: string;
		name: string;
		collection?: string;
		contractAddress?: string;
	};
	rank: number;
	rarity_score: number;
	price: {
		eth: number | string;
		usd: number | string;
	};
	event_type: string;
	date?: string;
	day?: string;
	open?: boolean;
	hash?: string;
	tokenId?: string;
	timestamp?: string;
};
