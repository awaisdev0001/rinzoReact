import { apiClient } from "../config";
import { ITimeseriesFloorPrice } from "src/typed/requests/collection/stats/timeseries";

async function getCollectionFloorPrice(
  contractAddress: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<ITimeseriesFloorPrice[]>(
      `/collection/stats/series/floorprice`,
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

export default getCollectionFloorPrice;
