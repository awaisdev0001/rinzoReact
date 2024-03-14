import { toLocaleUS } from 'src/helpers';

export const cartChoices = [
	{
		hasIcon: true,
		tokenName: 'Ethereum',
		balance: `${toLocaleUS(943812)} ETH`,
		type: 'eth',
	},
	{
		hasIcon: false,
		tokenName: 'Some Token',
		balance: `${toLocaleUS(943812)} ADA`,
		type: 'ada',
	},
	{
		hasIcon: false,
		tokenName: 'Some Token',
		balance: `${toLocaleUS(943812)} BTC`,
		type: 'btc',
	},
];
