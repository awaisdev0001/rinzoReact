import {
  tWalletProfileTrophiesUpcoming,
  tWalletProfileTrophiesWon,
} from "./tWallet";

export interface IWalletProfile {
  portfolioValueWei: string;
  portfolioValueUsd: string;
  verified: boolean;
  whale: boolean;
}
