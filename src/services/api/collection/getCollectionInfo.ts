import { apiClient } from "../config";
import { ICollectionInfo } from "src/typed/requests/collection";

async function getCollectionInfo(contractAddress: string, componentId: string) {
  const res = await apiClient.post<ICollectionInfo>(
    `/collection/info`,
    { contractAddress: contractAddress.toLowerCase() },
    {
      // pass the componentId as part of the request config
      headers: {
        componentId: componentId,
      },
    }
  );
  console.log("res", res.data)
  return res.data;
}

export default getCollectionInfo;
