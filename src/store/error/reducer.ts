import { errorState } from "./initialState";
import { IAction } from "src/typed/interfaces";
import { SHOW_ERROR, CLEAR_ERROR } from "./action-types";

export type tErrorReducer = {
  openDialog: boolean;
  message: string;
  title: string;
};

export const errorReducer = (
  state = errorState,
  action: IAction<tErrorReducer>
): tErrorReducer => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        openDialog: true,
        title: action?.payload?.title ?? "Error",
        message: action?.payload?.message ?? "",
      };
    case CLEAR_ERROR:
      return {
        ...state,
        openDialog: false,
        title: "",
        message: "",
      };
    default:
      return state;
  }
};
