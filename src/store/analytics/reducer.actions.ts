import { SEGEMENT_ANALYTICS } from "./action-types";

export const updateSegmentAnalytics = (Segment: any) => ({
  type: SEGEMENT_ANALYTICS,
  payload: { segment: Segment },
});
