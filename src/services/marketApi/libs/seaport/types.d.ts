import { BigNumber } from "ethers";
export as namespace Seaport;

export type tSellAsset = {
  collectionAddress: string;
  collectionType: number;

  tokenId: BigNumber;
  sellAmount: BigNumber;
}
