import { apiClient } from "../config";
import { tRankRange } from "src/typed/requests1/tRankRange";
import { ICollectionItems } from "src/typed/requests/collection";
import { tTraitSet } from "src/typed/requests1/tTraitSet";

async function getCollectionItems(
  page: number,
  contractAddress: string,
  rankRange: tRankRange,
  sortBy: string,
  sortOrder: string,
  traits: tTraitSet[],
  componentId: string
) {
  const res = await apiClient.post<ICollectionItems>(
    `/collection/items`,
    {
      page,
      contractAddress: contractAddress.toLowerCase(),
      rankRange,
      sortBy,
      sortOrder,
      traits,
    },
    {
      headers: {
        componentId: componentId,
      },
    }
  );
  return res.data;
}

export const itemCountPerRequest = 20;

export default getCollectionItems;
