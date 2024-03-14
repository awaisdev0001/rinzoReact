import { apiClient } from "../config";
import { ITimeseriesPnL } from "src/typed/requests/wallet/stats/timeseries";

async function getWalletPnL(
  address: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<ITimeseriesPnL[]>(
    `/wallet/stats/timeseries/pnl`,
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

export default getWalletPnL;
