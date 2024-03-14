import { BigNumber } from "ethers";

export as namespace X2Y2;

export type tInput = {
  input: string;
};

export type tOrderItem = {
  price: BigNumber;
  data: string;
};

export type tOrder = {
  salt: BigNumber;
  user: string;
  network: BigNumber;
  intent: BigNumber;
  delegateType: number;
  deadline: BigNumber;
  currency: string;
  dataMask: string;
  items: tOrderItem[];
  // signature
  r: string;
  s: string;
  v: BigNumber;
  signVersion: BigNumber;
};

export type tFee = {
  percentage: BigNumber;
  to: string;
};

export type tSettleDetail = {
  op: number;
  orderIdx: number;
  itemIdx: number;
  price: BigNumber;
  itemHash: string;
  executionDelegate: string;
  dataReplacement: string;
  bidIncentivePct: BigNumber;
  aucMinIncrementPct: BigNumber;
  aucIncDurationSecs: BigNumber;
  fees: tFee[];
};

export type tSettleShared = {
  salt: BigNumber;
  deadline: BigNumber;
  amountToEth: BigNumber;
  amountToWeth: BigNumber;
  user: string;
  canFail: boolean;
};

export type tRunInput = {
  orders: tOrder[];
  details: tSettleDetail[];
  shared: tSettleShared;
  // signature
  r: string;
  s: string;
  v: BigNumber;
};

export type tPair721 = {
  token: string;
  tokenId: BigNumber;
};

export type tPair1155 = {
  token: string;
  tokenId: BigNumber;
  amount: BigNumber;
};
