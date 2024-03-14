import { tNFTResult } from "./tNFT";

export interface INFTActivities {
  hasNextPage: boolean;
  result: tNFTResult[] | [];
}

export interface INFTInfo {
  animationType: string;
  animationUrl: string;
  description: string;
  estimatedValueWei: number;
  image: string;
  imageType: string;
  name: string;
  rarityRank: number;
  rarityScore: number;
}
export interface INFTOwnerInfo {
  address: string;
  seller: string;
  fromAddress: string;
  acquiredAt: string;
  totalTokens: number;
  paymentToken: string;
  paymentTokenDecimals: number;
  paymentTokenEthRate: number;
  amountOriginal: number;
  amountWei: string;
  amountUsd: number;
  gasWei: string;
  gasUsd: number;
  exchangeFeesOriginal: number;
  exchangeFeesWei: string;
  exchangeFeesUsd: number;
  collectionFeesOriginal: number;
  collectionFeesWei: string;
  collectionFeesUsd: number;
  referralFeesOriginal: number;
  referralFeesWei: string;
  referralFeesUsd: number;
  market: string;
  type: string;
}
export interface INFTLastPurchase {
  buyer: string;
  collectionFeesOriginal: number;
  collectionFeesUsd: number;
  collectionFeesWei: number;
  exchange: string;
  exchangeFeesOriginal: number;
  exchangeFeesUsd: number;
  exchangeFeesWei: number;
  gasUsd: number;
  gasWei: number;
  paymentToken: string;
  paymentTokenDecimals: number;
  paymentTokenEthRate: number;
  priceOriginal: number;
  priceUsd: number;
  priceWei: number;
  referralFeesOriginal: number;
  referralFeesUsd: number;
  referralFeesWei: number;
  seller: string;
  timestamp: string;
  totalTokens: number;
}

export interface INFTTraits {
  type: string;
  value: string;
  rarity: number;
  occurrences: number;
}
