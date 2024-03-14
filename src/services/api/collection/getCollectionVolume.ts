import { apiClient } from "../config";
import { ITimeseriesVolume } from "src/typed/requests/collection/stats/timeseries";

async function getCollectionVolume(
  contractAddress: string,
  period: string,
  componentId: string
) {
  try {
    const res = await apiClient.post<ITimeseriesVolume[]>(
      `/collection/stats/series/volume`,
      {
        contractAddress,
        period,
      },
      {
        headers: {
          componentId: componentId,
        },
      }
    );
    return res.data;
  } catch (ex) {}
}

export default getCollectionVolume;
