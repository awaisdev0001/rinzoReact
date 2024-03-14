import { apiClient } from "../config";

async function getCollectionTraitTypes(
  contractAddress: string,
  componentId: string
) {
  const res = await apiClient.post<string[]>(
    `/collection/traits/types`,
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

export default getCollectionTraitTypes;
