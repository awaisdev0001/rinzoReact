type tSweepsListResultItems = {
  lastPriceWei: number;
  market: string;
  name: string;
  tokenID: string;
};

export type tSweepsListResult = {
  collectionName: string;
  contractAddress: string;
  items: tSweepsListResultItems[] | [];
  sweeper: string;
  time: string;
  transactionID: string;
  valueChangeWei: number;
  valueWei: number;
  verified: boolean;
};
