import { apiClient } from "../config";
import { IStatsTimeseries } from "src/typed/requests/NFT/stats";

async function getNFTTimeSeries(
  contractAddress: string,
  tokenID: string,
  type: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<IStatsTimeseries>(
      `/nft/stats/timeseries`,
      {
        contractAddress,
        tokenID,
        type,
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

export default getNFTTimeSeries;
