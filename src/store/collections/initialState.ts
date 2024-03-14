import { tCollectionItem } from 'src/typed/types';

export type tCollectionState = {
  arrayOfCards: tCollectionItem[];
  selectedCards: tCollectionItem[];
  cartSliderRange: number;
  totalAmountOfCards: number;
  isFiltered: boolean;
};

export const collectionsInitialState: tCollectionState = {
  arrayOfCards: [],
  selectedCards: [],
  cartSliderRange: 0,
  totalAmountOfCards: 0,
  isFiltered: false,
};
