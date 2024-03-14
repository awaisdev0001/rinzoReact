import { tStatsPnLHistoryResult } from "./tStats";

export interface IStatsPnLHistory {
  hasNextPage: boolean;
  result: tStatsPnLHistoryResult[] | [];
}

export interface IStatsSummary {
  offersSent: number;
  offersReceived: number;
  avgOfferSentWei: string;
  avgOfferSentUsd: number;
  avgOfferReceivedWei: string;
  avgOfferReceivedUsd: number;
  avgProfitWei: string;
  avgProfitUsd: number;
  highestProfitWei: string;
  highestProfitUsd: number;
  avgLossWei: string;
  avgLossUsd: number;
  highestLossWei: string;
  highestLossUsd: number;
  avgSpentWei: string;
  avgSpentUsd: number;
  totalSpentWei: string;
  totalSpentUsd: number;
}
