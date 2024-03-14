import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BackButton, EventType } from 'src/view/components';
import { Button } from '@mui/material';
import { toLocaleUS, toThousandAbbreviation, weiToEther } from 'src/helpers';
import {
	IconArrowLongLeft,
	IconDiamond,
	IconEther,
	IconRank,
	IconRefresh,
	IconShare,
} from 'src/assets/icons';
import { getNFTDetails, tNFT } from '../../types';

import './NftBanner.scss';
import { cdnTokenDataUrl, cdnTokenImageUrl } from 'src/helpers/cdnUrls/cdnTokenUrls';
import apiLibrary from 'src/services/api';
import  useComponentIdGenerator  from "src/hooks/useComponentIdGenerator";


interface IProps extends tNFT {
	addToCart: () => void;
  goToPortfolio: () => void;
  // NftInfoData: () => any;
  
}

export const NftBanner: FC<IProps> = ({
	id,
	collection,
	imageUrl,
	name,
  description,
	author,
	boughtPrice,
	rank,
	maxRank,
	score,
	markets,
	priceUSD,
	priceETH,
	estimatedPriceUSD,
	estimatedPriceETH,
	estimatePercent,
	addToCart,
  goToPortfolio,
  // NftInfoData
}) => {
  const { slug, token_id } = useParams<{ slug?: string; token_id?: string }>();

  const navigate = useNavigate();
  const componentId  =  useComponentIdGenerator()

  const backToPage = () => {
    navigate(`/collection/${slug}/listings`);
  };

  const [NFTData, setNFTData] = useState<getNFTDetails>({
    name: "",
    contract_address: "",
    token_id: "",
    image: "",
    owner: "",
    rank: 0,
    max_rank: 0,
    rarity_score: 0,
    bought_price: "0",
  });
  
  const getNFTDetails = async (componentId:string) => {
    if (!slug || !token_id) return;
    setNFTData((pre) => {
      return {
        ...pre,
        token_id: token_id,
        contract_address: slug,
        image: cdnTokenImageUrl(slug, token_id),
      };
    });
    const nftInfo = await apiLibrary.NFT.getNFTInfo(slug, token_id,componentId)
    console.log(nftInfo)
    
  }
   const getNFTinfo = async (componentId:string) => {
    if (!slug || !token_id) return;
    const nftInfo = await apiLibrary.NFT.getNFTInfo(slug, token_id,componentId)
      setNFTData((pre) => {
        return {
          ...pre,
          rarity_score: nftInfo?.rarityScore ?? pre.rarity_score,
          rank: nftInfo?.rarityRank ?? pre.rank,
          name: nftInfo?.name ?? pre.name
        };
      });
  }
  const getNFTownerDetails = async (componentId: string) => {
    if (!slug || !token_id) return;

    const nftOwnersInfo = await apiLibrary.NFT.getNFTOwnerInfo(
      slug,
      token_id,
      componentId
    );
    console.log(nftOwnersInfo);

    if (nftOwnersInfo && nftOwnersInfo.length > 0) {
      const { fromAddress, amountWei } = nftOwnersInfo[0];

      setNFTData((prevData) => ({
        ...prevData,
        owner: fromAddress ?? prevData.owner,
        bought_price: amountWei ?? prevData.bought_price,
      }));
    }
  };


  useEffect(() => {
    getNFTDetails(componentId);
    getNFTownerDetails(componentId);
    getNFTinfo(componentId);

  }, [componentId]);
	return (
    <div className="nft-banner">
      <div className="nft-banner__content container">
        <div className="nft-banner__content_back">
          <BackButton customClickAction={backToPage} defaultClick={false} />
          <div className="nft-banner__content_back-text">
            <h5>BACK</h5>
            <p>to collection</p>
          </div>
        </div>
        <div className="nft-banner__content_thumb">
          <img src={NFTData.image} alt="nft" />
        </div>
        <div className="nft-banner__content_body">
          <div className="nft-banner__content_body-collection">
            <button
              onClick={backToPage}
              className="nft-banner__content_body-collection__name"
            >
              <span className="icon">
                <IconArrowLongLeft />
              </span>
              {NFTData.name}
            </button>
            <div className="nft-banner__content_body-collection__social">
              <button className="icon icon--refresh">
                <IconRefresh />
              </button>
              <button className="icon icon--share">
                <IconShare />
              </button>
            </div>
          </div>
          <div className="nft-banner__content_thumb nft-banner__content_thumb--mobile">
            <img src={NFTData.image} alt="nft" />
          </div>
          <div className="nft-banner__content_body-info">
            <h1>{NFTData.name}</h1>
            <p className="nft-banner__content_body-info-owner">
              Current Owner{" "}
              <button onClick={() => goToPortfolio()}>{NFTData.owner}</button> bought
              it for <span>{weiToEther(NFTData.bought_price)}</span> ETH
            </p>
            <div className="nft-banner__content_body-info-row">
              <div className="nft-banner__content_body-info-row-block">
                <span className="icon">
                  <IconRank />
                </span>
                <p>
                  Rank:<span className="bold">{NFTData.rank}</span>{" "}
                  <span>/{NFTData.max_rank}</span>
                </p>
              </div>
              <div className="nft-banner__content_body-info-row-block">
                <span className="icon">
                  <IconDiamond />
                </span>
                <p>
                  Rarity Score: <span className="bold">{NFTData.rarity_score}</span>
                </p>
              </div>
            </div>
            <div className={`nft-banner__content_body-cart-block ${id}`}>
              <div className="nft-banner__content_body-cart-block-column">
                <div className="nft-banner__content_body-cart-block__markets">
                  <p>Listed on</p>
                  <ul className="nft-banner__content_body-cart-block__markets-list">
                    {markets.map((el, id) => {
                      return (
                        <li key={`market-${id}`}>
                          <a
                            className="nft-banner__content_body-cart-block__markets-list__item"
                            href={el.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundImage: `url(${el.image})`,
                            }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="nft-banner__content_body-cart-block__prices">
                  <h2>
                    <span className="icon">
                      <IconEther width={28} height={28} />
                    </span>
                    {toLocaleUS(priceETH)}
                  </h2>
                  <p className="nft-banner__content_body-cart-block__prices_price">
                    ${toLocaleUS(priceUSD)}
                  </p>
                  <p className="nft-banner__content_body-cart-block__prices_price-tablet">
                    ${toThousandAbbreviation(priceUSD)}
                  </p>
                </div>
              </div>
              <div className="nft-banner__content_body-cart-block__button">
                <Button
                  className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green-medium"
                  onClick={() => {
                    addToCart();
                  }}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
            <div className="nft-banner__content_body-estimate">
              <EventType
                size="big"
                type={`${estimatePercent.duration ? "sale" : "cancellation"}`}
                text={`${estimatePercent.value}% ${
                  estimatePercent.duration ? "overestimated" : "underestimated"
                }`}
              />
              {/* <div className="nft-banner__content_body-estimate-info">
                <h6>Estimated Price</h6>
                <h5>
                  <span className="icon">
                    <IconEther width={20} height={20} />
                  </span>
                  {toLocaleUS(estimatedPriceETH)}
                </h5>
                <p>${toLocaleUS(estimatedPriceUSD)}</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
