import { BigNumber, BigNumberish, ethers, Signer } from "ethers";
import {
  eMarketIndexes,
  rinzoProxyAddress,
  rinzoSwapAddress,
  transferContractAddress,
} from "src/config/contract";
import {
  ERC20__factory,
  RinzoSwap,
  RinzoSwap__factory,
  TransferContract,
  TransferContract__factory,
} from "./generated-typechains";
import {
  MarketRegistry,
  SpecialTransferHelper,
} from "./generated-typechains/RinzoSwap";
import { tListing } from "./types";

export async function fulfillOrders(signer: Signer, lists: tListing[]) {
  const currencies: {[tokenAddress: string]: BigNumber} = {};
  let tradeDetails: MarketRegistry.TradeDetailsStruct[] = [];
  let ethValue = BigNumber.from("0");

  for (let list of lists) {
    const trades = await getTradeData(signer, list);
    tradeDetails = [...tradeDetails, ...trades];

    const price = BigNumber.from(list.price_wei).mul(list.quantity);
    if (!currencies[list.payment_token]) {
      currencies[list.payment_token] = BigNumber.from("0");
    }
    currencies[list.payment_token] = currencies[list.payment_token].add(price);
  }

  // call multi asset function
  const erc20Details: RinzoSwap.ERC20DetailsStruct = {
    tokenAddrs: [],
    amounts: [],
  };
  
  for (let paymentToken in currencies) {
    if (BigNumber.from(paymentToken).eq(0)) {
      ethValue = currencies[paymentToken];
    } else {
      erc20Details.tokenAddrs.push(paymentToken);
      erc20Details.amounts.push(currencies[paymentToken]);
    }
  }

  // approve tokens
  try {
    for (let i = 0; i < erc20Details.tokenAddrs.length; i++) {
      const token = ERC20__factory.connect(await erc20Details.tokenAddrs[i], signer);
      await token.approve(rinzoProxyAddress, erc20Details.amounts[i]);
    }
  } catch (e) {
    console.error(e);
  }

  const erc721Details: SpecialTransferHelper.ERC721DetailsStruct[] = [];
  const erc1155Details: RinzoSwap.ERC1155DetailsStruct[] = [];
  const conversionDetails: RinzoSwap.ConverstionDetailsStruct[] = [];
  const dustTokens: string[] = [];
  const feeDetails: [BigNumberish, BigNumberish] = [0, 0];

  const rinzoSwap = RinzoSwap__factory.connect(rinzoSwapAddress, signer);
  await rinzoSwap.multiAssetSwap(
    erc20Details,
    erc721Details,
    erc1155Details,
    conversionDetails,
    tradeDetails,
    dustTokens,
    feeDetails,
    {
      value: ethValue,
    }
  );
}

async function getTradeData(
  signer: Signer,
  list: tListing
): Promise<MarketRegistry.TradeDetailsStruct[]> {
  const tradeList: MarketRegistry.TradeDetailsStruct[] = [];

  const transferData: TransferContract.TransferDataStruct[] = [];

  if (list.exchange === "opensea") {
  } else if (list.exchange === "looksrare") {
  } else if (list.exchange === "x2y2") {
  } else if (list.exchange === "blur") {
  }

  if (transferData.length > 0) {
    const data = await signTrasnfer(
      await signer.getAddress(),
      signer,
      transferData
    );

    if (data) {
      tradeList.push({
        marketId: eMarketIndexes.TransferContract,
        tradeData: data,
        value: 0,
      });
    }
  }
  return tradeList;
}


// This function should be stored in the backend
export async function signTrasnfer(
  sender: string,
  owner: Signer,
  transferData: TransferContract.TransferDataStruct[]
) {
  // generate signature
  const bytes = ethers.utils.defaultAbiCoder.encode(
    [
      {
        components: [
          {
            internalType: "enum TransferContract.ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct TransferContract.TransferData[]",
        name: "data",
        type: "tuple[]",
      },
    ] as any,
    [transferData]
  );
  const bytesEncoded = ethers.utils.solidityPack(
    ["address", "bytes"],
    [sender, bytes]
  );
  const msgHash = ethers.utils.solidityKeccak256(["bytes"], [bytesEncoded]);
  const signature = await owner.signMessage(ethers.utils.arrayify(msgHash));

  const transferContract = TransferContract__factory.connect(
    transferContractAddress,
    owner
  );
  const obj = await transferContract.populateTransaction.transfer(
    transferData,
    signature
  );
  return obj.data;
}
