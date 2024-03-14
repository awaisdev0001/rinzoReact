export type tStatsPnLHistoryResult = {
  timestamp: string;
  contractAddress: string;
  tokenID: string;
  collectionName: string;
  name: string;
  image: string;
  market: string;
  transactionHash: string;
  eventType: string;
  profitWei: string;
  profitUsd: number;
  profitWeiPct: number;
  profitUsdPct: number;
  gasSpentWei: string;
  gasSpentUsd: number;
};
