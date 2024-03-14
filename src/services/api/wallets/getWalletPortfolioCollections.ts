import { apiClient } from "../config";
import { tWalletPortfolioCollection } from "src/typed/requests/wallet/portfolio/tWalletPortfolioCollection";

async function getWalletPortfolioCollections(
  address: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<tWalletPortfolioCollection[]>(
    `/wallet/portfolio/collections`,
    {
      // address: "0x9e315e9701908501f6dc68a2af6e28a20c75d970" ?? address.toLowerCase()
      address: address.toLowerCase(),
    },
    {
      headers: {
        componentId: componentId,
      },
    }
  );
  return res.data || [];
}

export default getWalletPortfolioCollections;
