import { apiClient } from "../config";
import { tMarketCount } from "src/typed/requests1/tMarketCount";

async function getWalletPortfolioMarketCounts(
  address: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<tMarketCount[]>(
    `/wallet/portfolio/markets`,
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

export default getWalletPortfolioMarketCounts;
