import RinzoSwap from "src/services/marketApi/libs/rinzo";
import looksrareAbi from "./looksrare.json";
import { tTakerOrder, tMakerOrder, tLooksrareOrder } from "./types";
import { BigNumber, Contract } from "ethers";
import { LOOKSRARE_ADDRESS_GOERLI, LOOKSRARE_MARKET_INDEX } from "./constants";

export async function fulfillOrder(provider: any, receiver: string, order: tLooksrareOrder) {
  try {
    const tradeDetails: RinzoSwap.tTradeDetails[] = [
      {
        marketId: LOOKSRARE_MARKET_INDEX,
        value: order.price,
        tradeData: await _createBuyAbi(order)
      },
      {
        marketId: RinzoSwap.TRANSFER_MARKET_INDEX,
        value: BigNumber.from("0x0"),
        tradeData: await _createRetrieveAbi(order)
      }
    ];

    const tx = [
      {
        from: receiver,
        to: RinzoSwap.RINZO_SWAP_ADDRESS,
        value: order.price,
        data: RinzoSwap.generateMultiAssetSwapTxData(tradeDetails),
      },
    ];

    const transactionHash = await provider.send("eth_sendTransaction", tx);
    console.log("Looksrare/fulfillOrder: ", transactionHash);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function _createBuyAbi(order: tLooksrareOrder) {
  /*
  function matchAskWithTakerBidUsingETHAndWETH(
        OrderTypes.TakerOrder calldata takerBid,
        OrderTypes.MakerOrder calldata makerAsk
    ) external payable override nonReentrant { ... }
  */

  const rinzoContract = new Contract(RinzoSwap.RINZO_SWAP_ADDRESS, RinzoSwap.RinzoSwapAbi);

  const takerBid: tTakerOrder = {
    isOrderAsk: false,
    taker: await rinzoContract.proxy(), // msg.sender
    price: order.price, // final price for the purchase
    tokenId: order.tokenId,
    minPercentageToAsk: order.minPercentageToAsk, // // slippage protection (9000 --> 90% of the final price must return to ask)
    params: order.params.length === 0 ? "0x" : order.params,
  };

  const makerAsk: tMakerOrder = {
    isOrderAsk: true, // true --> ask / false --> bid
    signer: order.signer, // signer of the maker order
    collection: order.collectionAddress, // collection address
    price: order.price, // price (used as )
    tokenId: order.tokenId, // id of the token
    amount: order.amount, // amount of tokens to sell/purchase (must be 1 for ERC721, 1+ for ERC1155)
    strategy: order.strategy, // strategy for trade execution (e.g., DutchAuction, StandardSaleForFixedPrice)
    currency: order.currencyAddress, // currency (e.g., WETH)
    nonce: order.nonce, // order nonce (must be unique unless new maker order is meant to override existing one e.g., lower ask price)
    startTime: order.startTime, // startTime in timestamp
    endTime: order.endTime, // endTime in timestamp
    minPercentageToAsk: order.minPercentageToAsk, // slippage protection (9000 --> 90% of the final price must return to ask)
    params: order.params.length === 0 ? "0x" : order.params, // additional parameters
    v: order.v, // v: parameter (27 or 28)
    r: order.r, // r: parameter
    s: order.s, // s: parameter
  };

  console.log({takerBid, makerAsk});

  const looksrareContract = new Contract(LOOKSRARE_ADDRESS_GOERLI, looksrareAbi);
  const tx = await looksrareContract.populateTransaction["matchAskWithTakerBidUsingETHAndWETH"](takerBid, makerAsk);
  return tx.data ?? "";
}

async function _createRetrieveAbi(order: tLooksrareOrder) {
  const data = [
    {
      itemType: 1,
      tokenAddress: order.collectionAddress,
      tokenId: order.tokenId,
      amount: order.amount
    },
  ] as RinzoSwap.tTransferData[];

  const txData = await RinzoSwap.generateTransferTxData(data);
  return txData;
}
