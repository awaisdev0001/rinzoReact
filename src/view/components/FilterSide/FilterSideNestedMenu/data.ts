import { tCurrency, tMenuItem } from 'src/typed/types';

export const menuDataHandler = (curr: tCurrency): tMenuItem[] => [
	{
		title: 'Wallet Status',
		id: 'walletStatuses',
		items: [
			{
				title: 'Smart Wallet',
				id: 'smart wallet',
				number: 12,
			},
		],
	},
	{
		title: 'Marketplace',
		id: 'marketplace',
		items: [
			{
				title: 'All',
				id: "all",
				number: 132,
			},
			{
				title: 'Rinzo',
				id: "rinzo",
				number: 53,
			},
			{
				title: 'Opensea',
				id: "opensea",
				number: 34,
			},
			{
				title: 'Gem.xyz',
				id: "gem",
				number: 20,
			},
			{
				title: 'x2y2.xyz',
				id: "x2y2",
				number: 18,
			},
		],
	},
	{
		title: `Price ${curr === 'eth' ? '(ETH)' : '(USD)'}`,
		id: "priceWeiRange",
		hasRange: true,
		items: [],
	},
];

export const menu: tMenuItem[] = [
	{
		title: 'Wallet Status',
		id: 'walletStatuses',
		items: [
			{
				title: 'Smart Wallet',
				id: 'smart wallet',
				number: 12,
			},
		],
	},
	{
		title: 'Marketplace',
		id: 'marketplace',
		items: [
			{
				title: 'All',
				id: "all",
				number: 132,
			},
			{
				title: 'Rinzo',
				id: "rinzo",
				number: 53,
			},
			{
				title: 'Opensea',
				id: "opensea",
				number: 34,
			},
			{
				title: 'Gem.xyz',
				id: "gem",
				number: 20,
			},
			{
				title: 'x2y2.xyz',
				id: "x2y2",
				number: 18,
			},
		],
	},
	{
		title: `Price (ETH)`,
		id: "priceWeiRange",
		hasRange: true,
		items: [],
	},
];
