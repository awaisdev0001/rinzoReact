import { tCollectionsListResult } from "./tCollections";

export interface ICollectionsList {
  hasNextPage: boolean;
  result: tCollectionsListResult[] | [];
}
