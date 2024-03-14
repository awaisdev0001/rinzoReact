import market1 from "src/assets/images/markets/market1.svg";
import market2 from "src/assets/images/markets/market2.svg";
import market3 from "src/assets/images/markets/market3.svg";
import market4 from "src/assets/images/markets/market4.png";
import market5 from "src/assets/images/markets/market5.png";
import blurMarket from "src/assets/images/markets/blur.png";

import { tMarketplacesExtend } from "./types";
import { tBaseSelect } from "src/typed/types";

export const collumns = [
  {
    key: "checkbox",
    name: "",
    isSort: false,
    align: "center",
  },
  {
    key: "item",
    name: "Item",
    isSort: false,
  },
  {
    key: "markets",
    name: "Marketplace",
    isSort: false,
    align: "center",
    collumnClassName: "tablet-hidden",
  },
  // {
  //   key: "purchase_price",
  //   name: "Purchase Price",
  //   isSort: true,
  //   collumnClassName: "mobile-hidden",
  // },
  {
    key: "list_price",
    name: "List Price",
    isSort: false,
    collumnClassName: "mobile-hidden",
  },
  // {
  //   key: "PNL",
  //   name: "PNL",
  //   isSort: true,
  //   collumnClassName: "mobile-hidden",
  // },
  // {
  //   key: "royalties",
  //   name: "Royalties",
  //   isSort: true,
  //   collumnClassName: "mobile-hidden",
  // },
  {
    key: "empty2",
    name: "",
    isSort: false,
  },
];

export const selectMobileData: tBaseSelect = [
  { title: "Purchase Price", key: "purchase_price" },
  { title: "PNL", key: "pnl" },
  { title: "Royalties", key: "royalties" },
];

export const marketplaces: tMarketplacesExtend[] = [
  // {
  // 	image: market4,
  // 	title: 'Rinzo',
  // 	percent: 0,
  // 	checked: true,
  // 	duration: '',
  // },
  {
    image: market1,
    title: "OpenSea",
    percent: 2,
    checked: false,
    duration: "",
  },
  {
    image: market3,
    title: "X2Y2",
    percent: 2,
    checked: false,
    duration: "",
  },
  {
    image: market2,
    title: "LooksRare",
    percent: 2.5,
    checked: false,
    duration: "",
  },
  // {
  // 	image: market5,
  // 	title: 'Rarible',
  // 	percent: 2,
  // 	checked: false,
  // 	duration: '',
  // },
  {
    image: blurMarket,
    title: "Blur.io",
    percent: 2,
    checked: false,
    duration: "",
  },
];

export const marketplacesLimits: {
  image: string;
  title: string;
  min?: string;
  max?: string;
}[] = [
  {
    image: market1,
    title: "OpenSea",
    min: "3m",
  },
  {
    image: market2,
    title: "X2Y2",
    max: "6m",
  },
];
