import { tTimeFilter } from 'src/typed/types';
import { tTopRows } from './types';

import pic1 from 'src/assets/images/home/tableNFT/nft1.png';
import pic2 from 'src/assets/images/home/tableNFT/nft3.png';
import pic3 from 'src/assets/images/home/tableNFT/nft6.png';
import pic4 from 'src/assets/images/home/tableNFT/nft4.png';
import pic5 from 'src/assets/images/home/tableNFT/nft5.png';

import market1 from "src/assets/images/markets/market1.svg";
import market2 from "src/assets/images/markets/market2.svg";
import market3 from "src/assets/images/markets/market3.svg";
import { toLocaleUS } from 'src/helpers';

export const timeFilterInitialState: tTimeFilter[] = [
	{ val: '30m', title: '30m', check: true },
	{ val: '1h', title: '1h', check: false },
	{ val: '24h', title: '24h', check: false },
	{ val: '7d', title: '7d', check: false },
	{ val: '30d', title: '30d', check: false },
	{ val: 'all', title: 'All Time', check: false },
];

export const rows: tTopRows[] = [
	{
		id: 1,
		market: [market1],
		collection: {
			imageUrl: pic1,
			name: 'Peachy Puch#22',
		},
		items: 4,
		value: toLocaleUS(0.4),
		sweeper: { address: '0x44cd906bf780753522c4c5c5eafb5f9905cf00ba', check: true },
		date: '1 min ago',
	},
	{
		id: 2,
		market: [market1],
		collection: {
			imageUrl: pic2,
			name: 'Dayco Serpentine Belt',
		},
		items: 2,
		value: toLocaleUS(0.789),
		sweeper: { address: '0xb9d9906bf780753522c4c5c5eafb5f9905cf37c2', check: true },
		date: '7 min ago',
	},
	{
		id: 3,
		market: [market1, market2],
		collection: {
			imageUrl: pic3,
			name: 'Mad Ballot Holder',
		},
		items: 12,
		value: toLocaleUS(8.99),
		sweeper: { address: '0xecc5906bf780753522c4c5c5eafb5f9905cfe277', check: false },
		date: '8 min ago',
	},
	{
		id: 4,
		market: [market3],
		collection: {
			imageUrl: pic4,
			name: 'Pile of Many Plates',
		},
		items: 5,
		value: toLocaleUS(14.81),
		sweeper: { address: '0x44cd906bf780753522c4c5c5eafb5f9905cf00ba', check: false },
		date: '9 min ago',
	},
	{
		id: 5,
		market: [market1, market3, market2],
		collection: {
			imageUrl: pic5,
			name: 'Worldpac Alternator',
		},
		items: 10,
		value: toLocaleUS(0.84),
		sweeper: { address: '0xb9d9906bf780753522c4c5c5eafb5f9905cf37c2', check: true },
		date: '9 min ago',
	},
];

export const collumn = [
	{
		key: 'market',
		name: 'Market',
		isSort: false,
		align: 'center',
	},
	{
		key: 'collection',
		name: 'Collection',
		isSort: false,
	},
	{
		key: 'items',
		name: 'Items',
		isSort: true,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'empty',
		name: '',
		isSort: false,
		align: 'left',
	},
	{
		key: 'value',
		name: 'Value',
		isSort: true,
		align: 'left',
	},
	{
		key: 'empty2',
		name: '',
		isSort: false,
		align: 'left',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'sweeper',
		name: 'Sweeper',
		isSort: false,
		align: 'left',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'date',
		name: 'Date',
		isSort: false,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'empty3',
		name: '',
		isSort: false,
		align: 'left',
		collumnClassName: 'mobile-hidden',
	},
];
