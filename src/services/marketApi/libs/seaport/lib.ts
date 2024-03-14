import { Seaport } from "@opensea/seaport-js";
import { ItemType } from "@opensea/seaport-js/lib/constants";
import {
  ConsiderationInputItem,
  CreateInputItem,
  Fee,
  OrderWithCounter,
} from "@opensea/seaport-js/lib/types";
import { BigNumber, Contract, ethers } from "ethers";
import { CONDUIT_KEY, SEAPORT_ADDRESS, ZONE } from "./constants";
import { tSellAsset } from "./types";


export async function createOrder(
  provider: ethers.providers.Web3Provider,
  account: string,
  assets: tSellAsset[],
  price: BigNumber,
  currencyAddress: string,
  periodInSec: number | undefined = undefined,
  fees: Fee[] | undefined = undefined
) {
  const seaport = new Seaport(provider);
  const offerItems: CreateInputItem[] = assets.map((asset) =>
    asset.collectionType === ItemType.ERC1155
      ? {
          itemType: ItemType.ERC1155,
          token: asset.collectionAddress,
          identifier: asset.tokenId.toString(),
          amount: asset.sellAmount.toString(),
        }
      : {
          itemType: ItemType.ERC721,
          token: asset.collectionAddress,
          identifier: asset.tokenId.toString(),
        }
  );

  // set fees
  const totalAmount = ethers.utils.parseEther(price.toString());
  let restAmount = totalAmount;
  const consideration: ConsiderationInputItem[] =
    fees?.map((fee) => {
      const amount = totalAmount
        .mul(BigNumber.from(fee.basisPoints * 10000))
        .div(100000000);
      restAmount = restAmount.sub(amount);
      return BigNumber.from(currencyAddress) === BigNumber.from("0x0")
        ? {
            amount: amount.toString(),
            recipient: fee.recipient,
          }
        : {
            amount: amount.toString(),
            recipient: fee.recipient,
            token: currencyAddress,
          };
    }) || [];

  const startTime = Math.round(new Date().getTime() / 1000);
  const endTime = startTime + (periodInSec ?? 86400 * 30);

  const { executeAllActions } = await seaport.createOrder(
    {
      offer: offerItems,
      consideration: [
        {
          amount: restAmount.toString(),
          recipient: account,
        },
        ...consideration,
      ],
      startTime: startTime.toString(),
      endTime: endTime.toString(),
      conduitKey: CONDUIT_KEY,
      zone: ZONE
    },
    account
  );

  const order = await executeAllActions();
  return order;
}

export async function fulfillOrder(provider: any, order: OrderWithCounter) {
  const seaport = new Seaport(new ethers.providers.Web3Provider(provider));
  const accounts = await provider.listAccounts();
  const { executeAllActions: executeAllFulfillActions } =
    await seaport.fulfillOrder({
      order,
      accountAddress: accounts[0],
    });
  const transaction = executeAllFulfillActions();
  return transaction;
}

export async function fulfillOrders(provider: any, orders: OrderWithCounter[]) {
  const seaport = new Seaport(new ethers.providers.Web3Provider(provider));
  const accounts = await provider.listAccounts();

  const fulfillOrderDetails = orders.map((order) => ({ order }));

  const { executeAllActions: executeAllFulfillActions } =
    await seaport.fulfillOrders({
      fulfillOrderDetails,
      accountAddress: accounts[0],
    });
  const transaction = executeAllFulfillActions();
  return transaction;
}
