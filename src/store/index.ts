export { store } from "./store";
export { addTheme } from "./theme";
export {
  changeOpenCart,
  changeSweepCart,
  changePopUp,
  changeVisitCount,
} from "./layout";
export { currencyReducer, shiftCurrency } from "./currency";
export {
  collectionReducer,
  getDataOfCollections,
  selectItemOfCollections,
  removeItemOfCollections,
  removeAllItemsOfCollections,
  getTotalAmountOfCards,
  rangeSelectOfCards,
  pushToCart,
  isFilterCollection,
  newlistingOfCards,
} from './collections';
export type { tCollectionReducer } from "./collections";
export {
  changeAccountParams,
  clearAccountParams,
  changeOpenWalletPopUp,
} from "./user";
export { checkoutReducer, addPlaceOrder } from "./checkout";

export {
  sentNFTsReducerReducer,
  getDataOfSentNFTs,
  selectItemOfSentNFTs,
  removeItemOfSentNFTs,
  removeAllItemsOfSentNFTs,
  getTotalAmountOfNFTs,
} from "./sendNFTs";
export type { tSentNFTsReducer } from "./sendNFTs";
export { selectClickedCollection } from "./tableCollections";
export type { tPopupCollectionState } from "./tableCollections";

export {
  sellNFTsReducerReducer,
  getDataOfSellNFTs,
  selectItemOfSellNFTs,
  removeItemOfSellNFTs,
  removeAllItemsOfSellNFTs,
  getTotalAmountOfSellNFTs,
} from "./sellNFTs";
export type { tSellNFTsReducer } from "./sellNFTs";
export { tCurrencyPrice } from "./globalPriceEth";
export { tWebSocket } from "./globalWebSocket";
export { updateSegmentAnalytics } from "./analytics";

export { errorReducer } from "./error";
export type { tErrorReducer } from "./error";
