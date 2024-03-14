import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BaseTag,
  MainCheckbox,
  Statistics,
  ViewToggle,
  BaseButton,
  GraphComponent,
  Loading,
} from "src/view/components";

import { apiClient } from "src/services/api/config";

import {
  NftBanner,
  NftTable,
  NftInfo,
  ActivityCarts,
  NftActivityTable,
} from "./components";

import {
  nft,
  collumn,
  timeFilter,
  checkboxes,
  activityCollumn,
  similar,
  chartData,
} from "./data";
import { tTimeFilter } from "src/typed/types";
import { useAppDispatch } from "src/hooks";
import { pushToCart } from "src/store";

import "./NftPage.scss";
import { MoreSimilar } from "./components/MoreSimilar/MoreSimilar";
import { INFTActivities, INFTTraits } from "src/typed/requests/NFT";
import apiLibrary from "src/services/api";
import { tNFT } from "./types";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const NftPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { slug, token_id } = useParams();
  const componentId = useComponentIdGenerator();
  window.analytics.track("nfts/view", {
    contract_address: slug,
    token_id: token_id,
  });

  const [NftInfoData, setNftInfoData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [pageData, setPageDate] = useState({
    time: "24h",
    sort: "trait_type",
    order: "desc",

    activitySort: "trait_type",
    activityOrder: "desc",
  });
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState<tTimeFilter[]>(timeFilter);
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
  const [checkboxesData, setCheckboxesData] = useState(checkboxes);
  const [NFTtraitsData, setNFTtraitsData] = useState<INFTTraits[]>([]);
  const [NFTActivitiesData, setNFTActivitiesData] = useState<INFTActivities>({
    hasNextPage: false,
    result: [],
  });

  const addToCart = () => {
    const {
      id,
      name,
      imageUrl,
      rank,
      score,
      priceETH,
      priceUSD,
      estimatedPriceUSD,
      estimatedPriceETH,
      estimatePercent,
      collection,
      expiry,
    } = nft;
    dispatch(
      pushToCart({
        id,
        name,
        imageUrl,
        rank,
        score,
        priceETH,
        priceUSD,
        estimatedPriceUSD,
        estimatedPriceETH,
        estimatePercent,
        checked: true,
        collection,
        expiry,
      })
    );
  };

  const goToCollection = (val: string) => {
    navigate(`/collection/${nft?.collection?.slug}`);
  };

  const goToPortfolio = () => {
    navigate(`/wallet/${nft?.collection?.contract_address}/portfolio`);
  };

  const changeCheckboxesData = (name: string, checked: boolean) => {
    const newCheckboxes = checkboxesData.map((el) => {
      return {
        ...el,
        checked:
          el.name === "All Events" && !checked
            ? false
            : name === "All Events" && checked
            ? checked
            : el.name === name
            ? checked
            : el.checked,
      };
    });
    setCheckboxesData(newCheckboxes);
  };

  useEffect(() => {
    changeFilter(pageData.time);
  }, [pageData.time]);

  const getNFTtraits = async (componentId: string) => {
    setLoading(true);
    if (!slug || !token_id) return;
    try {
      const res = await apiLibrary.NFT.getNFTTraits(
        slug,
        token_id,
        componentId
      );
      setNFTtraitsData(res as INFTTraits[]);
      setLoading(false);
    } catch (error) {
      setNFTtraitsData([] as INFTTraits[]);
      console.log(error);
    }
  };

  const getNFTActivities = async (componentId: string) => {
    setLoading(true);
    if (!slug || !token_id) return;
    try {
      const res = await apiLibrary.NFT.getNFTActivities(
        1,
        slug,
        token_id,
        "offer",
        componentId
      );
      setNFTActivitiesData(res as INFTActivities);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNFTActivitiesData({
        hasNextPage: false,
        result: [],
      } as INFTActivities);
    }
  };

  useEffect(() => {
    getNFTtraits(componentId);
    getNFTActivities(componentId);
  }, [slug, token_id]);

  return (
    <div className="nft-page">
      <NftBanner {...nft} addToCart={addToCart} goToPortfolio={goToPortfolio} />
      <div className="nft-page__table">
        <div className="container">
          <h2 className="nft-page__table_title">Traits</h2>
          <div>
            {loading ? (
              <Loading />
            ) : (
              <NftTable
                headerItems={collumn}
                sort={(val: { sort: string; order: string }) =>
                  setPageDate((prevState) => {
                    return {
                      ...prevState,
                      ...val,
                    };
                  })
                }
                order={pageData.order}
                sortName={pageData.sort}
                rowsItems={NFTtraitsData}
                collection={nft.collection.slug}
              />
            )}
          </div>
        </div>
      </div>
      <div className="nft-page__info">
        <div className="nft-page__info_content container">
          <div className="nft-page__info_content_left">
            <div className="nft-page__info_statistics">
              <Statistics
                type="light"
                statistics={nft.statistics}
                timeFilter={filter}
                changeFilter={({ time }) => {
                  setPageDate((prevState) => {
                    return {
                      ...prevState,
                      time,
                    };
                  });
                }}
              />
            </div>
            <NftInfo {...nft.info} />
          </div>
          <div className="nft-page__info_content_right">
            <div className="nft-page__info_description">
              <h4 className="nft-page__info_description-title">Description</h4>
              <div
                className="nft-page__info_description-text"
                dangerouslySetInnerHTML={{ __html: nft.description }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nft-page__activity">
        <div className="container">
          <div className="action-line action-line--bordered">
            <h4 className="action-line__text">Activity</h4>
            {view != "chart" && (
              <div className="action-line__checkboxes">
                {checkboxesData.map((item, index) => (
                  <div
                    key={item.name + "" + index}
                    className="action-line__checkboxes_item"
                  >
                    <MainCheckbox
                      labelText={item.name}
                      checked={item.checked}
                      onChange={(e) => {
                        changeCheckboxesData(item.name, e.target.checked);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="action-line__view action-line__view--standart">
              <ViewToggle
                type={view}
                changeView={(val) => {
                  setView(val);
                }}
                charts={false}
              />
            </div>
          </div>
          <div className="nft-page__activity_content">
            {view === "grid" ? (
              <ActivityCarts items={NFTActivitiesData.result} />
            ) : view === "list" ? (
              <NftActivityTable
                headerItems={activityCollumn}
                sort={(val: { sort: string; order: string }) =>
                  setPageDate((prevState) => {
                    return {
                      ...prevState,
                      activityOrder: val.order,
                      activitySort: val.sort,
                    };
                  })
                }
                order={pageData.activityOrder}
                sortName={pageData.activitySort}
                rowsItems={NFTActivitiesData.result}
              />
            ) : (
              <>{/* <GraphComponent chartData={chartData} /> */}</>
            )}
          </div>
        </div>
      </div>

      {/* <div className="nft-page__more-similar">
				<div className="container">
					<h2 className="nft-page__more-similar_title">More similar NFTs</h2>
				</div>
				<div className="nft-page__more-similar_content container container-tablet-padding-empty">
					<MoreSimilar items={similar} />
				</div>
			</div> */}
    </div>
  );
};
