import { ReactNode } from 'react';

export type tMarketInsights = {
	icon: ReactNode;
	title: string;
};

export type tFeesCard = {
	icon: ReactNode | string;
	title: string;
	images: string[];
	gasAmount: number;
	avgCostPerItem: number;
	usdPrice: number;
};
