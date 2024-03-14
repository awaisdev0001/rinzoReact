export type tTopRows = {
	id: string | number;
	market: string[];
	collection: { imageUrl: string; name: string };
	items: number;
	value: number | string;
	sweeper: {
		address: string;
		check: boolean;
	};
	date: string;
};
