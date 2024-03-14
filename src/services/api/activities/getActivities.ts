import { apiClient } from "../config";
import { IActivitiesList } from "src/typed/requests/activities";

async function getActivities(
  page: number,
  types: string[],
  componentId: string
) {
  const res = await apiClient.post<IActivitiesList>(
    `/activities`,
    {
      page,
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

export const getActivities_ItemCountPerRequest = 20;

export default getActivities;
