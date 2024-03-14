import iconDollar from 'src/assets/images/marketingPage/iconDollar.svg';
import iconGrid from 'src/assets/images/marketingPage/iconGrid.svg';
import iconStats from 'src/assets/images/marketingPage/iconStats.svg';
import iconMoney from 'src/assets/images/marketingPage/iconMoney.svg';

import partner1 from 'src/assets/images/marketingPage/partner1.svg';
import partner2 from 'src/assets/images/marketingPage/partner2.svg';
import partner3 from 'src/assets/images/marketingPage/partner4.svg';
import partner4 from 'src/assets/images/marketingPage/partner3.svg';

import apeCard1 from 'src/assets/images/cardImages/smileApe.png';
import apeCard2 from 'src/assets/images/cardImages/boredApe.png';
import apeCard3 from 'src/assets/images/cardImages/activityImage.png';

import nft from 'src/assets/images/marketingPage/nft.jpg';
import nftRarity from 'src/assets/images/marketingPage/nftRarity.jpg';

import openSea from 'src/assets/images/markets/market1.svg';
import gem from 'src/assets/images/markets/market2.svg';

import iconRinzo from 'src/assets/images/marketingPage/iconRinzo.svg';
import iconGem from 'src/assets/images/marketingPage/iconGem.svg';
import iconGenie from 'src/assets/images/marketingPage/iconGenie.svg';
import iconOpensea from 'src/assets/images/marketingPage/iconOpensea.svg';
import iconRaritySniper from 'src/assets/images/marketingPage/iconRaritySniper.svg';

import blockFooter from 'src/assets/images/marketingPage/blockFooter.svg';
import {
	IconMarketConditions,
	IconMarketHealths,
	IconRelevantCollectionStats,
	IconSmartMinters,
	IconSmartWallets,
	IconRoundWhaleGray,
} from 'src/assets/icons';
import { toLocaleUS } from 'src/helpers';

export const data = [
	{
		title: 'Machine Learning Backed Liquidity',
		desc: 'Price Analysis and Price Prediction based on AI and waste amount of data like assets sales history and amount of listings at low prices',
		icon: { url: iconDollar, color: 'green' },
	},
	{
		title: 'Interact with entire NFT Eco System from one hub',
		icon: { url: iconGrid, color: 'red' },
		list: ['Bulk Buy', 'Bulk Sell', 'Bulk Offer Managment'],
	},
	{
		title: 'In-depth Analitycs',
		icon: { url: iconStats, color: 'blue' },
		list: ['Portfolio Trakin', 'PNL', 'Leaderboards', 'Market Insights'],
	},
	{
		title: 'Save Money',
		icon: { url: iconMoney, color: 'yellow' },
		list: [
			'No More Front running',
			'Gas Effecient Contracts',
			'Bypass Royalties & Exchange Fees',
		],
	},
];

export const partners = [
	{ id: 1, url: '', image: partner1 },
	{ id: 2, url: '', image: partner2 },
	{ id: 3, url: '', image: partner3 },
	{ id: 4, url: '', image: partner4 },
	{ id: 5, url: '', image: partner4 },
	{ id: 6, url: '', image: partner3 },
	{ id: 7, url: '', image: partner4 },
	{ id: 8, url: '', image: partner2 },
];

export const feeStructureData = [
	{
		title: 'Gas',
		transactions: toLocaleUS(432144086),
		eth: toLocaleUS(833054),
		usd: toLocaleUS(23950054.909),
	},
	{
		title: 'Exchange Fees',
		transactions: toLocaleUS(432144086),
		eth: toLocaleUS(833054),
		usd: toLocaleUS(23950054.909),
	},
	{
		title: 'Royalty Fees',
		transactions: toLocaleUS(432144086),
		eth: toLocaleUS(833054),
		usd: toLocaleUS(23950054.909),
	},
];

export const rinzoBenefits = {
	id: 1,
	market: openSea,
	imageUrl: nft,
	name: '#3867',
	rank: 5,
	score: 5719,
	priceETH: 92.89,
	estimtedPriceETH: 104.24,
	percent: 6,
	duration: true,
	gasFee: 0.087,
	royalty: {
		price: 0.0,
		percent: 0,
	},
	platformFee: {
		price: 0.0,
		percent: 0,
	},
};
export const openSeaBenefits = {
	id: 2,
	imageUrl: nft,
	name: '7644',
	priceETH: 92.89,
	gasFee: 0.087,
	royalty: {
		price: 9.289,
		percent: 10,
	},
	platformFee: {
		price: 2.322,
		percent: 2.5,
	},
	ends: '7 days',
};
export const gemBenefits = {
	url: 'https://www.gem.xyz',
	market: gem,
	imageUrl: nft,
	name: '7644',
	priceETH: 92.89,
	estimtedPriceETH: 104.24,
	gasFee: 0.087,
	royalty: {
		price: 9.289,
		percent: 10,
	},
	platformFee: {
		price: 2.322,
		percent: 2.5,
	},
};

