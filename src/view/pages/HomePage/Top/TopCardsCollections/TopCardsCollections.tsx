import { FC } from 'react';
import './TopCardsCollections.scss';
import { TopCollectionsCard } from 'src/view/components';
import { topCardsData } from './data';

export const TopCardsCollections: FC = () => {
	return (
		<div className="top__card__collections-container">
			{topCardsData.map((item, index) => (
				<TopCollectionsCard
					key={item.volume.value + index}
					mainTitle={item.mainTitle}
					floorPrice={item.floorPrice}
					floorPricePercent={item.floorPricePercent}
					mainImage={item.mainImage}
					smallImage={item.smallImage}
					newListings={item.newListings}
					outlook={item.outlook}
					owners={item.owners}
					sales={item.sales}
					smartWallets={item.smartWallets}
					supply={item.supply}
					timeRange={item.timeRange}
					volume={item.volume}
				/>
			))}
		</div>
	);
};
