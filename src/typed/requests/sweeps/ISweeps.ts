import { tSweepsListResult } from "./tSweeps";

export interface ISweepsList {
  hasNextPage: boolean;
  result: tSweepsListResult[] | [];
}
