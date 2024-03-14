import { Component } from "react";
import { apiClient } from "../config";
import { INFTActivities } from "src/typed/requests/NFT";

async function getNFTActivities(
  page: number,
  contractAddress: string,
  tokenID: string,
  type: string,
  componentId: string // add the componentId parameters
) {
  try {
    const res = await apiClient.post<INFTActivities>(
      `/nft/activities`,
      {
        page,
        contractAddress,
        tokenID,
        type,
      },
      {
        headers: {
          componentId: componentId,
        },
      }
    );

    if (res.status === 204) {
      return {
        hasNextPage: false,
        result: [],
      } as INFTActivities;
    } else {
      return res.data;
    }
  } catch (ex) {
    throw new Error("");
  }
}

export default getNFTActivities;
