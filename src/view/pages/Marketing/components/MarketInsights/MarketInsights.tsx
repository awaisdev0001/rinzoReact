import { FC } from 'react';
import { MarketingCenterCard } from './MarketingCenterCard';
import { tMarketInsights } from '../../types';
import './MarketInsights.scss';

interface IProps {
	data: tMarketInsights[];
	isGreenBorder: boolean;
}

export const MarketInsights: FC<IProps> = ({ data, isGreenBorder }) => {
	return (
		<div className="market-insights">
			{data.map((item, index) => (
				<MarketingCenterCard
					key={index}
					icon={item.icon}
					title={item.title}
					isGreenBorder={isGreenBorder}
				/>
			))}
		</div>
	);
};
