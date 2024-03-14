import { FC } from 'react';
import { GraphComponent } from 'src/view/components';
import { firstData, secondData } from './data';

export const AnalyticsGraphs: FC = () => {
	return (
		<div className="analytics__graphs">
			<GraphComponent chartData={firstData} />
			<GraphComponent chartData={secondData} />
		</div>
	);
};
