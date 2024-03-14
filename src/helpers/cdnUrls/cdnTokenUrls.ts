import axios from "axios";
import { BigNumberish } from "ethers";
import { NftDataFromCdnUrl } from "./types";

/**
 * Token animation url
 *
 * @param contractAddress string
 * @param tokenId BigNumberish
 */
 export const cdnTokenDataUrl = async (
   contractAddress: string,
   tokenId: BigNumberish
 ): Promise<NftDataFromCdnUrl> => {
   try {
     const response = await axios.get<NftDataFromCdnUrl>(
       `https://cdn.rinzo.io/${contractAddress}/${tokenId.toString()}/data`
     );
     console.log(response.data);
     return response.data;
   } catch (error) {
     console.error(error);
     throw new Error("Failed to fetch data from CDN.");
   }
 };

// export const cdnTokenDataUrl = (
//   contractAddress: string,
//   tokenId: BigNumberish
// ): string =>
//   `https://cdn.rinzo.io/${contractAddress}/${tokenId.toString()}/data`;

export const cdnTokenImageUrl = (
  contractAddress: string,
  tokenId: BigNumberish
): string =>
  `https://cdn.rinzo.io/${contractAddress}/${tokenId.toString()}/image`;
/**
 * Token animation url
 *
 * @param contractAddress string
 * @param tokenId BigNumberish
 */
export const cdnTokenAnimationUrl = (
  contractAddress: string, 
  tokenId: BigNumberish
) => `https://cdn.rinzo.io/${contractAddress}/${tokenId.toString()}/animation`;
