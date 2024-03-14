import { apiClient } from "../config";
import { IActivitiesList } from "src/typed/requests/activities";

async function getCollectionActivities(
  page: number,
  contractAddress: string,
  types: string[],
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<IActivitiesList>(
    `/collection/activities`,
    {
      page,
      contractAddress,
      types,
    },
    {
      // pass the componentId as part of the request config
      headers: {
        componentId: componentId,
      },
    }
  );

  for (let i = 0; i < res.data.result.length; i++) {
    res.data.result[i].contractAddress = contractAddress;
  }

  return res.data;
}

export const getCollectionActivities_ItemCountPerRequest = 20;

export default getCollectionActivities;
