import { ITimeseriesAssetsAcquired } from "src/typed/requests/wallet/stats/timeseries";
import { apiClient } from "../config";

async function getWalletAssetsAcquired(
  address: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<ITimeseriesAssetsAcquired[]>(
    `/wallet/stats/timeseries/assets-acquired`,
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

export default getWalletAssetsAcquired;
