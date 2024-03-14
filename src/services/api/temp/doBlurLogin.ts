import { SiweMessage } from "siwe";
import { apiClient } from "../config";

function doBlurLogin(signature: string, message: SiweMessage) {
  return new Promise(
    (resolve: (value: string) => void, reject: (value: any) => void) => {
      try {
        setTimeout(() => {
          resolve("test-blurToken");
        }, 2000);
      } catch (ex) {
        reject(ex);
      }
    }
  );
}

export default doBlurLogin;
