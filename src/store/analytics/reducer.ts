import { SegmentAnalyticsState } from "./initialState";
import { IAction } from "src/typed/interfaces";
import { SEGEMENT_ANALYTICS } from "./action-types";

export type tSegmentAnalyticsReducer = {
  segment: any;
};

export const SegmentAnalyticsReducer = (
  state = SegmentAnalyticsState,
  action: IAction<tSegmentAnalyticsReducer>
): tSegmentAnalyticsReducer => {
  switch (action.type) {
    case SEGEMENT_ANALYTICS:
      return {
        ...state,
        segment: action.payload?.segment,
      };
    default:
      return state;
  }
};
