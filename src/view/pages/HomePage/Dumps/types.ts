export type tTopRows = {
	id: string | number;
	market: string[];
	collection: { imageUrl: string; name: string };
	items: number;
	value: number | string;
	dumper: {
		address: string;
		check: boolean;
	};
	date: string;
};
