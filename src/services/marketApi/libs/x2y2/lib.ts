import { Pair1155ArrayAbi, Pair721ArrayAbi, RunInputAbi } from "./x2y2_abi";
import x2y2Abi from "./x2y2_r1.json";
import RinzoSwap from "src/services/marketApi/libs/rinzo";
import { X2Y2_ADDRESS, X2Y2_MARKET_INDEX } from "./constants";
import { BigNumber, Contract, ethers } from "ethers";
import { parseHexString, createHexString } from "src/helpers/hexString";

export function decodeInput(order: X2Y2.tInput) {
  const inputObj = ethers.utils.defaultAbiCoder.decode(
    RunInputAbi as any,
    order.input
  );
  return inputObj[0] as X2Y2.tRunInput;
}

export async function fulfillX2Y2Order(provider: any, receiver: string, order: X2Y2.tInput) {
  try {
    const inputObj = decodeInput(order);

    // calculate the total price
    let price = BigNumber.from("0");
    for (let detail of inputObj.details) {
      price = price.add(detail.price);
    }

    const tradeDetails: RinzoSwap.tTradeDetails[] = [
      {
        marketId: X2Y2_MARKET_INDEX,
        value: price,
        tradeData: await _createBuyAbi(inputObj)
      },
      {
        marketId: RinzoSwap.TRANSFER_MARKET_INDEX,
        value: BigNumber.from("0x0"),
        tradeData: await _createRetrieveAbi(inputObj)
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
    console.log("X2Y2/fulfillOrder: ", transactionHash);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function _createBuyAbi(input: X2Y2.tRunInput) {
  const x2y2Contract = new Contract(X2Y2_ADDRESS, x2y2Abi);
  const tx = await x2y2Contract.populateTransaction["run"](input);
  return tx.data ?? "";
}

async function _createRetrieveAbi(input: X2Y2.tRunInput) {
  const transferData: RinzoSwap.tTransferData[] = [];

  for (let i = 0; i < input.details.length; i++) {
    const orderId = input.details[i].orderIdx;
    const itemId = input.details[i].itemIdx;
    let data = input.orders[orderId].items[itemId].data;

    if (
      input.orders[orderId].dataMask.length > 0 &&
      input.details[i].dataReplacement.length > 0
    ) {
      data = _arrayReplace(
        data,
        input.details[i].dataReplacement,
        input.orders[orderId].dataMask
      );
    }

    // 1 = erc-721
    if (input.orders[orderId].delegateType === 1) {
      const pairs = ethers.utils.defaultAbiCoder.decode(
        Pair721ArrayAbi as any,
        data
      ) as X2Y2.tPair721[];

      for (let j = 0; j < pairs.length; j++) {
        transferData.push({
          itemType: 1,
          tokenAddress: pairs[j].token,
          tokenId: pairs[j].tokenId,
          amount: BigNumber.from(1),
        });
      }
    } else if (input.orders[orderId].delegateType === 2) {
      // 2 = erc-1155
      const pairs = ethers.utils.defaultAbiCoder.decode(
        Pair1155ArrayAbi as any,
        data
      ) as X2Y2.tPair1155[];

      for (let j = 0; j < pairs.length; j++) {
        transferData.push({
          itemType: 2,
          tokenAddress: pairs[j].token,
          tokenId: pairs[j].tokenId,
          amount: pairs[j].amount,
        });
      }
    } else {
      // eslint-disable-next-line no-throw-literal
      throw "unknown delegateType x2y2";
    }
  }

  const txData = await RinzoSwap.generateTransferTxData(transferData);
  return txData;
}

function _arrayReplace(src: string, replacement: string, mask: string) {
  if (src.length === replacement.length && src.length === mask.length) {
    const srcArray = parseHexString(src.substring(2));
    const replacementArray = parseHexString(replacement.substring(2));
    const maskArray = parseHexString(mask.substring(2));

    for (let i = 0; i < srcArray.length; ++i) {
      if (maskArray[i] !== 0) {
        srcArray[i] = replacementArray[i];
      }
    }

    return createHexString(srcArray);
  }

  return src;
}
