import { apiClient } from "../config";
import { tMarketCount } from "src/typed/requests1/tMarketCount";

async function getCollectionMarketCounts(
  contractAddress: string,
  componentId: string
) {
  const res = await apiClient.post<tMarketCount[]>(
    `/collection/listings/markets`,
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

export default getCollectionMarketCounts;
