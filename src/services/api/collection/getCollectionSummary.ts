import { apiClient } from "../config";
import { ICollectionSummary } from "src/typed/requests/collection";

async function getCollectionSummary(
  contractAddress: string,
  period: string,
  componentId: string
) {
  try {
    const res = await apiClient.post<ICollectionSummary>(
      `/collection/stats/summary`,
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

export default getCollectionSummary;
