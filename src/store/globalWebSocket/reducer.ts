import { WebSocketState } from "./initialState";
import { IAction } from "src/typed/interfaces";
import { WEB_SOCKET } from "./action-types";

export type tWebSocketReducer = {
  instance: any;
};

export const WebSocketReducer = (
  state = WebSocketState,
  action: IAction<tWebSocketReducer>
): tWebSocketReducer => {
  switch (action.type) {
    case WEB_SOCKET:
      return {
        ...state,
        instance: action?.payload?.instance,
      };
    default:
      return state;
  }
};
