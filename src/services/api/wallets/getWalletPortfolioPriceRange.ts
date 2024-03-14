import { apiClient } from "../config";
import { tEthRange } from "src/typed/requests1/tEthRange";

async function getWalletPortfolioPriceRange(
  address: string,
  componentId: string // add the componentId parameter
) {
  const res = await apiClient.post<tEthRange>(
    `/wallet/portfolio/pricerange`,
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
  return (
    res.data || {
      start: "0",
      end: "0",
    }
  );
}

export default getWalletPortfolioPriceRange;
