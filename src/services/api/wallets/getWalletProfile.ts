import { apiClient } from "../config";
import { IWalletProfile } from "src/typed/requests/wallet";

async function getWalletProfile(
  address: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<IWalletProfile>(
    `/wallet/profile`,
    {
      address,
    },
    {
      headers: {
        componentId: componentId,
      },
    }
  );
  return res.data;
}

export default getWalletProfile;
