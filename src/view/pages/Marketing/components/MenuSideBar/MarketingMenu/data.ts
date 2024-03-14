import {
	feeStructure,
	fees,
	bulkActions,
	leaderboards,
	machineLearning,
	marketInsights,
	portfolioInsights,
	rarityTracking,
	aggregation,
} from '../../../constants';

export const menuItems = [
	{
		title: 'Fee Structure',
		to: feeStructure,
	},
	{
		title: 'Machine Learning',
		to: machineLearning,
	},
	{
		title: 'Portfolio Insights',
		to: portfolioInsights,
	},
	{
		title: 'Rarity Tracking',
		to: rarityTracking,
	},
	{
		title: 'Leaderboards',
		to: leaderboards,
	},
	{
		title: 'Market Insights',
		to: marketInsights,
	},
	{
		title: 'Bulk Actions',
		to: bulkActions,
	},
	{
		title: 'Aggregation',
		to: aggregation,
	},
	{
		title: 'Fees',
		to: fees,
	},
];
