import pic1 from 'src/assets/images/home/tableNFT/nft1.png';
import pic2 from 'src/assets/images/home/tableNFT/nft3.png';
import pic3 from 'src/assets/images/home/tableNFT/nft6.png';
import pic4 from 'src/assets/images/home/tableNFT/nft4.png';
import pic5 from 'src/assets/images/home/tableNFT/nft5.png';

import market1 from "src/assets/images/markets/market1.svg";
import market2 from "src/assets/images/markets/market2.svg";
import market3 from "src/assets/images/markets/market3.svg";

import { tBaseSelect } from 'src/typed/types';
import { tOffersSentRow } from './types';

export const collumns = [
	{
		key: 'checkbox',
		name: '',
		isSort: false,
		align: 'center',
	},
	{
		key: 'item.collection.name',
		name: 'Item',
		isSort: false,
	},
	{
		key: 'expiration_time',
		name: 'Expiration Time',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'floor_difference.usd',
		name: 'Floor Difference',
		isSort: true,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'price_difference.usd',
		name: 'Price Difference',
		isSort: true,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'market',
		name: '',
		isSort: false,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'empty',
		name: '',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
];
export const rows: tOffersSentRow[] = [
	{
		id: 1,
		item: {
			imageUrl: pic1,
			name: '#3867',
			collection: {
				name: 'A Bored Ape Yacht Club',
				slug: 'bored-ape-yacht-club',
			},
		},
		markets: [
			{
				url: '',
				image: market1,
				title: 'OpenSea',
				time: '7d',
			},
		],
		expiration_time: '3/24/22 10:00 AM EST',
		floor_difference: {
			usd: 123,
			eth: 0.499,
			percent: 3,
			duration: true,
		},
		price_difference: {
			usd: 323.54,
			eth: 0.599,
			percent: 2,
			duration: false,
		},
		checked: false,
	},
	{
		id: 2,
		item: {
			imageUrl: pic2,
			name: '#3867',
			collection: {
				name: 'B Bored Ape Yacht Club',
				slug: 'bored-ape-yacht-club',
			},
		},
		markets: [
			{
				url: '',
				image: market1,
				title: 'OpenSea',
				time: '7d',
			},
		],
		expiration_time: '11/24/22 10:00 AM EST',
		floor_difference: {
			usd: 222.54,
			eth: 0.635,
			percent: 6,
			duration: true,
		},
		price_difference: {
			usd: 823.54,
			eth: 0.863,
			percent: 5.2,
			duration: false,
		},
		checked: false,
	},
];

export const selectMobileData: tBaseSelect = [
	{ title: 'Expiration Time', key: 'expiration_time' },
	{ title: 'Floor Difference', key: 'floor_difference' },
	{ title: 'Price Difference', key: 'price_difference' },
];
