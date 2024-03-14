import { apiClient } from "../config";
import { ITimeseriesSmartWallets } from "src/typed/requests/collection/stats/timeseries";

async function getCollectionSmartWallets(
  contractAddress: string,
  period: string,
  componentId: string
) {
  try {
    const res = await apiClient.post<ITimeseriesSmartWallets[]>(
      `/collection/stats/series/smartwallets`,
      { contractAddress, period },
      {
        headers: {
          componentId: componentId,
        },
      }
    );
    return res.data;
  } catch (ex) {}
}

export default getCollectionSmartWallets;
