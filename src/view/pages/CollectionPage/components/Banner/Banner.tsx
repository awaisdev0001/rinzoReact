import { useEffect, useState } from "react";

import { collection, timeFilter } from "../../data";
import { tTimeFilter } from "src/typed/types";
import {
  Discord,
  Etherscan,
  GrayCopyIcon,
  IconAddressCheck,
  IconRedirect,
  TwitterIcon,
} from "src/assets/icons";
import { Statistics } from "src/view/components";

import "./Banner.scss";
import bannerBG from "src/assets/images/collectionPage/banner.jpg";
import { useParams } from "react-router-dom";
import { ICollectionInfo } from "src/typed/requests/collection";
import apiLibrary from "src/services/api";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const Banner = () => {
  const [pageData, setPageDate] = useState({
    time: "24h",
  });

  const { slug, token_id } = useParams();
  const componentId = useComponentIdGenerator();
  const [filter, setFilter] = useState<tTimeFilter[]>(timeFilter);
  const [readMore, setReadMore] = useState(true);
  const [collectionInfo, setCollectionInfo] = useState<ICollectionInfo>();

  const changeFilter = (val: string) => {
    // Creates a new array with the same values as the 'filter' state array, but with a new 'check' property added to each object that is set to true or false depending on whether the 'val' parameter matches the 'val' property of that object
    let newTimeFilter = [];
    newTimeFilter = filter.map((el) => {
      return {
        ...el,
        check: el.val === val,
      };
    });
    // Updates the 'filter' state variable with the new array created above
    setFilter(newTimeFilter);
  };

  const changeReadMore = () => {
    // Toggles the 'readMore' state variable between true and false
    setReadMore(!readMore);
  };

  useEffect(() => {
    // Calls 'changeFilter' with the current value of 'pageData.time' when 'pageData.time' changes
    changeFilter(pageData.time);
  }, [pageData.time]);

  const getCollectionInfo = async (slug: string, componentId: string) => {
    try {
      const res = await apiLibrary.Collection.getCollectionInfo(
        slug,
        componentId
      );
      setCollectionInfo(res);
    } catch (error) {
      console.error("Error retrieving collection information:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      // Calls 'getCollectionInfo' with the current value of 'slug' when 'slug' changes
      getCollectionInfo(slug, componentId);
    }
  }, [slug]);

  return (
    <div
      className="banner-collection"
      style={{
        backgroundImage: `url(${collectionInfo?.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div className="banner-collection__content container container-tablet-padding-empty">
        <div className="banner-collection__content_left">
          <div className="banner-collection__content_main">
            <div
              className="banner-collection__content_logo"
              style={{ backgroundImage: `url(${collectionInfo?.image})` }}
            />
            <div>
              <div className="banner-collection__content_info">
                <h3>{collectionInfo?.displayName}</h3>
                {collectionInfo?.verified && (
                  <span className="banner-collection__content_info-check">
                    <IconAddressCheck />
                  </span>
                )}
              </div>
              <p className="banner-collection__content_author">
                by {collection.author}
              </p>
              <div className="banner-collection__content_icons">
                <a
                  href={`https://etherscan.io/address/${slug}`}
                  className="banner-collection__content_icons-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Etherscan />
                </a>
                <a
                  className="banner-collection__content_icons-icon"
                  href={`https://twitter.com/${collectionInfo?.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon width={24} height={24} />
                </a>
                <a
                  className="banner-collection__content_icons-icon"
                  href={`${collectionInfo?.discord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Discord />
                </a>
                <a
                  className="banner-collection__content_icons-icon--tablet"
                  href={`https://example.com/}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconRedirect />
                </a>
              </div>
            </div>
          </div>
          <div>
            {collectionInfo?.website && (
              <a
                className="banner-collection__content_website"
                href={`${collectionInfo?.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-link">
                  <GrayCopyIcon />
                </span>
                visit website
                <span className="icon icon-regdirect">
                  <IconRedirect />
                </span>
              </a>
            )}
            <div
              className={`banner-collection__content_description ${
                !readMore && "banner-collection__content_description--open"
              }`}
            >
              <p
                className={`banner-collection__content_description-text banner-collection__content_description-text--${
                  readMore ? "close" : "open"
                }`}
              >
                {collectionInfo?.description}
              </p>

              <button
                className="banner-collection__content_description-more"
                onClick={() => {
                  changeReadMore();
                }}
              >
                {readMore ? "Read more" : "Read less"}
              </button>
            </div>
          </div>
        </div>
        <div className="banner-collection__content_right">
          <Statistics
            type="dark"
            statistics={collection.statistics}
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
      </div>
    </div>
  );
};
