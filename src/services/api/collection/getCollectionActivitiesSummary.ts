import { apiClient } from "../config";
import { IActivitiesList } from "src/typed/requests/activities";

async function getCollectionActivitiesSummary(
  contractAddress: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<IActivitiesList>(
      `/collection/activities/summary`,
      { contractAddress },
      {
        headers: {
          componentId: componentId,
        },
      }
    );
    return res.data;
  } catch (ex) {}
}

export default getCollectionActivitiesSummary;
