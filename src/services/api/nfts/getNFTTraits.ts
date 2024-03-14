import { apiClient } from "../config";
import { INFTTraits } from "src/typed/requests/NFT";

async function getNFTTraits(
  contractAddress: string,
  tokenID: string,
  componentId: string // add the componentId parameter
) {
  try {
    const res = await apiClient.post<INFTTraits[]>(
      `/nft/traits`,
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

    if (res.status === 204) {
      return [] as INFTTraits[];
    } else {
      return res.data;
    }
  } catch (ex) {
    throw new Error("Failed to get NFT traits");
  }
}

export default getNFTTraits;
