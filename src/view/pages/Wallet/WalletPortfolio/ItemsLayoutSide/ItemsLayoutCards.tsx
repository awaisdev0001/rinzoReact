import { FC, useEffect, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { EstimatedCardSimple } from "src/view/components";

import { tCollectionItem } from "src/typed/types";
import { generateEmptyCards } from "src/helpers/generateEmptyCards";
import InfiniteScroll from "react-infinite-scroll-component";
import { IconLoader } from "src/assets/icons";
import { BigNumber, ethers } from "ethers";
import { tFilterSidebarEventType } from "src/typed/types/tFilterTypes/tFilterEventTypes";
import { tEthRange } from "src/typed/requests1/tEthRange";
import getWalletPortfolio, {
  getWalletPortfolio_ItemCountPerRequest,
} from "src/services/api/wallets/getWalletPortfolio";
import { getSortBy, getSortOrder } from "../helper";
import { tWalletPortfolioItem } from "src/typed/requests/wallet/portfolio/IWalletPortfolioResult";
import { cdnTokenImageUrl } from "src/helpers/cdnUrls/cdnTokenUrls";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

interface IProps {
  selectedFilterOptions: tFilterSidebarEventType;
  pageFilterOptions: {
    status: string;
    result: number;
    updateTime: number;
    search: string;
    select: string;
  };
}

export const ItemsLayoutCards: FC<IProps> = ({
  selectedFilterOptions,
  pageFilterOptions,
}) => {
  const { slug: wallet } = useParams();
  const [cardItems, setCardItems] = useState<tCollectionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const componentId = useComponentIdGenerator();

  const [pageData, setPageData] = useState<{
    page: number;
    hasNextPage: boolean;
  }>({
    page: 0,
    hasNextPage: true,
  });

  const filterData = useMemo(() => {
    let collections: string[] = [];
    let markets: string[] = [];
    let priceWeiRange: tEthRange = {
      start: "0",
      end: "0",
    };

    for (let trait in selectedFilterOptions.filterSide) {
      if (typeof selectedFilterOptions.filterSide[trait][0] === "string") {
        if (trait === "collection") {
          collections = selectedFilterOptions.filterSide[trait] as string[];
        } else if (trait === "marketplace") {
          markets = selectedFilterOptions.filterSide[trait] as string[];
        }
      } else if (trait === "ethRange") {
        priceWeiRange = {
          start: ethers.utils
            .parseEther(selectedFilterOptions.filterSide[trait][0].toString())
            .toString(),
          end: ethers.utils
            .parseEther(selectedFilterOptions.filterSide[trait][1].toString())
            .toString(),
        };
      }
    }
    return { collections, priceWeiRange, markets };
  }, [selectedFilterOptions.filterSide]);

  const filterdCards = useMemo(
    () =>
      cardItems.filter(
        (card) =>
          !pageFilterOptions.search ||
          card.name
            .toLowerCase()
            .includes(pageFilterOptions.search.toLowerCase())
      ),
    // eslint-disable-next-line
    [pageFilterOptions.search, cardItems]
  );

  useEffect(() => {
    setPageData({ hasNextPage: true, page: 0 });
  }, [wallet]);

  useEffect(() => {
    fetchItems(1, componentId);
  }, [filterData, pageFilterOptions.select]);

  const convertItemResultToListingRow = (items: tWalletPortfolioItem[]) =>
    items.map<tCollectionItem>((el) => {
      let minPrice = 0;
      el?.listings?.forEach((listing) => {
        const price = Number(ethers.utils.formatEther(listing.priceWei));
        if (!minPrice || minPrice > price) {
          minPrice = price;
        }
      });

      return {
        id: el.tokenID,
        name: el.name,
        imageUrl: cdnTokenImageUrl(el.contractAddress, el.tokenID),
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
          slug: el.contractAddress,
          name: "",
          contract_address: el.contractAddress,
          token_id: el.tokenID,
        },
        hasValue: true,
        expiry: "0",
        listings: el.listings,
      };
    });

  const fetchItems = async (page: number, componentId: string) => {
    console.log(`fetchItems(${page}, ${loading})`);
    if (!wallet) {
      return;
    }

    setLoading(true);

    // add phantom cards
    let newCards = generateEmptyCards(getWalletPortfolio_ItemCountPerRequest);
    let oldCards = cardItems.slice(
      0,
      (page - 1) * getWalletPortfolio_ItemCountPerRequest
    );
    let mergedCards = oldCards.concat(newCards);
    setCardItems(mergedCards);

    try {
      const items = await getWalletPortfolio(
        wallet,
        page,
        filterData.collections,
        filterData.markets,
        filterData.priceWeiRange,
        getSortBy(pageFilterOptions.select),
        getSortOrder(pageFilterOptions.select),
        componentId
      );

      newCards = convertItemResultToListingRow(items?.result ?? []);
      mergedCards = oldCards.concat(newCards);
      setCardItems(mergedCards);
      console.log({ mergedCards });
      setPageData({ page: page, hasNextPage: items?.hasNextPage ?? false });
    } catch (error: any | AxiosError) {
      let msg = "Error";
      if (error.code !== "ERR_CANCELED") {
        if (error.isAxiosError) {
          if (error.response?.status === 404) {
            msg = "You don't have any more listed nfts";
            setPageData({ ...pageData, hasNextPage: false });
          }
        }
        toast.warning(msg);
      }

      setCardItems(oldCards);
    }

    setLoading(false);
  };

  return (
    <InfiniteScroll
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
        {filterdCards?.map((item: tCollectionItem) => (
          <EstimatedCardSimple
            {...item}
            key={`portfolio-item-${item.id}`}
            className=""
          />
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
