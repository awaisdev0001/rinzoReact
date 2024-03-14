export type tActivitiesResult = {
  timestamp: string;
  type: string;
  contractAddress: string;
  collectionName?: string;
  tokenID: string;
  name: string;
  hash?: string;
  priceWei: string;
  priceUsd: number;
  rarity: number;
  rank: number;
  image: string;
};
