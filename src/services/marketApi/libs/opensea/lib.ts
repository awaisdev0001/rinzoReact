import { BigNumber, Contract } from "ethers";
import RinzoSwap from "src/services/marketApi/libs/rinzo";
import { OPENSEA_MARKET_INDEX, SEAPORT_ADDRESS } from "./constants";
import SEAPORT_ABI from "./seaport.json";
import { tOpenseaOrder } from "./types";

// Fulfill opensea's seaport order
export async function fulfillOrder(
  provider: any,
  receiver: string,
  order: tOpenseaOrder
) {
  const seaportContract = new Contract(SEAPORT_ADDRESS, SEAPORT_ABI);
  try {
    const tx0 = await seaportContract.populateTransaction["fulfillAdvancedOrder"](
      {
        parameters: order.protocol_data.parameters,
        numerator: "1",
        denominator: "1",
        signature: order.protocol_data.signature,
        extraData:
          "0x0000000000000000000000000000000000000000000000000000000000000000",
      },
      [],
      order.protocol_data.parameters.conduitKey,
      receiver
    );

    if (!tx0.data) {
      // eslint-disable-next-line no-throw-literal
      throw "Cannot generate fulfillOrder abi";
    }

    const tradeDetails: RinzoSwap.tTradeDetails[] = [
      {
        marketId: OPENSEA_MARKET_INDEX,
        value: BigNumber.from(order.current_price),
        tradeData: tx0.data
      }
    ];

    const tx = [
      {
        from: receiver,
        to: RinzoSwap.RINZO_SWAP_ADDRESS,
        value: order.current_price,
        data: RinzoSwap.generateMultiAssetSwapTxData(tradeDetails),
      },
    ];

    const transactionHash = await provider.send("eth_sendTransaction", tx);
    console.log("Opensea/fulfillOrder: ", transactionHash);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function fulfillOrders(orders: any[]) {
  // const abidata = seaportContract.methods
  //   .fulfillAvailableAdvancedOrders(
  //     [{
  //       parameters: order.parameters,
  //       numerator: "1",
  //       denominator: "1",
  //       signature: order.signature,
  //       extraData: "",
  //     }],
  //     [],
  //     [
  //       [{
  //         orderIndex: "0",
  //         itemIndex: "0"
  //       }]
  //     ], // order fulfillment
  //     [
  //       [{
  //         orderIndex: "0",
  //         itemIndex: "0"
  //       }],
  //       [{
  //         orderIndex: "0",
  //         itemIndex: "0"
  //       }]
  //     ], // considerationFulfillments
  //     fulfillerConduitKey,
  //     account,
  //     "1"
  //   )
  //   .encodeABI();
}
