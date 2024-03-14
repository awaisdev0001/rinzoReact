import { AppId } from "./config";

function clearStorageItem(key: string) {
  window.localStorage.removeItem(`${AppId}_${key}`);
}

export default clearStorageItem;
