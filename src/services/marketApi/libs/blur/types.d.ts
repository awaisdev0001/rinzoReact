import { BigNumber } from "ethers";

export as namespace Blur;

export type tInput = {
  buys: tInputBuy[];
  cancelReasons: tInputCancel[];
};

export type tInputBuy = {
  txnData: {
    data: string;
    value: BigNumber;
    to: string;
  };
  gasEstimate: number;
  amountFromPool: BigNumber;
  includedTokens: tInputToken[];
};

export type tInputCancel = {};

export type tInputToken = {
  contractAddress: string;
  tokenId: BigNumber;
};

export type tExchangeFee = {
  rate: number;
  recipient: string;
}

export type tExchangeOrder = {
  trader: string;
  side: number; // enum Side { Buy, Sell }
  matchingPolicy: string;
  collection: string;
  tokenId: BigNumber;
  amount: BigNumber;
  paymentToken: string;
  price: BigNumber;
  listingTime: BigNumber;
  /* Order expiration timestamp - 0 for oracle cancellations. */
  expirationTime: BigNumber;
  fees: tExchangeFee[];
  salt: BigNumber;
  extraParams: string;
}

export type tExchangeInput = {
  order: tExchangeOrder;
  v: number;
  r: BigNumber;
  s: BigNumber;
  extraSignature: string;
  signatureVersion: number; // enum SignatureVersion { Single, Bulk }
  blockNumber: BigNumber;
}

export type tExchangeExecution = {
  sell: tExchangeInput;
  buy: tExchangeInput;
}
