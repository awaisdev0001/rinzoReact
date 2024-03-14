import { apiClient } from "../config";
import { tEthRange } from "src/typed/requests1/tEthRange";
import { IDumpsList } from "src/typed/requests/dumps";

async function getDumps(
  page: number,
  markets: string[],
  walletStatuses: string[],
  priceWeiRange: tEthRange
) {
  try {
    const res = await apiClient.post<IDumpsList>(`/dumps/list`, {
      page,
      markets,
      walletStatuses,
      priceWeiRange,
    });
    return res.data;
  } catch (ex) {}
}

export default getDumps;
