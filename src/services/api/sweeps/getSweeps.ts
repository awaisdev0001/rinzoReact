import { apiClient } from "../config";
import { tEthRange } from "src/typed/requests1/tEthRange";
import { ISweepsList } from "src/typed/requests/sweeps/ISweeps";

async function getSweeps(
  page: number,
  markets: string[],
  walletStatuses: string[],
  priceWeiRange: tEthRange,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<ISweepsList>(
      `/sweeps/list`,
      {
        page,
        markets,
        walletStatuses,
        priceWeiRange,
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

export default getSweeps;
