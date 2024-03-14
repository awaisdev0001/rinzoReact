import { apiClient } from "../config";
import { IStatsPnLHistory } from "src/typed/requests/wallet/stats";

async function getWalletPnLHistory(
  page: number,
  address: string,
  startTime: string,
  endTime: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<IStatsPnLHistory>(
    `/wallet/stats/pnlhistory`,
    {
      page,
      address: address.toLowerCase(),
      startTime, //: "2021-01-20T06:17:12Z",
      endTime, //: "2021-11-16T05:15:00Z",
    },
    {
      // pass the componentId as part of the request config
      headers: {
        componentId: componentId,
      },
    }
  );
  return res.data;
}

export const getWalletPnLHistory_ItemCountPerRequest = 10;

export default getWalletPnLHistory;
