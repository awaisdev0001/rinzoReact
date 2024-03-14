import { tOrder } from 'src/typed/types';
import yesPic from 'src/assets/images/cool.png';

export const firstFetch: tOrder[] = [
	{
		desc: 'Initializing Wallet',
		child: [],
		waiting: true,
	},
];

export const secondFetch: tOrder[] = [
	{
		desc: 'Initializing Wallet',
		child: [],
		waiting: false,
	},

	{
		desc: 'initializing Data',
		child: [],
		waiting: true,
	},
];

export const thirdFetch: tOrder[] = [
	{
		desc: 'Initializing Wallet',
		child: [],
		waiting: false,
	},

	{
		desc: 'Approving items for sale',
		child: [
			{
				icon: yesPic,
				desc: 'Bored Ape Yacht Club for Rinzo',
			},
			{
				icon: yesPic,
				desc: 'KILLABEARS for Rinzo',
			},
			{
				icon: yesPic,
				desc: 'CyberBrokers for Rinzo',
			},
		],
		waiting: true,
	},
];

export const forthFetch: tOrder[] = [
	{
		desc: 'Initializing Wallet',
		child: [],
		waiting: false,
	},

	{
		desc: 'Approving items for sale',
		child: [
			{
				icon: yesPic,
				desc: 'Bored Ape Yacht Club for Rinzo',
			},
			{
				icon: yesPic,
				desc: 'KILLABEARS for Rinzo',
			},
			{
				icon: yesPic,
				desc: 'CyberBrokers for Rinzo',
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
