import { apiClient } from "../config";
import { tEthRange } from "src/typed/requests1/tEthRange";

async function getCollectionPriceRange(
  contractAddress: string,
  componentId: string
) {
  const res = await apiClient.post<tEthRange>(
    `/collection/listings/pricerange`,
    {
      contractAddress: contractAddress.toLowerCase(),
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

export default getCollectionPriceRange;
