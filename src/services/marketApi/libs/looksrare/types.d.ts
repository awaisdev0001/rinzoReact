import { BigNumber } from "ethers";

export as namespace Looksrare;

export type tTakerOrder = {
  isOrderAsk: boolean; // true --> ask / false --> bid
  taker: string; // msg.sender
  price: BigNumber; // final price for the purchase
  tokenId: BigNumber;
  minPercentageToAsk: number; // // slippage protection (9000 --> 90% of the final price must return to ask)
  params: string; // other params (e.g., tokenId)
};

export type tMakerOrder = {
  isOrderAsk: boolean; // true --> ask / false --> bid
  signer: string; // signer of the maker order
  collection: string; // collection address
  price: BigNumber; // price (used as )
  tokenId: BigNumber; // id of the token
  amount: BigNumber; // amount of tokens to sell/purchase (must be 1 for ERC721, 1+ for ERC1155)
  strategy: string; // strategy for trade execution (e.g., DutchAuction, StandardSaleForFixedPrice)
  currency: string; // currency (e.g., WETH)
  nonce: number; // order nonce (must be unique unless new maker order is meant to override existing one e.g., lower ask price)
  startTime: number; // startTime in timestamp
  endTime: number; // endTime in timestamp
  minPercentageToAsk: number; // slippage protection (9000 --> 90% of the final price must return to ask)
  params: string; // additional parameters
  v: string; // v: parameter (27 or 28)
  r: string; // r: parameter
  s: string; // s: parameter
};

export type tLooksrareOrder = {
  hash: string;
  collectionAddress: string;
  tokenId: BigNumber;
  isOrderAsk: boolean,
  signer: string;
  strategy: string;
  currencyAddress: string;
  amount: BigNumber,
  price: BigNumber;
  nonce: number;
  startTime: number;
  endTime: number;
  minPercentageToAsk: number;
  params: string;
  status: string;
  signature: string;
  v: string;
  r: string;
  s: string;
};
