import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { themeReducer, tThemeReducer } from "./theme";
import { currencyReducer } from "./currency";
import { cartOpenReducer, tCartOpenReducer } from "./layout";
import thunkMiddleware from "redux-thunk";
import { collectionReducer, tCollectionReducer } from "./collections";
import { accountReducer, tAccountActionReducer } from "./user";
import { checkoutReducer, tCheckoutReducer } from "./checkout";
import { sentNFTsReducerReducer } from "./sendNFTs";
import { sellNFTsReducerReducer, tSellNFTState } from "./sellNFTs";
import {
  tableCollectionReducer,
  tPopupCollectionState,
} from "./tableCollections";
import { tCurrencyReducer } from "./currency/reducer";
import { tSendInitialState } from "./sendNFTs/initialState";
import { CurrencyPriceReducer } from "./globalPriceEth";
import { tCurrencyPriceReducer } from "./globalPriceEth/reducer";
import { WebSocketReducer } from "./globalWebSocket";
import { tWebSocketReducer } from "./globalWebSocket/reducer";
import { SegmentAnalyticsReducer } from "./analytics";
import { tSegmentAnalyticsReducer } from "./analytics/reducer";
import { errorReducer, tErrorReducer } from "./error";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("@redux-devtools/extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export interface IStateRedux {
  themeReducer: tThemeReducer;
  currencyReducer: tCurrencyReducer;
  collectionReducer: tCollectionReducer;
  cartOpenReducer: tCartOpenReducer;
  accountReducer: tAccountActionReducer;
  checkoutReducer: tCheckoutReducer;
  sentNFTsReducerReducer: tSendInitialState;
  sellNFTsReducerReducer: tSellNFTState;
  tableCollectionReducer: tPopupCollectionState;
  CurrencyPriceReducer: tCurrencyPriceReducer;
  WebSocketReducer: tWebSocketReducer;
  SegmentAnalyticsReducer: tSegmentAnalyticsReducer;
  errorReducer: tErrorReducer;
}

const rootReducer = combineReducers<IStateRedux>({
  themeReducer,
  currencyReducer,
  collectionReducer,
  cartOpenReducer,
  accountReducer,
  checkoutReducer,
  sentNFTsReducerReducer,
  sellNFTsReducerReducer,
  tableCollectionReducer,
  CurrencyPriceReducer,
  WebSocketReducer,
  SegmentAnalyticsReducer,
  errorReducer,
});

export const store = legacy_createStore(
  rootReducer,
  {},
  bindMiddleware([thunkMiddleware])
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = IStateRedux;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
