import { FC } from "react";
import { ActivityCard } from "src/view/components";
import "./ActivityCards.scss";
import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import { ethers } from "ethers";
import { cdnTokenImageUrl } from "src/helpers/cdnUrls/cdnTokenUrls";
import { toDateString, toTimeString } from "src/helpers/dateFormatter";
import { stringToHash } from "src/helpers/stringToHash";

interface IProps {
  rows: tActivitiesResult[];
}

export const ActivityCards: FC<IProps> = ({ rows }) => {
  const convertActivityResultToActivityCard = (items: tActivitiesResult[]) =>
    items.map((el) => {
      return {
        id: stringToHash(JSON.stringify(el)),
        saleType: el.type,
        cardNum: el.tokenID,
        etherPrice: Number(ethers.utils.formatEther(el.priceWei)),
        diamondPrice: el.rarity,
        starPrice: el.rank,
        image: cdnTokenImageUrl(el.contractAddress, el.tokenID),
        cardTitle: el.name,
        collection: el.contractAddress,
        cardTime: toTimeString(el.timestamp),
        cardDate: toDateString(el.timestamp),
        hash: el.hash,
      };
    });

  return (
    <div className="activity__cards__wrap">
      {convertActivityResultToActivityCard(rows).map((item, index) => (
        <ActivityCard
          key={item.id}
          saleType={item.saleType}
          cardNum={item.cardNum}
          etherPrice={item.etherPrice}
          diamondPrice={item.diamondPrice}
          starPrice={item.starPrice}
          image={item.image}
          cardTitle={item.cardTitle}
          cardTime={item.cardTime}
          cardDate={item.cardDate}
          hash={item.hash}
          contractAddress={item.collection}
        />
      ))}
    </div>
  );
};
