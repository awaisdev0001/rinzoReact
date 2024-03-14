import { useEffect, useState } from "react";
import { ItemsCartSide } from "./ItemsCartSide";
import { ItemsLayoutSide } from "./ItemsLayoutSide";

import { collection, sweepFilter } from "../data";
import { tTimeFilter } from "src/typed/types";
import { tFilterSidebarEventType } from "src/typed/types/tFilterTypes/tFilterEventTypes";
import { ItemsFilterSide } from "./ItemsFilterSide";
import { useParams } from "react-router-dom";
import getCollectionInfo from "src/services/api/collection/getCollectionInfo";
import { ICollectionInfo } from "src/typed/requests/collection";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const Items = ({ isItems = false }) => {
  const { slug: contractAddress } = useParams();
  const componentId = useComponentIdGenerator();
  const [filterOpen, setFilterOpen] = useState(false);
  const [pageData, setPageData] = useState({
    sweep: "items",
  });
  const [filter, setFilter] = useState<tTimeFilter[]>(sweepFilter);
  const [selectedFilterOptions, setSelectedFilterOptions] =
    useState<tFilterSidebarEventType>({
      filterSide: {},
      leaderboard: [],
      collectionPage: {},
    });
  const [collectionInfo, setCollectionInfo] = useState<ICollectionInfo>({
    name: "",
    displayName: "",
    contractName: "",
    tokenStandard: "",
    owner: "",
    creator: "",
    creationTime: "",
    creationTx: "",
    symbol: "",
    totalSupply: 0,
    verified: false,
    banner: "",
    image: "",
    description: "",
    website: "",
    discord: "",
    twitter: "",
    instagram: "",
    telegram: "",
    creatorFeesPercent: 0,
  });

  const changeFilter = (val: string) => {
    let newTimeFilter = [];
    newTimeFilter = filter.map((el) => {
      return {
        ...el,
        check: el.val === val,
      };
    });
    setFilter(newTimeFilter);
  };
  const changeFilterOpenOption = (arg: boolean) => {
    setFilterOpen(arg);
  };

  useEffect(() => {
    changeFilter(pageData.sweep);
  }, [pageData.sweep]);

  useEffect(() => {
    (async () => {
      if (!contractAddress) {
        return;
      }

      try {
        const collection = await getCollectionInfo(
          contractAddress,
          componentId
        );
        setCollectionInfo(collection);
        console.log({ collection });
      } catch (error: any | AxiosError) {
        console.log(error);
        let msg = "Error";
        if (error.code !== "ERR_CANCELED") {
          if (error.isAxiosError) {
            if (error.response?.status === 404) {
              msg = "getCollectionInfo(contractAddress)";
            }
          }
          toast.warning(msg);
        }
      }
    })();
  }, [contractAddress]);

  return (
    <>
      <ItemsFilterSide
        changeFilterOpenOption={changeFilterOpenOption}
        openMobile={filterOpen}
        isItems={isItems}
        onApply={(e) => setSelectedFilterOptions(e)}
        collection={collectionInfo}
      />
      <ItemsLayoutSide
        isFilterOpen={filterOpen}
        changeFilterOpenOption={(arg) => changeFilterOpenOption(arg)}
        isItems={isItems}
        selectedFilterOptions={selectedFilterOptions}
        collection={collectionInfo}
      />
      <ItemsCartSide
        sweepFilter={filter}
        filterPosition={pageData.sweep}
        changeFilter={(val) => {
          setPageData((prevState) => {
            return {
              ...prevState,
              sweep: val,
            };
          });
        }}
        items={collection.items}
      />
    </>
  );
};
