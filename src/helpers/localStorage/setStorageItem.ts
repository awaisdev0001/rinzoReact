import { AppId } from "./config";

function setStorageItem<T>(key: string, data: T) {
  window.localStorage.setItem(`${AppId}_${key}`, JSON.stringify(data));
}

export default setStorageItem;
