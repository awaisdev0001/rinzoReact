import { apiClient } from "../config";
import { ITimeseriesPortfolioValue } from "src/typed/requests/wallet/stats/timeseries";

async function getWalletPortfolioValue(
  address: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<ITimeseriesPortfolioValue[]>(
    `/wallet/stats/timeseries/portfolio-value`,
    {
      address: address.toLowerCase(),
      period,
    },
    {
      // pass the componentId as part of the request config
      headers: {
        componentId: componentId,
      },
    }
  );
  return res.data;
}

export default getWalletPortfolioValue;
