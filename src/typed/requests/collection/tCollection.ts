export type tCollectionItemsResult = {
  image: string;
  name: string;
  rarityRank: number;
  rarityScore: number;
  tokenID: string;
};


export type tCollectionListingsResult = {
  name: string;
  image: string;
  rarityRank: number;
  rarityScore: number;
  tokenID: string;
  listings: tCollectionListingsMarket[];
};


export type tCollectionListingsMarket = {
  market: string;
  priceWei: string;
};
