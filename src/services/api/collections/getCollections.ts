import { apiClient } from "../config";
import { ICollectionsList } from "src/typed/requests/collections";

async function getCollections(
  page: number,
  sort: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<ICollectionsList>(
      `/collections/list`,
      {
        page,
        sort,
        period,
      },
      {
        // pass the componentId as part of the request config
        headers: {
          componentId: componentId,
        },
      }
    );
    return res.data;
  } catch (ex) {}
}

export default getCollections;
