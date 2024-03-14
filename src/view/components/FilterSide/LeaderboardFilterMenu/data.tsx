import { ReactNode } from 'react';
import { CancelIcon, FireIcon, MintIcon, SaleIcon, TransferIcon } from 'src/assets/icons';
export type tActivityFilterButtons = 'listing' | 'sale' | 'cancel' | 'transfer' | 'mint' | 'offer';

type tButtonsArr = {
	buttonIcon: ReactNode;
	buttonTitle: string;
	buttonType: tActivityFilterButtons;
};

export const buttonsArr: tButtonsArr[] = [
	{
		buttonIcon: <FireIcon />,
		buttonTitle: 'Listing',
		buttonType: 'listing',
	},
	{
		buttonIcon: <SaleIcon />,
		buttonTitle: 'Sale',
		buttonType: 'sale',
	},
	{
		buttonIcon: <CancelIcon />,
		buttonTitle: 'Cancellation',
		buttonType: 'cancel',
	},
	{
		buttonIcon: <TransferIcon />,
		buttonTitle: 'Transfer',
		buttonType: 'transfer',
	},
	{
		buttonIcon: <MintIcon />,
		buttonTitle: 'Mint',
		buttonType: 'mint',
	},
	{
		buttonIcon: null,
		buttonTitle: 'Offer',
		buttonType: 'offer',
	},
];
