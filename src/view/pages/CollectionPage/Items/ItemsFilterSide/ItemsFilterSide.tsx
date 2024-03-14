import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCollectionMarketCounts from "src/services/api/collection/getCollectionMarketCounts";
import { tMenuItem, tMenuNestedItem } from "src/typed/types";
import { tFilterSidebarEventType } from "src/typed/types/tFilterTypes/tFilterEventTypes";
import { FilterSide } from "src/view/components";
import { marketplaceList } from "src/config/marketplaceList";
import getCollectionPriceRange from "src/services/api/collection/getCollectionPriceRange";
import { ethers } from "ethers";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import getCollectionTraitTypes from "src/services/api/collection/getCollectionTraitTypes";
import getCollectionTraitValues from "src/services/api/collection/getCollectionTraitValues";
import { tTraitValue } from "src/typed/requests/collection/traits/tTraitValue";
import { ICollectionInfo } from "src/typed/requests/collection";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

interface IProps {
  changeFilterOpenOption: (arg: boolean) => void;
  openMobile: boolean;
  isItems: boolean;
  onApply?: (e: tFilterSidebarEventType) => void;
  collection: ICollectionInfo;
}

export const ItemsFilterSide: FC<IProps> = ({
  changeFilterOpenOption,
  openMobile,
  isItems,
  onApply,
  collection,
}) => {
  const { slug } = useParams();
  const componentId = useComponentIdGenerator();
  const [filterSidebarData, setFilterSidebarData] = useState<tMenuItem[]>([]);

  useEffect(() => {
    if (!slug) {
      return;
    }

    (async () => {
      let menuItems: tMenuItem[] = [];

      try {
        if (!isItems) {
          const marketCounts = await getCollectionMarketCounts(
            slug,
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
          menuItems = menuItems.concat(marketCountItem);

          // ETH range
          const range = await getCollectionPriceRange(slug, componentId);
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

          setFilterSidebarData(menuItems);
        }

        menuItems.push({
          title: "Rank",
          id: "rank",
          hasRange: true,
          range: [1, collection.totalSupply],
          isItems: true,
        });

        setFilterSidebarData(menuItems);
        const basicItems = [...menuItems];

        const traits = await getCollectionTraitTypes(slug, componentId);
        const valuePromises: Promise<tTraitValue[]>[] = [];
        for (let trait of traits) {
          valuePromises.push(
            getCollectionTraitValues(slug, trait, componentId)
          );
          menuItems.push({
            title: trait,
            id: trait,
            hasSearch: true,
            isItems: true,
            items: [],
          });
        }

        Promise.all(valuePromises).then((values) => {
          for (let i = 0; i < traits.length; i++) {
            basicItems.push({
              title: traits[i],
              id: traits[i],
              hasSearch: true,
              isItems: true,
              items: values[i].map((trait) => ({
                title: trait.value,
                id: trait.value,
                number: trait.occurrences ?? 0,
              })),
            });
          }
          setFilterSidebarData(basicItems);
        });
      } catch (error: any | AxiosError) {}

      setFilterSidebarData(menuItems);
    })();
  }, [slug, collection]);

  return (
    <>
      <FilterSide
        isCollectionPage
        changeFilterOpenOption={changeFilterOpenOption}
        openMobile={openMobile}
        isItems={isItems}
        data={filterSidebarData}
        onApply={onApply}
      />
    </>
  );
};
