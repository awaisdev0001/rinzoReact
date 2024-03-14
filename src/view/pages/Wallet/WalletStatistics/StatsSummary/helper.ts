import { toLocaleUS } from "src/helpers";
import { IStatsSummary } from "src/typed/requests/wallet/stats";
import { tStats } from "../../types";
import { ethers } from "ethers";
const labels: { [key: string]: string } = {
  offersSent: "Amount of Offers Sent",
  offersReceived: "Amount of Offers Received",
  avgOfferSentWei: "Average Offers Sent",
  avgOfferSentUsd: "Average Offers Sent",
  avgOfferReceivedWei: "Average Offers Received",
  avgOfferReceivedUsd: "Average Offers Received",
  avgProfitWei: "Average Profit for Trade",
  avgProfitUsd: "Average Profit for Trade",
  highestProfitWei: "Highest Profit",
  highestProfitUsd: "Highest Profit",
  avgLossWei: "Average Lost per Trade",
  avgLossUsd: "Average Lost per Trade",
  highestLossWei: "Highest Loss",
  highestLossUsd: "Highest Loss",
  avgSpentWei: "Average Amount Spent",
  avgSpentUsd: "Average Amount Spent",
  totalSpentWei: "Total Amount Spent",
  totalSpentUsd: "Total Amount Spent",
};

export const convertStatsSummaryToStats = (data: IStatsSummary): tStats[] => [
  {
    id: 1,
    title: "Amount of Offers Sent",
    amount: data.offersSent,
  },
  {
    id: 2,
    title: "Amount of Offers Received",
    amount: data.offersReceived,
  },
  {
    id: 3,
    title: "Average Offers Sent",
    price: toLocaleUS(ethers.utils.formatEther(data.avgOfferSentWei)),
  },
  {
    id: 4,
    title: "Average Offers Received",
    price: toLocaleUS(ethers.utils.formatEther(data.avgOfferReceivedWei)),
  },
  {
    id: 5,
    title: "Average Profit for Trade",
    price: toLocaleUS(ethers.utils.formatEther(data.avgProfitWei)),
  },
  {
    id: 6,
    title: "Highest Profit",
    price: toLocaleUS(ethers.utils.formatEther(data.highestProfitWei)),
  },
  {
    id: 7,
    title: "Total Amount Spent",
    price: toLocaleUS(ethers.utils.formatEther(data.totalSpentWei)),
  },
  {
    id: 8,
    title: "Average Lost per Trade",
    price: toLocaleUS(ethers.utils.formatEther(data.avgLossWei)),
  },
  {
    id: 9,
    title: "Highest Loss",
    price: toLocaleUS(ethers.utils.formatEther(data.highestLossWei)),
  },
  {
    id: 10,
    title: "Average Amount Spent",
    price: toLocaleUS(ethers.utils.formatEther(data.avgSpentWei)),
  },
];
