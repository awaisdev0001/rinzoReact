import { tStatistics } from 'src/typed/types';

// 
export type tNFT = {
  id: string | number;

  collection: { slug: string; name: string; contract_address: string; token_id:number; };

  imageUrl: string;
  name: string;
  author: string;
  boughtPrice: number;
  rank: number;
  maxRank: number;
  score: number;
  markets: {
    url: string;
    image: string;
  }[];
  priceUSD: number;
  priceETH: number;
  estimatedPriceUSD: number;
  estimatedPriceETH: number;
  estimatePercent: {
    duration: boolean;
    value: number;
  };
  traits: tTraitsRows[];
  statistics: tStatistics[];
  info: tInfo;
  description: string;
  tags: {
    title: string;
    type: string;
  }[];
  activity: tActivity[];
  expiry: string;
};

export type tTraitsRows = {
    id: string | number;
    trait_type: string;
    trait_value: {
        value: string;
        type?: string;
    };
    occurrences: string;
    rarity_score: number;
};

export type tInfo = {
    contract_address: { address: string; etherscan: string };
    token_id: string;
    token_standard: string;
    blockchain: string;
    creator_fees: string;
};

export type tActivity = {
    id: string | number;
    tag: string;
    priceETH: number;
    priceUSD: number;
    date: string;
    from: string;
    to?: string;
};

export interface getNFTDetails {
  name: string;
  contract_address: string;
  token_id: number | string; 
  image: string;
  owner: string;
  rank: number;
  max_rank: number;
  rarity_score: number;
  bought_price: string;
}


