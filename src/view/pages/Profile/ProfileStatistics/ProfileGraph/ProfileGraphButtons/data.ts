import { toLocaleUS } from 'src/helpers';
import { tProfileGraphButton } from './types';

export const buttonsData: tProfileGraphButton[] = [
	{
		title: 'PNL',
		price: `$${toLocaleUS(25053.43)}`,
		hasUsd: false,
		hasEth: false,
		btnType: 'pnl',
	},
	{
		title: 'Portfolio Value',
		price: toLocaleUS(18824),
		hasUsd: true,
		hasEth: true,
		btnType: 'portfolioValue',
	},
	{
		title: 'Assets Acquired',
		price: '78',
		hasUsd: false,
		hasEth: false,
		btnType: 'assetsAcquired',
	},
];
