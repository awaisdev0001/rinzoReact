import { ethers } from "ethers";
import {
  ITimeseriesAssetsAcquired,
  ITimeseriesPnL,
  ITimeseriesPortfolioValue,
} from "src/typed/requests/wallet/stats/timeseries";
import { tChartData, tChartDatasets } from "src/typed/types";

export function convertAssetsAcquiredToChartData(
  label: string,
  data: ITimeseriesAssetsAcquired[]
) {
  return {
    labels: data.map<string>((e) => e.bucket),
    datasets: [
      {
        label: label,
        data: data.map<number>((e) => e.value),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#8EB136",
        lineTension: 0.4,
      },
    ],
  } as tChartData;
}

export function convertPnLToChartData(label: string, data: ITimeseriesPnL[]) {
  return {
    labels: data.map<string>((e) => e.bucket),
    datasets: [
      {
        label: label,
        data: data.map<number>((e) => Number(ethers.utils.formatEther(e.wei))),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#8EB136",
        lineTension: 0.4,
      },
    ],
  } as tChartData;
}

export function convertPortfolioValueToChartData(
  label: string,
  data: ITimeseriesPortfolioValue[]
) {
  return {
    labels: data.map<string>((e) => e.bucket),
    datasets: [
      {
        label: label,
        data: data.map<number>((e) => e.value),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#8EB136",
        lineTension: 0.4,
      },
    ],
  } as tChartData;
}
