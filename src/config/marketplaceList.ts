import { tMarketplaces } from "src/typed/types";

import iconOpensea from "src/assets/images/markets/market1.svg";
import iconLooksRare from "src/assets/images/markets/market2.svg";
import iconX2Y2 from "src/assets/images/markets/market3.svg";
import iconRinzo from "src/assets/images/markets/market4.png";
import iconRarible from "src/assets/images/markets/market5.png";
import iconBlur from "src/assets/images/markets/blur.png";

export const marketplaceList: tMarketplaces[] = [
  {
    id: "rinzo",
    title: "Rinzo",
    image: iconRinzo,
  },
  {
    id: "opensea",
    title: "Opensea",
    image: iconOpensea,
  },
  {
    id: "x2y2",
    title: "X2Y2",
    image: iconX2Y2,
  },
  {
    id: "looksrare",
    title: "LooksRare",
    image: iconLooksRare,
  },
  {
    id: "rarible",
    title: "Rarible",
    image: iconRarible,
  },
  {
    id: "blur",
    title: "Blur.io",
    image: iconBlur,
  },
];
