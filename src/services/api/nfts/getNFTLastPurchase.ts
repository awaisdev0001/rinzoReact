import { apiClient } from "../config";
import { INFTLastPurchase } from "src/typed/requests/NFT";

async function getNFTLastPurchase(
  contractAddress: string,
  tokenID: string,
  componentId: string //  add the componentId parameter
) {
  try {
    const res = await apiClient.post<INFTLastPurchase>(
      `/nft/lastpurchase`,
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

export default getNFTLastPurchase;
