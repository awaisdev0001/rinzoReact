import { FC, useCallback, useEffect, useRef, useState, useMemo } from "react";
import { Grid } from "@mui/material";
import { EstimatedCard } from "src/view/components";
// import { collection } from '../../../data';
import { useAppDispatch, useAppSelector } from "src/hooks";
import { Box } from "src/typed/interfaces";

import {
  getDataOfCollections,
  selectItemOfCollections,
  tCollectionReducer,
} from "src/store";
import { tCollectionItem, tMarketplaces } from "src/typed/types";
import "./ItemsLayoutCards.scss";
import { useParams } from "react-router-dom";
import getCollectionItems, {
  itemCountPerRequest,
} from "src/services/api/collection/getCollectionItems";
import {
  tCollectionItemsResult,
  tCollectionListingsResult,
} from "src/typed/requests/collection/tCollection";
import { cdnTokenImageUrl } from "src/helpers/cdnUrls/cdnTokenUrls";
import InfiniteScroll from "react-infinite-scroll-component";
import { IconLoader } from "src/assets/icons";
import { tRankRange } from "src/typed/requests1/tRankRange";
import { tTraitSet } from "src/typed/requests1/tTraitSet";
import { tFilterSidebarEventType } from "src/typed/types/tFilterTypes/tFilterEventTypes";
import { getSortBy, getSortOrder } from "../../../helper";
import getCollectionListings from "src/services/api/collection/getCollectionListings";
import { tEthRange } from "src/typed/requests1/tEthRange";
import { BigNumber, ethers } from "ethers";
import { generateEmptyCards } from "src/helpers/generateEmptyCards";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ICollectionInfo } from "src/typed/requests/collection";
import { marketplaceList } from "src/config";
import { removeDuplicatesFromArray } from "src/helpers/array";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

interface IProps {
  isCartOpen: boolean;
  isItems?: boolean;
  selectedFilterOptions: tFilterSidebarEventType;
  pageFilterOptions: {
    status: string;
    result: number;
    updateTime: number;
    search: string;
    select: string;
  };
  collection: ICollectionInfo;
}

