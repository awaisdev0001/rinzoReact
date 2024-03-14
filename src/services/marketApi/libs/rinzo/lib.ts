import { Contract, ethers } from "ethers";
import {
  RINZO_SWAP_ADDRESS,
  TRANSFER_HELPER_ADDRESS,
  SIGN_PREFIX,
} from "./constants";
import { tTradeDetails, tTransferData } from "./types";
import RinzoSwapAbi from "./RinzoSwap.json";
import TransferHelperAbi from "./TransferHelper.json";

export async function generateMultiAssetSwapTxData(
  tradeDetails: tTradeDetails[]
) {
  const contract = new Contract(RINZO_SWAP_ADDRESS, RinzoSwapAbi);
  const abi = await contract.populateTransaction["multiAssetSwap"](
    {
      tokenAddrs: [],
      amounts: [],
    }, // ERC20Details memory erc20Details
    [], // SpecialTransferHelper.ERC721Details[] memory erc721Details
    [], // ERC1155Details[] memory erc1155Details
    [], // ConverstionDetails[] memory converstionDetails
    tradeDetails, // MarketRegistry.TradeDetails[] memory tradeDetails
    [], // address[] memory dustTokens
    [0, 0] // uint256[2] memory feeDetails
  );

  return abi.data;
}

async function _generateSignature(data: tTransferData[], pk: string) {
  let bytesEncoded: any = "";
  for (let i = 0; i < data.length; i++) {
    bytesEncoded = ethers.utils.solidityPack(
      ["uint256", "address", "uint256", "uint256", "bytes"],
      [
        data[i].itemType,
        data[i].tokenAddress,
        data[i].tokenId,
        data[i].amount,
        bytesEncoded,
      ]
    );
    // bytesEncoded = web3.utils.encodePacked(
    //   { type: "uint256", value: data[i].itemType.toString() },
    //   { type: "address", value: data[i].tokenAddress },
    //   { type: "uint256", value: data[i].tokenId.toString() },
    //   { type: "uint256", value: data[i].amount.toString() },
    //   { type: "bytes", value: bytesEncoded }
    // );
  }

  const hashedPayload = ethers.utils.solidityKeccak256(
    ["bytes"],
    [bytesEncoded]
  );
  console.log({ hashedPayload });

  const paddedMessage =
    ethers.utils.solidityKeccak256(
      ["string", "bytes"],
      [SIGN_PREFIX, hashedPayload]
    );

  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
  const signer = new ethers.Wallet(pk, provider);
  const signature = await signer.signMessage(paddedMessage);
  console.log({ sign: signature });
  return signature;
}

export async function generateTransferTxData(data: tTransferData[]) {
  const transferContract = new Contract(
    TRANSFER_HELPER_ADDRESS,
    TransferHelperAbi
  );

  const signature = ""; // await apiClient.post("/get-signature", data);

  const tx = await transferContract.populateTransaction["transfer"](
    data,
    signature
  );
  console.log(tx);
  return tx.data ?? "";
}
