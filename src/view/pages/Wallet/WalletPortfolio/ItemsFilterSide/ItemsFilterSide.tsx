import { FC, useEffect, useState } from "react";
import { marketplaceList } from "src/config";
import { useAppSelector } from "src/hooks";
import getWalletPortfolioCollections from "src/services/api/wallets/getWalletPortfolioCollections";
import { tWalletPortfolioCollection } from "src/typed/requests/wallet/portfolio/tWalletPortfolioCollection";
import { tMenuItem, tMenuNestedItem } from "src/typed/types";
import { tFilterSidebarEventType } from "src/typed/types/tFilterTypes/tFilterEventTypes";
import { FilterSide } from "src/view/components";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import getWalletPortfolioMarketCounts from "src/services/api/wallets/getWalletPortfolioMarketCounts";
import getWalletPortfolioPriceRange from "src/services/api/wallets/getWalletPortfolioPriceRange";
import { ethers } from "ethers";
import { tMarketCount } from "src/typed/requests1/tMarketCount";
import { useParams } from "react-router-dom";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

interface IProps {
  changeFilterOpenOption: (arg: boolean) => void;
  openMobile: boolean;
  onApply?: (e: tFilterSidebarEventType) => void;
}

export const ItemsFilterSide: FC<IProps> = ({
  changeFilterOpenOption,
  openMobile,
  onApply,
}) => {
  const { slug: wallet } = useParams();
  const componentId = useComponentIdGenerator();
  const [filterSidebarData, setFilterSidebarData] = useState<tMenuItem[]>([]);

  useEffect(() => {
    if (!wallet) {
      return;
    }

    (async () => {
      const menuItems: tMenuItem[] = [];

      try {
        // Add collections
        const collections = await getWalletPortfolioCollections(
          wallet,
          componentId
        );
        menuItems.push({
          title: "Collection",
          id: "collection",
          hasSearch: true,
          isItems: true,
          items: collections.map<tMenuNestedItem>(
            (c: tWalletPortfolioCollection) => ({
              title: c.name,
              id: c.contractAddress,
              number: c.count,
            })
          ),
        });
      } catch (error: any | AxiosError) {
        if (error.code !== "ERR_CANCELED") {
          let msg = "Error in getting collections in Wallet Portfolio page";
          toast.warning(msg);
        }
      }

      try {
        // Add marketplace
        const marketCounts = await getWalletPortfolioMarketCounts(
          wallet,
          componentId
        );
        const marketCountItem = {
          id: "marketplace",
          title: "Listed on Marketplace",
          hasRange: false,
          isItems: false,
          items: marketCounts.map<tMenuNestedItem>((m) => ({
            id: m.market,
            title:
              marketplaceList.find((m1) => m1.id === m.market)?.title ?? "",
            number: m.count,
          })),
        } as tMenuItem;
        menuItems.push(marketCountItem);
      } catch (error: any | AxiosError) {
        if (error.code !== "ERR_CANCELED") {
          let msg = "Error in getting marketplaces in Wallet Portfolio page";
          toast.warning(msg);
        }
      }

      try {
        // ETH range
        const range = await getWalletPortfolioPriceRange(wallet, componentId);
        menuItems.push({
          title: "ETH Range",
          id: "ethRange",
          hasRange: true,
          range: [
            Number(ethers.utils.formatEther(range.start)),
            Number(ethers.utils.formatEther(range.end)),
          ],
          isItems: false,
          rangeColor: "#f50",
        });
      } catch (error: any | AxiosError) {
        if (error.code !== "ERR_CANCELED") {
          let msg = "Error in getting price range in Wallet Portfolio page";
          toast.warning(msg);
        }
      }

      setFilterSidebarData(menuItems);
    })();
  }, [wallet]);

  return (
    <>
      <FilterSide
        changeFilterOpenOption={changeFilterOpenOption}
        openMobile={openMobile}
        data={filterSidebarData}
        onApply={onApply}
      />
    </>
  );
};
