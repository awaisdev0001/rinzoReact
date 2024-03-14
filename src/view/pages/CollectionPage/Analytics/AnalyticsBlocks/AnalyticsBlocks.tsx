import { FC } from 'react';
import { AnalyticsBlock } from './AnalyticsBlock';
import { blocksArr } from '../data';
import './AnalyticsBlocks.scss';

export const AnalyticsBlocks: FC = () => {
	return (
		<div className="analytics__blocks">
			{blocksArr.map((item, index) => (
				<AnalyticsBlock
					key={item.price + index}
					blockTitle={item.blockTitle}
					up={item.up}
					price={item.price}
					mainDesc={item.mainDesc}
					percentage={item.percentage}
				/>
			))}
		</div>
	);
};
