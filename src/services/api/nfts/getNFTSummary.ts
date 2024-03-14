import { apiClient } from "../config";
import { IStatsSummary } from "src/typed/requests/NFT/stats";

async function getNFTSummary(
  contractAddress: string,
  tokenID: string,
  period: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<IStatsSummary>(
      `/nft/stats/summary`,
      {
        contractAddress,
        tokenID,
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

export default getNFTSummary;
