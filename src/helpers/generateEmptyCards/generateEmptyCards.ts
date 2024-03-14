import { tCollectionItem } from "src/typed/types";
import { v4 as uuidv4 } from "uuid";

export const generateEmptyCards = (count: number) =>
  new Array(count).fill(0).map<tCollectionItem>((_, index) => ({
    id: `##Phantom-${uuidv4()}`,
    name: "",
    imageUrl: "",
    rank: 0,
    score: 0,
    priceETH: 0,
    priceUSD: 0,
    estimatedPriceUSD: 0,
    estimatedPriceETH: 0,
    estimatePercent: {
      duration: true,
      value: 0,
    },
    checked: false,
    collection: {
      slug: "",
      name: "",
      contract_address: "",
      token_id: "",
    },
    hasValue: true,
    expiry: "2033-03-23T14:53:08.201Z",
    listings: [],
  }));
