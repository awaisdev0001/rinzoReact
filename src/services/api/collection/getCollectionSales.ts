import { apiClient } from "../config";
import { ITimeseriesSales } from "src/typed/requests/collection/stats/timeseries";

async function getCollectionSales(
  contractAddress: string,
  period: string,
  componentId: string
) {
  try {
    const res = await apiClient.post<ITimeseriesSales[]>(
      `/collection/stats/series/sales`,
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

export default getCollectionSales;
