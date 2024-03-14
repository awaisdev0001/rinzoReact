import { tActivitiesActivitiesResult } from "./tActivities";

export interface IActivitiesActivities {
  hasNextPage: boolean;
  result: tActivitiesActivitiesResult[] | [];
}

export interface IActivitiesActivitiesSummary {
  listings: number;
  offers: number;
  sales: number;
  transfers: number;
}
