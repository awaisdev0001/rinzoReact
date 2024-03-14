import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import accountImage from "src/assets/images/accountImage.png";
import { useState } from "react";
import {
  AccountData,
  tWalletItem,
} from "src/view/components/WalletConnect/types";
import getBlurChallenge from "src/services/api/temp/getBlurChallenge";
import doBlurLogin from "src/services/api/temp/doBlurLogin";
import getX2y2Challenge from "src/services/api/temp/getX2y2Challenge";
import doX2y2Login from "src/services/api/temp/doX2y2Login";
import { changeAccountParams } from "src/store";
import { useAppDispatch } from "../useAppDispatch";
import { useSetWiseTokenHook } from "./setWiseToken";

// Define the useConnectAccountHook custom hook
export const useConnectAccountHook = (): any => {
  // Define wallet state and account hook
  const [wallet, setWallet] = useState<tWalletItem>({
    type: "",
    imageUrl: "",
    name: "",
  });

  // Define the useAccount hook to get the selected address
  const { address: selectedAddress } = useAccount();

  // Define dispatch hook to access the Redux store
  const dispatch = useAppDispatch();

  // Define the setSiweToken hook to set the token after successful sign-in
  const { setSiweToken } = useSetWiseTokenHook();

  // Define the connectAccount function to handle account connection
  const connectAccount = async () => {
    let accountData: AccountData;

    // If there is a selected address, create an accountData object
    if (selectedAddress) {
      accountData = {
        image: accountImage,
        address: selectedAddress,
        portfolioValue: 160234,
        checked: true,
        connectType: {
          name: wallet.name,
          image: wallet.imageUrl,
        },
        blurLoggedIn: false,
        x2y2LoggedIn: false,
        blurToken: "",
        x2y2Token: "",
      };

      dispatch(changeAccountParams(accountData));

      /*
      // Get a Blur token and update the account parameters if successful
      setSiweToken(
        "Sign in with Ethereum to the app (Blur).",
        "BLUR_TOKEN",
        getBlurChallenge,
        doBlurLogin
      )
        .then((blurToken: string) => {
          // Update accountData object with blurToken and login status
          accountData = {
            ...accountData,
            blurToken,
            blurLoggedIn: true,
          };
          // Dispatch accountData object to the store
          dispatch(changeAccountParams(accountData));
        })
        .catch((err: any) => {
          dispatch(changeAccountParams(accountData));
          // Display error message if token retrieval fails
          toast.error(err);
        });

      // Get an X2y2 token and update the account parameters if successful

      setSiweToken(
        "Sign in with Ethereum to the app (X2y2).",
        "X2Y2_TOKEN",
        getX2y2Challenge,
        doX2y2Login
      )
        .then((x2y2Token: string) => {
          // Update accountData object with x2y2Token and login status
          accountData = {
            ...accountData,
            x2y2Token,
            x2y2LoggedIn: true,
          };
          // Dispatch accountData object to the store
          dispatch(changeAccountParams(accountData));
        })
        .catch((err: any) => {

          // Display error message if token retrieval fails
          toast.error(err);
        });
    */

    }
  };

  // Return connectAccount function, wallet state, and setWallet function
  return { connectAccount, wallet, setWallet };
};
