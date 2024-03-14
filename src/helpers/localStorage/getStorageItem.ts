import { AppId } from "./config";

function getStorageItem<T>(key: string) {
  const res = window.localStorage.getItem(`${AppId}_${key}`);
  if (res) {
    return JSON.parse(res) as T;
  }
  return null;
}

export default getStorageItem;
