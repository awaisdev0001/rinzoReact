import { SiweMessage } from "siwe";
import clearStorageItem from "src/helpers/localStorage/clearStorageItem";
import setStorageItem from "src/helpers/localStorage/setStorageItem";
import { useAccount, useSignMessage } from "wagmi";

// Define useSetWiseTokenHook
export const useSetWiseTokenHook = (): any => {
  // Use signMessage hook and get selectedAddress from useAccount hook
  const { signMessageAsync } = useSignMessage();
  const { address: selectedAddress } = useAccount();

  // Define setSiweToken function
  /**
    Sets a SIWE token
    @param {string} caption The caption to display in the signature prompt
    @param {string} storageKey The key to use for storing the token in local storage
    @param {Function} getMessage A function that retrieves a message to sign
    @param {Function} getToken A function that retrieves a token using a signature and a SIWE message
    @returns {Promise<string>} A promise that resolves with the retrieved token
*/
  const setSiweToken = async (
    caption: string,
    storageKey: string,
    getMessage: () => Promise<string | undefined>,
    getToken: (
      signature: string,
      message: SiweMessage
    ) => Promise<string | undefined>
  ) => {
    try {
      // Get nonce
      const nonce = await getMessage();

      // Create SIWE message with pre-fetched nonce and sign with wallet
      const message = new SiweMessage({
        domain: window.location.host,
        address: selectedAddress,
        statement: caption, // hardcoded for now
        uri: window.location.origin,
        version: "1", // hardcoded for now
        chainId: 1, // hardcoded for now
        nonce: nonce,
      });

      // Sign message with wallet
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      // Verify signature and get token
      const token = await getToken(signature, message);
      if (!token) {
        clearStorageItem(storageKey);
        throw new Error("Error verifying message");
      }

      // Store token in localStorage and return it
      setStorageItem(storageKey, token);
      return token;
    } catch (ex: any) {
      // Handle errors
      console.log(ex.name);
      if (ex.name !== "ConnectorNotFoundError") throw ex.message;
    }
  };

  // Return setSiweToken function
  return { setSiweToken };
};
