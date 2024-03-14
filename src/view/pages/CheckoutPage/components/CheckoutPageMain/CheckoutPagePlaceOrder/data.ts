import type { tOrder } from './types';
import opensea from 'src/assets/images/marketingPage/iconOpensea.svg';

export const firstFetch: tOrder[] = [
	{
		desc: 'Start proceeding the order',
		child: [],
		waiting: true,
	},
];

export const secondRequest: tOrder[] = [
	{
		desc: 'Start proceeding the order',
		child: [],
		waiting: false,
	},
	{
		desc: 'Confirm in your Wallet',
		child: [],
		waiting: true,
	},
];

export const thirdRequest: tOrder[] = [
	{
		desc: 'Start proceeding the order',
		child: [],
		waiting: false,
	},
	{
		desc: 'Confirm in your Wallet',
		child: [],
		waiting: false,
	},
	{
		desc: 'Transaction pending...',
		child: [
			{
				icon: opensea,
				desc: 'buy Bored Ape Yacht Club #3867 for ',
			},
			{
				icon: opensea,
				desc: 'buy Bored Ape Yacht Club #3867 for ',
			},
			{
				icon: opensea,
				desc: 'buy Bored Ape Yacht Club #3867 for ',
			},
		],
		waiting: true,
	},
];

export const forthRequest: tOrder[] = [
	{
		desc: 'Start proceeding the order',
		child: [],
		waiting: false,
	},
	{
		desc: 'Confirm in your Wallet',
		child: [],
		waiting: false,
	},
	{
		desc: 'Transaction pending...',
		child: [
			{
				icon: opensea,
				desc: 'buy Bored Ape Yacht Club #3867 for ',
			},
			{
				icon: opensea,
				desc: 'buy Bored Ape Yacht Club #3867 for ',
			},
			{
				icon: opensea,
				desc: 'buy Bored Ape Yacht Club #3867 for ',
			},
		],
		waiting: false,
	},
	{
		desc: 'Success',
		child: [],
		waiting: true,
	},
];
