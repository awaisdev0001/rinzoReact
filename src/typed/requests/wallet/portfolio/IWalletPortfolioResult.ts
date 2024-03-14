export interface IWalletPortfolioResult {
  hasNextPage: boolean;
  result: tWalletPortfolioItem[] | [];
}

export type tWalletPortfolioItem = {
  acquiredAt: string;
  contractAddress: string;
  image: string;
  listings: tWalletPortfolioItemMarket[];
  name: string;
  rarityRank: number;
  rarityScore: number;
  tokenID: string;
};

export type tWalletPortfolioItemMarket = {
  market: string;
  priceWei: string;
};
