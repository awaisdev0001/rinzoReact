import { IActivitiesList } from "src/typed/requests/activities";
import { apiClient } from "../config";

async function getWalletActivities(
  page: number,
  address: string,
  types: string[],
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<IActivitiesList>(
    `/wallet/activities/list`,
    {
      page,
      address,
      types,
    },
    {
      headers: {
        componentId: componentId,
      },
    }
  );
  return res.data;
}

export const getWalletActivities_ItemCountPerRequest = 20;

export default getWalletActivities;
