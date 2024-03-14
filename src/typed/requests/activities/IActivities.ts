import { tActivitiesResult } from "./tActivities";

export interface IActivitiesList {
  hasNextPage: boolean;
  result: tActivitiesResult[] ;
}
