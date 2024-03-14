import { tTraitValue } from "src/typed/requests/collection/traits/tTraitValue";
import { apiClient } from "../config";

async function getCollectionTraitValues(
  contractAddress: string,
  type: string,
  componentId: string
) {
  const res = await apiClient.post<tTraitValue[]>(
    `/collection/traits/values`,
    {
      contractAddress: contractAddress.toLowerCase(),
      type,
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

export default getCollectionTraitValues;
