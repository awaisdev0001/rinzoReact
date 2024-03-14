import { tFloor } from 'src/typed/types';

export type tOffersTableRow = {
	checked: boolean;
	id: string | number;
	item: {
		imageUrl: string;
		name: string;
		collection: {
			name: string;
			slug: string;
			date: string;
		};
	};
	pricePurchased: string | number;
	offerAmount: tFloor;
	pnl: { price: string | number; duration: boolean };
	date: string | number;
	floorDifference: tFloor;
	estimationDifference: tFloor;
	markets: { url: string; name: string; image: string }[];
};
