import { apiClient } from "../config";
import { IStatsSummary } from "src/typed/requests/wallet/stats";

async function getWalletStatsSummary(
  address: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<IStatsSummary>(
    `/wallet/stats/summary`,
    {
      address: address.toLowerCase(),
      period,
    },
    {
      headers: {
        componentId: componentId,
      },
    }
  );
  return res.data;
}

export default getWalletStatsSummary;
