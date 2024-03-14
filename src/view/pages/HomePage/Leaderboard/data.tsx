import { tTimeFilter, tBaseSelect } from 'src/typed/types';
import { tTopRows } from './types';

import pic1 from 'src/assets/images/home/tableNFT/nft1.png';
import pic2 from 'src/assets/images/home/tableNFT/nft7.png';
import pic3 from 'src/assets/images/home/tableNFT/nft8.png';
import pic4 from 'src/assets/images/home/tableNFT/nft9.png';
import pic5 from 'src/assets/images/home/tableNFT/nft10.png';
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
		collection: {
			imageUrl: pic1,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 16,
		losing_trades: 7,
		spent: '$322K',
		mints: 900,
	},
	{
		id: 2,
		collection: {
			imageUrl: pic2,
		},
		wallet_address: '0xb4A7906bf780753522c4c5c5eafb5f9905cfFD1E',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 9,
		spent: '$312K',
		mints: 534,
	},
	{
		id: 3,
		collection: {
			imageUrl: pic3,
		},
		wallet_address: '0x11Da906bf780753522c4c5c5eafb5f9905cfFe6B',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 32,
		losing_trades: 4,
		spent: '$133K',
		mints: 345,
	},
	{
		id: 4,
		collection: {
			imageUrl: pic4,
		},
		wallet_address: '0x6f82906bf780753522c4c5c5eafb5f9905cfc53d',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 3,
		spent: '$453K',
		mints: 234,
	},
	{
		id: 5,
		collection: {
			imageUrl: pic5,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 8,
		losing_trades: 12,
		spent: '$123K',
		mints: 234,
	},
	{
		id: 6,
		collection: {
			imageUrl: pic1,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 16,
		losing_trades: 7,
		spent: '$322K',
		mints: 900,
	},
	{
		id: 7,
		collection: {
			imageUrl: pic2,
		},
		wallet_address: '0xb4A7906bf780753522c4c5c5eafb5f9905cfFD1E',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 9,
		spent: '$312K',
		mints: 534,
	},
	{
		id: 8,
		collection: {
			imageUrl: pic3,
		},
		wallet_address: '0x11Da906bf780753522c4c5c5eafb5f9905cfFe6B',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 32,
		losing_trades: 4,
		spent: '$133K',
		mints: 345,
	},
	{
		id: 9,
		collection: {
			imageUrl: pic4,
		},
		wallet_address: '0x6f82906bf780753522c4c5c5eafb5f9905cfc53d',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 3,
		spent: '$453K',
		mints: 234,
	},
	{
		id: 10,
		collection: {
			imageUrl: pic5,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 8,
		losing_trades: 12,
		spent: '$123K',
		mints: 234,
	},
];

export const afterScrollData: tTopRows[] = [
	{
		id: 11,
		collection: {
			imageUrl: pic1,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 16,
		losing_trades: 7,
		spent: '$322K',
		mints: 900,
	},
	{
		id: 12,
		collection: {
			imageUrl: pic2,
		},
		wallet_address: '0xb4A7906bf780753522c4c5c5eafb5f9905cfFD1E',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 9,
		spent: '$312K',
		mints: 534,
	},
	{
		id: 13,
		collection: {
			imageUrl: pic3,
		},
		wallet_address: '0x11Da906bf780753522c4c5c5eafb5f9905cfFe6B',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 32,
		losing_trades: 4,
		spent: '$133K',
		mints: 345,
	},
	{
		id: 14,
		collection: {
			imageUrl: pic4,
		},
		wallet_address: '0x6f82906bf780753522c4c5c5eafb5f9905cfc53d',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 3,
		spent: '$453K',
		mints: 234,
	},
	{
		id: 15,
		collection: {
			imageUrl: pic5,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 8,
		losing_trades: 12,
		spent: '$123K',
		mints: 234,
	},
	{
		id: 16,
		collection: {
			imageUrl: pic1,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 16,
		losing_trades: 7,
		spent: '$322K',
		mints: 900,
	},
	{
		id: 17,
		collection: {
			imageUrl: pic2,
		},
		wallet_address: '0xb4A7906bf780753522c4c5c5eafb5f9905cfFD1E',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 9,
		spent: '$312K',
		mints: 534,
	},
	{
		id: 18,
		collection: {
			imageUrl: pic3,
		},
		wallet_address: '0x11Da906bf780753522c4c5c5eafb5f9905cfFe6B',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 32,
		losing_trades: 4,
		spent: '$133K',
		mints: 345,
	},
	{
		id: 19,
		collection: {
			imageUrl: pic4,
		},
		wallet_address: '0x6f82906bf780753522c4c5c5eafb5f9905cfc53d',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 12,
		losing_trades: 3,
		spent: '$453K',
		mints: 234,
	},
	{
		id: 20,
		collection: {
			imageUrl: pic5,
		},
		wallet_address: '0x9dcC906bf780753522c4c5c5eafb5f9905cf5B71',
		portfolio_value: toLocaleUS(1977),
		pnl: toLocaleUS(98.32),
		winning_trades: 8,
		losing_trades: 12,
		spent: '$123K',
		mints: 234,
	},
];

export const collumn = [
	{
		key: 'wallet_address',
		name: 'Wallet Address',
		isSort: false,
		align: 'left',
		className: 'number',
	},
	{
		key: 'empty2',
		name: '',
		isSort: false,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'portfolio_value',
		name: 'Portfolio Value',
		isSort: true,
		align: 'left',
	},
	{
		key: 'pnl',
		name: 'PNL',
		isSort: true,
		align: 'left',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'winning_trades',
		name: 'Winning Trades',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'losing_trades',
		name: 'Losing Trades',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'spent',
		name: 'Spent',
		isSort: false,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'empty3',
		name: '',
		isSort: false,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'mints',
		name: 'Mints',
		isSort: false,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
];

export const selectData: tBaseSelect = [
	{ title: 'Portfolio Value (High to Low)', key: 'portfolio_value_high_low' },
	{ title: 'Portfolio Value (Low to High)', key: 'portfolio_value_low_high' },
	{ title: 'PNL (High to Low)', key: 'PNL_high_low' },
	{ title: 'PNL (Low to High)', key: 'PNL_low_high' },
	{ title: 'Winning Trades (Max to Min)', key: 'winning_trades_max_min' },
	{ title: 'Winning Trades (Min to Max)', key: 'winning_trades_min_max' },
	{ title: 'Losing Trades (Max to Min)', key: 'losing_trades_max_min' },
	{ title: 'Losing Trades (Min to Max)', key: 'losing_trades_min_max' },
];
