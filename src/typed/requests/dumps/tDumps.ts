type tDumpsListResultItems = {
  lastPriceWei: number;
  market: string;
  name: string;
  tokenID: string;
};

export type tDumpsListResult = {
  collectionName: string;
  contractAddress: string;
  dumper: string;
  items: tDumpsListResultItems | [];
  time: string;
  transactionID: string;
  valueChangeWei: number;
  valueWei: number;
  verified: boolean;
};