export const ItemsLayoutCards: FC<IProps> = ({
  isCartOpen,
  isItems,
  selectedFilterOptions,
  pageFilterOptions,
  collection,
}) => {
  const { slug } = useParams();
  const componentId = useComponentIdGenerator();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { arrayOfCards, selectedCards } = useAppSelector<tCollectionReducer>(
    (state) => state.collectionReducer
  );
  const [cardItems, setCardItems] = useState<tCollectionItem[]>([]);

  /**
   * Only available in the listings page (isItems === false)
   */
  const selectItemHandler = useCallback(
    (item: tCollectionItem) => {
      // check expiry time
      const expiry: any = new Date(item.expiry);
      if (expiry.getTime() <= new Date().getTime()) {
        return;
      }

      setSelectedItems((prevState) => {
        if (prevState.includes(item.id as string)) return prevState;
        prevState.push(item.id as string);
        return prevState;
      });
      dispatch(selectItemOfCollections(item));
    },
    // eslint-disable-next-line
    [selectedItems.length, dispatch]
  );
  const [selectIndex, setSelectIndex] = useState<number>(-1);
  // const selectedIndexCallback = useCallback(
  // 	(index: number) => {
  // 		setSelectIndex(index);
  // 	},
  // 	[selectIndex]
  // );
  const [scrollAwareBox, setScrollAwareBox] = useState<Box>({
    height: 0,
    left: 0,
    top: 0,
    width: 0,
  });
  let [isClicked, setIsClicked] = useState<number>(0);
  let [isShiftPressed, setShiftPressed] = useState<boolean>(false);
  const refShiftPressed = useRef(isShiftPressed);
  const [loading, setLoading] = useState(false);

  const [pageData, setPageData] = useState<{
    page: number;
    hasNextPage: boolean;
  }>({
    page: 0,
    hasNextPage: true,
  });

  const filterData = useMemo(() => {
    const traitSets: tTraitSet[] = [];
    let rankRange: tRankRange = {
      start: 1,
      end: 10 ** 6,
    };
    let priceWeiRange: tEthRange = {
      start: "1",
      end: BigNumber.from(String(Number.MAX_SAFE_INTEGER))
        .mul(BigNumber.from(10).pow(18).toString())
        .toString(),
    };
    let markets: string[] = [];

    for (let trait in selectedFilterOptions.collectionPage) {
      if (typeof selectedFilterOptions.collectionPage[trait][0] === "string") {
        if (trait === "marketplace") {
          markets = selectedFilterOptions.collectionPage[trait] as string[];
        } else {
          traitSets.push({
            type: trait,
            values: selectedFilterOptions.collectionPage[trait] as string[],
          });
        }
      } else if (trait === "rank") {
        rankRange = {
          start: selectedFilterOptions.collectionPage[trait][0] as number,
          end: selectedFilterOptions.collectionPage[trait][1] as number,
        };
      } else if (trait === "ethRange") {
        priceWeiRange = {
          start: ethers.utils
            .parseEther(
              selectedFilterOptions.collectionPage[trait][0].toString()
            )
            .toString(),
          end: ethers.utils
            .parseEther(
              selectedFilterOptions.collectionPage[trait][1].toString()
            )
            .toString(),
        };
      }
    }
    return { rankRange, traitSets, priceWeiRange, markets };
  }, [selectedFilterOptions.collectionPage]);

  const filterdCards = useMemo(
    () =>
      (isItems ? cardItems : arrayOfCards)
        .filter(
          (card) =>
            !pageFilterOptions.search ||
            card.name
              .toLowerCase()
              .includes(pageFilterOptions.search.toLowerCase())
        )
        .map(
          (collectedCard) =>
            selectedCards?.find(
              (selectedCard) => selectedCard?.id === collectedCard?.id
            ) ?? collectedCard
        ),
    // eslint-disable-next-line
    [
      selectedCards?.length,
      arrayOfCards,
      pageFilterOptions.search,
      cardItems,
      isItems,
    ]
  );

  let startX = 0,
    startY = 0;
  const handleMouseMove = (e: any) => {
    startX = e.pageX;
    startY = e.pageY;
    const endX = e.pageX;
    const endY = e.pageY;
    setScrollAwareBox({
      top: Math.min(startY, endY),
      left: Math.min(startX, endX),
      width: Math.abs(startX - endX),
      height: Math.abs(startY - endY),
    });
  };
  const handleMouseClick = (e: any) => {
    if (e.shiftKey) {
      setIsClicked(++isClicked);
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.shiftKey) {
      setShiftPressed(true);
    }
  };
  const handleKeyUp = (e: any) => {
    if (refShiftPressed.current) {
      setShiftPressed(false);
    }
  };

  useEffect(() => {
    refShiftPressed.current = isShiftPressed;
  }, [isShiftPressed]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return function cleanup() {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    fetchItems(1, componentId);
  }, [filterData, pageFilterOptions.select, collection]);

  const convertItemResultToListingRow = (items: tCollectionItemsResult[]) =>
    items.map<tCollectionItem>((el) => {
      return {
        id: el.tokenID,
        name: el.name,
        imageUrl: cdnTokenImageUrl(slug ?? "", el.tokenID),
        rank: el.rarityRank ?? 0,
        score: el.rarityScore ?? 0,
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
          slug: collection.name,
          name: collection.name,
          contract_address: slug ?? "",
          token_id: el.tokenID,
        },
        hasValue: true,
        expiry: "0",
      };
    });

  const convertListingResultToListingRow = (
    listings: tCollectionListingsResult[]
  ) =>
    listings.map<tCollectionItem>((el) => {
      let minPrice = 0;
      el.listings.forEach((listing) => {
        const price = Number(ethers.utils.formatEther(listing.priceWei));
        if (!minPrice || minPrice > price) {
          minPrice = price;
        }
      });

      return {
        id: el.tokenID,
        name: el.name,
        imageUrl: cdnTokenImageUrl(slug ?? "", el.tokenID),
        rank: el.rarityRank ?? 0,
        score: el.rarityScore ?? 0,
        priceETH: minPrice,
        priceUSD: 0,
        estimatedPriceUSD: 0,
        estimatedPriceETH: 0,
        estimatePercent: {
          duration: true,
          value: 0,
        },
        checked: false,
        collection: {
          slug: collection.name,
          name: collection.name,
          contract_address: slug ?? "",
          token_id: el.tokenID,
        },
        hasValue: true,
        expiry: "2033-03-23T14:53:08.201Z",
        listings: el.listings,
      };
    });

  const fetchItems = async (page: number, componentId: string) => {
    console.log(`fetchItems(${page}, ${loading})`);
    if (!slug) {
      return;
    }

    setLoading(true);

    try {
      if (isItems) {
        // add phantom cards
        let newCards = generateEmptyCards(itemCountPerRequest);
        let oldCards = cardItems.slice(0, (page - 1) * itemCountPerRequest);
        let mergedCards = oldCards.concat(newCards);
        setCardItems(mergedCards);

        try {
          const items = await getCollectionItems(
            page,
            slug,
            filterData.rankRange,
            getSortBy(pageFilterOptions.select),
            getSortOrder(pageFilterOptions.select),
            filterData.traitSets,
            componentId
          );

          newCards = convertItemResultToListingRow(items?.result || []);
          mergedCards = oldCards.concat(newCards);
          setCardItems(mergedCards);
          setPageData({ page: page, hasNextPage: items?.hasNextPage ?? false });
        } catch (ex) {
          setCardItems(oldCards);
        }
      } else {
        // add phantom cards
        let newCards = generateEmptyCards(itemCountPerRequest);
        let oldCards = arrayOfCards.slice(0, (page - 1) * itemCountPerRequest);
        let mergedCards = oldCards.concat(newCards);
        dispatch(getDataOfCollections(mergedCards));

        try {
          const listings = await getCollectionListings(
            page,
            slug,
            filterData.rankRange,
            filterData.priceWeiRange,
            filterData.markets,
            getSortBy(pageFilterOptions.select),
            getSortOrder(pageFilterOptions.select),
            filterData.traitSets,
            componentId
          );

          newCards = convertListingResultToListingRow(listings?.result ?? []);
          mergedCards = oldCards.concat(newCards);
          dispatch(getDataOfCollections(mergedCards));
          setPageData({ page: page, hasNextPage: !!listings?.hasNextPage });
        } catch (ex) {
          dispatch(getDataOfCollections(oldCards));
        }
      }
    } catch (error: any | AxiosError) {}

    setLoading(false);
  };

  return (
    <InfiniteScroll
      // dataLength={itemCountPerRequest * pageData.page}
      dataLength={filterdCards.length}
      next={() => fetchItems(pageData.page + 1, componentId)}
      hasMore={!loading && pageData.hasNextPage}
      loader={
        <div className="table__loader-icon">
          <IconLoader />
        </div>
      }
      scrollableTarget="body"
      scrollThreshold={0.95}
    >
      <Grid
        container
        columns={{ xs: 1, sm: 2, md: 4, lg: 5 }}
        spacing={2}
        sx={{ marginBottom: "20px" }}
      >
        {filterdCards?.map((item: tCollectionItem, currrentIndex: number) => (
          <EstimatedCard
            className={`${isCartOpen && "estimated-card--small"}`}
            key={item.id}
            name={item.name}
            priceETH={item.priceETH}
            priceUSD={item.priceUSD}
            imageUrl={item.imageUrl}
            estimatedPriceUSD={item.estimatedPriceUSD}
            estimatedPriceETH={item.estimatedPriceETH}
            id={item.id}
            onClick={selectItemHandler}
            selectedItems={selectedCards}
            estimatePercent={item.estimatePercent}
            rank={item.rank}
            score={item.score}
            onClickItem={item}
            checked={item.checked}
            fee={item.fee}
            isItems={isItems}
            mouseBox={scrollAwareBox}
            isClicked={isClicked}
            isShiftPressed={isShiftPressed}
            currrentIndex={currrentIndex}
            selectedIndex={selectIndex}
            selectedIndexCallback={setSelectIndex}
            expiry={item.expiry}
            markets={
              !item.listings
                ? undefined
                : (removeDuplicatesFromArray(
                    item.listings?.map((e) => e.market)
                  )
                    .map((e) => marketplaceList.find((e1) => e1.id === e))
                    ?.filter((e) => !!e) as tMarketplaces[])
            }
            collection={item.collection}
          />
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
