import RinzoSwap from "src/services/marketApi/libs/rinzo";
import blurExchangeAbi from "./blurexchange.json";
import { tExchangeExecution } from "./types";
import { BigNumber, Contract, ethers } from "ethers";
import { BLUR_EXCHANGE_ADDRESS, BLUR_MARKET_INDEX } from "./constants";
import { BlurExchangeExecuteParams, BlurExchangeBulkExecuteParams } from "./blurexchange_params";

export async function fulfillOrder(provider: any, receiver: string, order: string) {
  let decodedData = decodeData(order);
  if (!decodedData) {
    return false;
  }

  let price = BigNumber.from("0x0");
  if (Array.isArray(decodedData)) {
    decodedData.forEach(order => price = price.add(order.buy.order.price));
  } else {
    price = decodedData.buy.order.price;
  }

  try {
    // single execution
    const tradeDetails: RinzoSwap.tTradeDetails[] = [
      {
        marketId: BLUR_MARKET_INDEX,
        value: price,
        tradeData: await _createBuyAbi(decodedData)
      },
      {
        marketId: RinzoSwap.TRANSFER_MARKET_INDEX,
        value: BigNumber.from("0x0"),
        tradeData: await _createRetrieveAbi(decodedData)
      }
    ];

    const tx = [
      {
        from: receiver,
        to: RinzoSwap.RINZO_SWAP_ADDRESS,
        value: price,
        data: RinzoSwap.generateMultiAssetSwapTxData(tradeDetails),
      },
    ];

    const transactionHash = await provider.send("eth_sendTransaction", tx);
    console.log("Blur/fulfillOrder: ", transactionHash);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function _createBuyAbi(order: tExchangeExecution | tExchangeExecution[]) {
  const blurExchangeContract = new Contract(BLUR_EXCHANGE_ADDRESS, blurExchangeAbi);
  const functionName = Array.isArray(order) ? "bulkExecute" : "execute";
  const tx = await blurExchangeContract.populateTransaction[functionName](order);
  return tx.data ?? "";
}

async function _createRetrieveAbi(orders: tExchangeExecution | tExchangeExecution[]) {
  let data: RinzoSwap.tTransferData[] = [];
  if (Array.isArray(orders)) {
    data = orders.map(order => (
      {
        itemType: 1,
        tokenAddress: order.buy.order.collection,
        tokenId: order.buy.order.tokenId,
        amount: order.buy.order.amount
      }
     )) as RinzoSwap.tTransferData[];
  } else {
    data.push({
      itemType: 1,
        tokenAddress: orders.buy.order.collection,
        tokenId: orders.buy.order.tokenId,
        amount: orders.buy.order.amount
    });
  }

  const txData = await RinzoSwap.generateTransferTxData(data);
  return txData;
}

export function decodeExecuteData(data: string) {
  const paramsData = "0x" + data.substring(10);
  let inputObj = ethers.utils.defaultAbiCoder.decode(
    BlurExchangeExecuteParams as any,
    paramsData
  );

  return {
    sell: inputObj[0],
    buy: inputObj[1],
  } as tExchangeExecution;
}

export function decodeBulkExecuteData(data: string) {
  const paramsData = "0x" + data.substring(10);
  let inputObj = ethers.utils.defaultAbiCoder.decode(
    BlurExchangeBulkExecuteParams as any,
    paramsData
  );

  return inputObj as tExchangeExecution[];
}

export function decodeData(order: string) {
  const functionSignature = order.substring(0, 10);
  let decodedData: tExchangeExecution | tExchangeExecution[] | undefined;
  if (functionSignature === "0x9a1fc3a7") {
    decodedData = decodeExecuteData(order);
  } else if (functionSignature === "0xb3be57f8") {
    decodedData = decodeBulkExecuteData(order);
  }
  return decodedData;
}
