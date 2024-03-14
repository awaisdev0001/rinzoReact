import { SiweMessage } from "siwe";
import { apiClient } from "../config";

function doX2y2Login(signature: string, message: SiweMessage) {
  return new Promise(
    (resolve: (value: string) => void, reject: (value: any) => void) => {
      try {
        setTimeout(() => {
          resolve("test-x2y2Token");
        }, 2000);
      } catch (ex) {
        reject(ex);
      }
    }
  );
}

export default doX2y2Login;
