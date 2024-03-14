import { apiClient } from "../config";
import { tEthRange } from "src/typed/requests1/tEthRange";
import { tRankRange } from "src/typed/requests1/tRankRange";
import { ICollectionListings } from "src/typed/requests/collection";
import { tTraitSet } from "src/typed/requests1/tTraitSet";

async function getCollectionListings(
  page: number,
  contractAddress: string,
  rankRange: tRankRange,
  priceWeiRange: tEthRange,
  markets: string[],
  sortBy: string,
  sortOrder: string,
  traits: tTraitSet[],
  componentId: string
) {
  const res = await apiClient.post<ICollectionListings>(
    `/collection/listings`,
    {
      page,
      contractAddress: contractAddress.toLowerCase(),
      rankRange,
      priceWeiRange,
      markets,
      sortBy,
      sortOrder,
      traits,
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

export default getCollectionListings;
