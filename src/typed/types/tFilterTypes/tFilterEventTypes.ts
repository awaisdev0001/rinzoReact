import { tActivityFilterButtons } from "src/view/components/FilterSide/LeaderboardFilterMenu/data";

export type tFilterSidebarEventType = {
  leaderboard: tActivityFilterButtons[];
  collectionPage: tFilterSideNestedEventType;
  filterSide: tFilterSideNestedEventType;
};

export type tFilterSideNestedEventType = {
  [name: string]: tFilterMultiSingleLevelEventType;
};

export type tFilterMultiSingleLevelEventType = string[] | number[];
