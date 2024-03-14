import { tCollectionItem } from 'src/typed/types';

export type tSendInitialState = {
	arrayOfCards: tCollectionItem[];
	selectedCards: tCollectionItem[];
	totalAmountOfNFTs: number;
};

export const sendInitialState: tSendInitialState = {
	arrayOfCards: [],
	selectedCards: [],
	totalAmountOfNFTs: 0,
};
