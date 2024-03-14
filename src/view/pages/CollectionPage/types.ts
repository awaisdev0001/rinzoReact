import { tCollectionItem, tStatistics } from 'src/typed/types';

export type tCollection = {
	image: string;
	title: string;
	checked: boolean;
	author: string;
	description: string;
	twitter: string;
	discord: string;
	etherscan: string;
	website?: string;
	statistics: tStatistics[];
	items: tCollectionItem[];
};
