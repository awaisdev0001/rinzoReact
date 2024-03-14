import { tCurrency, tMenuItem } from 'src/typed/types';

export const offersReceivedFilterRows = (curr: tCurrency): tMenuItem[] => [
	{
		title: 'Status',
		id: 'status',
		items: [
			{
				title: 'Hide Junk Offers',
				id: 'Hide Junk Offers',
				number: 7,
			},
			{
				title: 'Expired Offers',
				id: 'Expired Offers',
				number: 6,
			},
		],
	},
	{
		title: 'Price',
		id: 'price',
		hasRange: true,
		rangeColor: 'AdditionalGold',
		items: [],
	},
	{
		title: 'Floor',
		id: 'floor',
		hasRange: true,
		items: [],
	},
	{
		title: 'Estimate',
		id: 'estimate',
		items: [
			{
				title: 'Hide Junk Offers',
				id: 'Hide Junk Offers',
				number: 7,
			},
			{
				title: 'Expired Offers',
				id: 'Expired Offers',
				number: 6,
			},
		],
	},

	{
		title: 'Marketplace',
		id: 'marketplace',
		items: [
			{
				title: 'All',
				id: 'All',
				number: 132,
			},
			{
				title: 'Rinzo',
				id: 'Rinzo',
				number: 53,
			},
			{
				title: 'Opensea',
				id: 'Opensea',
				number: 34,
			},
			{
				title: 'Gem.xyz',
				id: 'Gem.xyz',
				number: 20,
			},
			{
				title: 'x2y2.xyz',
				id: 'x2y2.xyz',
				number: 18,
			},
		],
	},
];
