import { IconFloorPrice, IconNewListings, IconOffers, IconTransferred } from 'src/assets/icons';
import { tAdditionData } from 'src/typed/types';

export const additionData: tAdditionData[] = [
	{ id: '1', image: <IconNewListings />, title: 'Listed', price: { value: 9 } },
	{ id: '2', image: <IconFloorPrice />, title: 'Sold', price: { value: 33 } },
	{ id: '3', image: <IconOffers />, title: 'Offers', price: { value: 4.501 } },
	{ id: '4', image: <IconTransferred />, title: 'Transferred', price: { value: 22 } },
];
