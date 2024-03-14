import { apiClient } from "../config";
import { ITimeseriesWhales } from "src/typed/requests/collection/stats/timeseries";

async function getCollectionWhales(
  contractAddress: string,
  period: string,
  componentId: string
) {
  try {
    const res = await apiClient.post<ITimeseriesWhales[]>(
      `/collection/stats/series/whales`,
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

export default getCollectionWhales;
