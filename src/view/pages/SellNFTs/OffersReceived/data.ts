import pic1 from 'src/assets/images/home/tableNFT/nft1.png';
import pic2 from 'src/assets/images/home/tableNFT/nft3.png';
import pic3 from 'src/assets/images/home/tableNFT/nft6.png';
import pic4 from 'src/assets/images/home/tableNFT/nft4.png';
import pic5 from 'src/assets/images/home/tableNFT/nft5.png';

import market1 from "src/assets/images/markets/market1.svg";
import market2 from "src/assets/images/markets/market2.svg";
import market3 from "src/assets/images/markets/market3.svg";
import { tOffersTableRow } from './types';
import { tBaseSelect } from 'src/typed/types';

export const collumns = [
	{
		key: 'checkbox',
		name: '',
		isSort: false,
		align: 'center',
	},
	{
		key: 'item',
		name: 'Item',
		isSort: false,
	},
	{
		key: 'pricePurchased',
		name: 'Price Purchased',
		isSort: true,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'offerAmount.eth',
		name: 'Offer Amount',
		isSort: false,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'pnl.price',
		name: 'PNL',
		isSort: true,
		// align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'date',
		name: 'Expiration Time',
		isSort: true,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'floorDifference.eth',
		name: 'Floor Difference',
		isSort: true,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'estimationDifference.eth',
		name: 'Estimation Difference',
		isSort: true,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},

	{
		key: 'empty2',
		name: '',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'empty1',
		name: '',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'empty3',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty4',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty5',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty4',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty5',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty6',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty7',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty8',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty9',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty10',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
	{
		key: 'empty11',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-visible',
	},
];

export const tableRows: tOffersTableRow[] = [
	{
		id: 1,
		item: {
			imageUrl: pic1,
			name: '#3867',
			collection: {
				name: 'A Bored Ape Yacht Club',
				slug: 'bored-ape-yacht-club',
				date: '01/08/2022',
			},
		},
		pricePurchased: 123456,
		offerAmount: {
			eth: 0.234,
			usd: 123,
		},
		pnl: { duration: false, price: 8231 },
		date: '10/24/22 10:00 AM EST',
		floorDifference: {
			usd: 111.54,
			eth: 0.199,
			percent: 3,
			duration: true,
		},
		estimationDifference: {
			usd: 324.54,
			eth: 0.213,
			percent: 4,
			duration: false,
		},
		markets: [{ url: '', image: market2, name: 'X2Y2.xyz' }],
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
				date: '02/08/2022',
			},
		},
		pricePurchased: 234567,
		offerAmount: {
			eth: 0.299,
			usd: 212.54,
		},
		pnl: { duration: true, price: 4442 },
		date: '10/23/22 10:00 AM EST',
		floorDifference: {
			usd: 653.54,
			eth: 0.234,
			percent: 5,
			duration: true,
		},
		estimationDifference: {
			usd: 234.45,
			eth: 0.456,
			percent: 2,
			duration: false,
		},
		markets: [{ image: market1, name: 'X2Y2.xyz', url: '' }],
		checked: false,
	},
	{
		id: 3,
		item: {
			imageUrl: pic3,
			name: '#3867',
			collection: {
				name: 'C Bored Ape Yacht Club',
				slug: 'bored-ape-yacht-club',
				date: '02/08/2022',
			},
		},
		pricePurchased: 345678,
		offerAmount: {
			eth: 0.8906,
			usd: 412.32,
		},
		pnl: { duration: false, price: 4454 },
		date: '2/24/22 10:00 AM EST',
		floorDifference: {
			usd: 712.32,
			eth: 0.732,
			percent: 2,
			duration: true,
		},
		estimationDifference: {
			usd: 341.32,
			eth: 0.812,
			percent: 2,
			duration: false,
		},
		markets: [{ url: '', image: market2, name: 'X2Y2.xyz' }],
		checked: false,
	},
	{
		id: 4,
		item: {
			imageUrl: pic4,
			name: '#3867',
			collection: {
				name: 'C Bored Ape Yacht Club',
				slug: 'bored-ape-yacht-club',
				date: '03/08/2022',
			},
		},
		pricePurchased: 456789,
		offerAmount: {
			eth: 0.332,
			usd: 711.23,
		},
		pnl: { duration: false, price: 9999 },
		date: '04/24/22 10:00 AM EST',
		floorDifference: {
			usd: 444.12,
			eth: 0.699,
			percent: 2,
			duration: true,
		},
		estimationDifference: {
			usd: 912.12,
			eth: 0.399,
			percent: 2,
			duration: false,
		},
		markets: [{ url: '', image: market3, name: 'X2Y2.xyz' }],
		checked: false,
	},
	{
		id: 5,
		item: {
			imageUrl: pic5,
			name: '#3867',
			collection: {
				name: 'D Bored Ape Yacht Club',
				slug: 'bored-ape-yacht-club',
				date: '07/08/2022',
			},
		},
		pricePurchased: 152456,
		offerAmount: {
			eth: 0.345,
			usd: 235.54,
		},
		pnl: { duration: false, price: 6781 },
		date: '06/24/22 10:00 AM EST',
		floorDifference: {
			usd: 491.54,
			eth: 0.161,
			percent: 2,
			duration: true,
		},
		estimationDifference: {
			usd: 983.54,
			eth: 0.518,
			percent: 2,
			duration: false,
		},
		markets: [{ url: '', image: market1, name: 'X2Y2.xyz' }],
		checked: false,
	},
];

export const selectMobileData: tBaseSelect = [
	{ title: 'Price Purchased', key: 'price_purchased' },
	{ title: 'Offer Amount', key: 'offer_amount' },
	{ title: 'PNL', key: 'pnl' },
	{ title: 'Expiration Time', key: 'expiration_time' },
	{ title: 'Floor Difference', key: 'floor_difference' },
	{ title: 'Estimation Difference', key: 'estimation_difference' },
];
