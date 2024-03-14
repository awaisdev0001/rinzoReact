import { FC } from 'react';
import { AnalyticsBlocks } from './AnalyticsBlocks';
import { AnalyticsTabs } from './AnalyticsTabs';
import { AnalyticsGraphs } from './AnalyticsGraphs';
import { CustomPagination } from 'src/view/components';
import './Analytics.scss';
import { Container } from '@mui/material';

export const Analytics: FC = () => {
	return (
		<Container maxWidth="xl" sx={{ padding: 0 }}>
			<div className="container">
				<div className="analytics__page">
					<AnalyticsBlocks />
					<AnalyticsTabs />
					<AnalyticsGraphs />
					<div className="analytics__page__pagination">
						<CustomPagination pageCount={3} />
					</div>
				</div>
			</div>
		</Container>
	);
};