export const tableHeaderData = [
	{
		logo: iconRinzo,
		title: 'With Rinzo',
	},
	{
		logo: iconGem,
		title: 'With Gem',
	},
	{
		logo: iconGenie,
		title: 'With Genie',
	},
];

export const tableHeaderDataWithOpensea = [
	{
		logo: iconRinzo,
		title: 'With Rinzo',
	},
	{
		logo: iconOpensea,
		title: 'With Opensea',
	},
	{
		logo: iconGem,
		title: 'With Gem',
	},
];

export const bulkActionsData = [
	{ title: 'Bulk Buy', data: [true, true, true] },
	{ title: 'Bulk Sell', data: [true, true, true] },
	{ title: 'Bulk Offer', data: [true, false, false] },
	{ title: 'Bulk Offer Management across all platforms', data: [true, false, false] },
	{ title: 'Real-time alerts', data: [true, false, false] },
];

export const aggregationActionsData = [
	{ title: 'Real-time onchain data feeds', data: [true, false, false] },
	{ title: 'Relies on multiple Exchange APIs', data: [false, true, true] },
	{ title: 'Redundant Apis', data: [true, false, false] },
	{ title: "Enterprise Grade API's", data: [true, false, false] },
	{
		title: 'Aggregated Market Overview',
		text: [
			'All Market Places',
			'OpenSea, LooksRare, X2Y2 Only',
			'OpenSea, LooksRare, X2Y2 Only',
		],
	},
];

export const portfolioInsightsData = [
	{ title: 'Track PNL (In ETH & Accurate USD)', data: [true, false, false] },
	{ title: 'Track Real-time Portfolio Value', data: [true, false, false] },
	{ title: 'Track Historical Wallet Value', data: [true, false, false] },
	{ title: 'In-depth analytics', data: [true, false, false] },
	{ title: 'Export PDF', data: [true, false, false] },
];

export const rarityList = [
	{
		image: iconRinzo,
		title: 'With Rinzo',
		list: [
			'Indexes every single NFT collection, no matter size or age',
			'Automatically scrapes & updates IPFS changes',
			'Arithmetic Approach to rarity calculation',
		],
		background: blockFooter,
	},
	{
		image: iconRaritySniper,
		title: 'With Rarity Sniper',
		list: [
			'Pay to Play (Very limited amount of collections due to charging to get listed)',
			'Manually Scrapes IPFS, so rarity is not always up-to-date',
			'Flawed approach to rarity calculations (non Arithmetic)',
		],
		sponsors: [
			{ image: iconGem, name: 'Used by Gem' },
			{ image: iconGenie, name: 'Used by Genie' },
		],
	},
];

export const rarityInfo = [
	{
		image: nftRarity,
		logo: iconRinzo,
		highestSoldPrice: 99.154,
		highestOfferReceived: 99.154,
		rarityScore: 5719,
		averageOfferAmount: 423,
		color: 'green',
	},
	{
		image: nftRarity,
		logo: iconRaritySniper,
		highestSoldPrice: 99.154,
		highestOfferReceived: 99.154,
		rarityScore: 5719,
		averageOfferAmount: 423,
	},
];

export const marketingCardsArr = [
	{
		icon: <IconMarketHealths />,
		title: 'Market Healths',
	},
	{
		icon: <IconRelevantCollectionStats />,
		title: 'Relevant Collection Stats',
	},
	{
		icon: <IconMarketConditions />,
		title: 'Market Conditions',
	},
];

export const smartTradersCardsArr = [
	{
		icon: <IconRoundWhaleGray />,
		title: 'Track Whales',
	},
	{
		icon: <IconSmartWallets />,
		title: 'Smart Wallets',
	},
	{
		icon: <IconSmartMinters />,
		title: 'Smart Minters',
	},
];

export const feeArr = [
	{
		icon: iconRinzo,
		title: 'Rinzo',
		images: [apeCard1, apeCard2, apeCard3, apeCard3, apeCard3, apeCard3, apeCard3],
		gasAmount: 0,
		avgCostPerItem: 11324,
		usdPrice: 33.092,
	},
	{
		icon: iconGem,
		title: 'Gem',
		images: [apeCard1, apeCard2, apeCard3],
		gasAmount: 2.5,
		avgCostPerItem: 11324,
		usdPrice: 33.092,
	},
	{
		icon: iconGenie,
		title: 'Genie',
		images: [apeCard1, apeCard2, apeCard3],
		gasAmount: 2.5,
		avgCostPerItem: 11324,
		usdPrice: 33.092,
	},
	{
		icon: iconOpensea,
		title: 'Opensea',
		images: [apeCard1, apeCard2, apeCard3],
		gasAmount: 2.5,
		avgCostPerItem: 11324,
		usdPrice: 33.092,
	},
];
