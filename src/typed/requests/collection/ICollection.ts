import {
  tCollectionItemsResult,
  tCollectionListingsResult,
} from "./tCollection";

export interface ICollectionInfo {
  name: string;
  displayName: string;
  contractName: string;
  tokenStandard: string;
  owner: string;
  creator: string;
  creationTime: string;
  creationTx: string;
  symbol: string;
  totalSupply: number;
  verified: boolean;
  banner: string;
  image: string;
  description: string;
  website: string;
  discord: string;
  twitter: string;
  instagram: string;
  telegram: string;
  creatorFeesPercent: number;
}

export interface ICollectionItems {
  hasNextPage: boolean;
  result: tCollectionItemsResult[] | [];
}

export interface ICollectionListings {
  hasNextPage: boolean;
  result: tCollectionListingsResult[] | [];
}

export interface ICollectionSummary {
  averageSalePrice: number;
  averageSalePriceTrend: string;
  floorPriceChangeWei: number;
  floorPriceWei: number;
  items: number;
  owners: number;
  ownersChange: number;
  smartWallets: number;
  smartWalletsChange: number;
  volume: number;
}
