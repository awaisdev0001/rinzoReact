import { apiClient } from "../config";

// get blur login message
function getBlurChallenge() {
  return new Promise(
    (resolve: (value: string) => void, reject: (value: any) => void) => {
      try {
        setTimeout(() => {
          resolve("test-blur-message");
        }, 2000);
      } catch (ex) {
        reject(ex);
      }
    }
  );
}

export default getBlurChallenge;
