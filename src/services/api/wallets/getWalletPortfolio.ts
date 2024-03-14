import { apiClient } from "../config";
import { tEthRange } from "src/typed/requests1/tEthRange";
import { IWalletPortfolioResult } from "src/typed/requests/wallet/portfolio/IWalletPortfolioResult";

async function getWalletPortfolio(
  address: string,
  page: number,
  collections: string[],
  markets: string[],
  priceWeiRange: tEthRange,
  sortBy: string,
  sortOrder: "asc" | "desc",
  componentId: string // add the componentId parameter
) {
  const data: any = {
    // address: "0x9e315e9701908501f6dc68a2af6e28a20c75d970" ?? address.toLowerCase(),
    address: address.toLowerCase(),
    page,
    sortBy,
    sortOrder,
  };

  if (collections.length > 0) {
    data.collections = collections.map((c) => c.toLowerCase());
  }

  if (markets.length > 0) {
    data.markets = markets;
  }

  if (priceWeiRange.start !== "0" || priceWeiRange.end !== "0") {
    data.priceWeiRange = priceWeiRange;
  }

  const res = await apiClient.post<IWalletPortfolioResult>(
    `/wallet/portfolio`,
    data,
    {
      // pass the componentId as part of the request config
      headers: {
        componentId: componentId,
      },
    }
  );
  if (res.status === 204) {
    return {
      hasNextPage: false,
      result: [],
    } as IWalletPortfolioResult;
  } else {
    return res.data;
  }
}

export const getWalletPortfolio_ItemCountPerRequest = 20;

export default getWalletPortfolio;
