export interface ITimeseriesAssetsAcquired {
  bucket: string;
  value: number;
}

export interface ITimeseriesPnL {
  bucket: string;
  wei: string;
  usd: number;
}

export interface ITimeseriesPortfolioValue {
  bucket: string;
  value: number;
}
