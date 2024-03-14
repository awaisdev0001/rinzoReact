import { apiClient } from "../config";
import { IActivitiesActivitiesSummary } from "src/typed/requests/wallet/activities";

async function getWalletActivitiesSummary(
  address: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<IActivitiesActivitiesSummary>(
      `/wallet/activities/summary`,
      {
        address,
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

export default getWalletActivitiesSummary;
