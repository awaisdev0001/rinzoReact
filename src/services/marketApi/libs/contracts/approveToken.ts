import { BigNumber, Contract, ethers } from "ethers";
import ERC721ABI from "./ERC721.json";
import ERC1155ABI from "./ERC1155.json";

export async function approveToken(
  account: string,
  collectionType: number,
  exchangeAddress: string,
  contractAddress: string,
  tokenId: BigNumber
) {
  try {
    if (collectionType === 0) {
      // ERC721
      const contract = new Contract(contractAddress, ERC721ABI as any);
      const isApprovedForAll = await contract.isApprovedForAll(
        account,
        exchangeAddress
      );
      const approved = await contract.getApproved(tokenId);
      if (
        approved.toLowerCase() !== exchangeAddress.toLowerCase() &&
        !isApprovedForAll
      ) {
        await contract.setApprovalForAll(exchangeAddress, true);
      }
    } else {
      // ERC1155
      const contract = new Contract(contractAddress, ERC1155ABI as any);
      const isApprovedForAll = await contract.isApprovedForAll(
        account,
        exchangeAddress
      );
      if (!isApprovedForAll) {
        await contract.setApprovalForAll(exchangeAddress, true);
      }
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
