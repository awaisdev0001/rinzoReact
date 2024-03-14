import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import { v4 as uuidv4 } from "uuid";

export const generateEmptyActivities = (count: number) =>
  new Array(count).fill(0).map<tActivitiesResult>((_, index) => ({
    id: `##Phantom-${uuidv4()}`,
    timestamp: new Date().toISOString(),
    type: "",
    contractAddress: "",
    tokenID: "",
    name: "Loading ...",
    priceWei: "0",
    priceUsd: 0,
    rarity: 0,
    rank: 0,
    image: "",
  }));
