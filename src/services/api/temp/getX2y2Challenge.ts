import { apiClient } from "../config";

// get x2y2 login message
function getX2y2Challenge() {
  return new Promise(
    (resolve: (value: string) => void, reject: (value: any) => void) => {
      try {
        setTimeout(() => {
          resolve("test-x2y2-message");
        }, 2000);
      } catch (ex) {
        reject(ex);
      }
    }
  );
}

export default getX2y2Challenge;
