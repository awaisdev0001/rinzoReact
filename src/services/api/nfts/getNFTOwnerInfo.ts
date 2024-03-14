import { apiClient } from "../config";
import { INFTOwnerInfo } from "src/typed/requests/NFT";

async function getNFTOwnerInfo(
  contractAddress: string,
  tokenID: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<INFTOwnerInfo[]>(
      `/nft/owner`,
      {
        contractAddress,
        tokenID,
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

export default getNFTOwnerInfo;
