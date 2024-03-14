import { apiClient } from "../config";
import { INFTInfo } from "src/typed/requests/NFT";

async function getNFTInfo(
  contractAddress: string,
  tokenID: string,
  componentId: string // add the componentId
) {
  try {
    const res = await apiClient.post<INFTInfo>(
      `/nft/info`,
      {
        contractAddress,
        tokenID,
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

export default getNFTInfo;
