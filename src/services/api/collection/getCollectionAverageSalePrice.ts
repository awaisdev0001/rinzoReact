import { apiClient } from "../config";
import { ITimeseriesAverageSalesPrice } from "src/typed/requests/collection/stats/timeseries";

async function getCollectionAverageSalePrice(
  contractAddress: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<ITimeseriesAverageSalesPrice[]>(
      `/collection/stats/series/avgsaleprice`,
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

export default getCollectionAverageSalePrice;
