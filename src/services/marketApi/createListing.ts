import { CROSS_CHAIN_SEAPORT_V1_4_ADDRESS } from "@opensea/seaport-js/lib/constants";
import { BigNumber, ethers } from "ethers";
import { tCollectionItemExtend, tMarketplaces } from "src/typed/types";
import { approveToken } from "./libs/contracts";
import { createOrder } from "./libs/seaport/lib";

type tCreateListingResult = {
  item: tCollectionItemExtend;
  market: tMarketplaces;
};

export function createListing(provider: ethers.providers.Web3Provider, account: string, data: tCollectionItemExtend[]) {
  const res: Promise<tCreateListingResult>[] = [];
  data.forEach((item) => {
    item.markets.forEach((market) => {
      let promise;
      if (market.title == "Rinzo") {
        promise = new Promise<tCreateListingResult>(async (resolve, reject) => {
          await approveToken(
            account,
            0,
            CROSS_CHAIN_SEAPORT_V1_4_ADDRESS,
            item.collection?.contract_address || "",
            BigNumber.from(item.collection?.token_id)
          );
          
          // await createOrder(provider, account, , price, currencyAddress)
          // resolve({
          //   item,
          //   market,
          // });
        });
      } else if (market.title == "OpenSea") {
        promise = new Promise<tCreateListingResult>((resolve, reject) => {
          resolve({
            item,
            market,
          });
        });
      } else if (market.title == "X2Y2") {
        promise = new Promise<tCreateListingResult>((resolve, reject) => {
          resolve({
            item,
            market,
          });
        });
      } else if (market.title == "LooksRare") {
        promise = new Promise<tCreateListingResult>((resolve, reject) => {
          resolve({
            item,
            market,
          });
        });
      } else if (market.title == "Blur.io") {
        promise = new Promise<tCreateListingResult>((resolve, reject) => {
          resolve({
            item,
            market,
          });
        });
      }

      promise && res.push(promise);
    });
  });

  return res;
}
