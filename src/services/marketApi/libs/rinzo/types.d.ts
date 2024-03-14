import { BigNumber } from "ethers";
export as namespace RinzoSwap;

export type tTradeDetails = {
  marketId: number;
  value: BigNumber;
  tradeData: string;
};

export type tTransferData = {
  itemType: number,
  tokenAddress: string;
  tokenId: BigNumber;
  amount: BigNumber;
}
