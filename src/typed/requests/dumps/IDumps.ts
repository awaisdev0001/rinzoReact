import { tDumpsListResult } from "./tDumps";

export interface IDumpsList {
  hasNextPage: boolean;
  result: tDumpsListResult[] | [];
}
