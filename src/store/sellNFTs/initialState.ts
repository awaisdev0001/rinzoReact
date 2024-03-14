import { tCollectionItemExtend } from "src/typed/types";
import { tMarketplacesExtend } from "src/view/pages/SellNFTs/CreateListing/types";

export type tSellNFTState = {
  arrayOfCards: tCollectionItemExtend[];
  selectedCards: tCollectionItemExtend[];
  totalAmountOfNFTs: number;
  arrayOfMarketPlaces: tMarketplacesExtend[];
  summarySection: tCollectionItemExtend[]
};

export const sellInitialState: tSellNFTState = {
  arrayOfCards: [],
  selectedCards: [],
  arrayOfMarketPlaces: [],
  totalAmountOfNFTs: 0,
  summarySection:[]
};
