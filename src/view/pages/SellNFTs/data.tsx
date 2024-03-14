import { IconItems, IconNewListings, IconOffers, IconSent } from 'src/assets/icons';
import { tBaseSelect } from 'src/typed/types';
import { tCollectionItemExtend } from 'src/typed/types';

import nft1 from 'src/assets/images/collectionPage/nft1.jpg';
import nft2 from 'src/assets/images/collectionPage/nft2.jpg';
import nft3 from 'src/assets/images/collectionPage/nft3.jpg';
import { toLocaleUS } from 'src/helpers';

import market1 from "src/assets/images/markets/market1.svg";
import market2 from "src/assets/images/markets/market2.svg";
import market3 from "src/assets/images/markets/market3.svg";
import market4 from 'src/assets/images/markets/market4.png';
import market5 from 'src/assets/images/markets/market5.png';
import blurMarket from 'src/assets/images/markets/blur.png';

export const tabsItems = [
	{ id: 1, to: 'items', title: 'My Items', image: <IconItems /> },
	{
		id: 2,
		to: 'listings',
		title: 'My Listings',
		image: <IconNewListings width={24} height={23} />,
	},
	{
		id: 3,
		to: 'offers-received',
		title: 'Offers Received',
		image: <IconOffers width={16} height={16} />,
	},
	{ id: 4, to: 'offers-sent', title: 'Offers Sent', image: <IconSent /> },
];

export const listItems: string[] = [
	'Select the NFTs you want to listing(there’s no limit).',
	'Select marketplace, duration and price for listing',
	'Confirm Gas and complete your Listing',
	'Follow all events on the My Listing tab',
];

export const selectMarketplaceData: tBaseSelect = [
	{ title: 'All Marketplaces', key: 'all' },
	{ title: 'OpenSea', key: 'OpenSea' },
	{ title: 'X2Y2', key: 'X2Y2' },
	{ title: 'LooksRare', key: 'LooksRare' },
];

export const selectData: tBaseSelect = [
	{ title: 'All Collections', key: 'all' },
	{ title: 'Bored Ape Yacht Club', key: 'bored-ape-yacht-club' },
	{ title: 'CyberBrokers', key: 'cyberbrokers' },
	{ title: 'KILLABEARS', key: 'killabears' },
];

export const items: tCollectionItemExtend[] = [
  {
    id: 1,
    imageUrl: nft1,
    name: '#3867',
    collection: {
      name: 'Bored Ape Yacht Club',
      slug: 'bored-ape-yacht-club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    markets: [
      {
        image: market4,
        title: 'Rinzo',
        duration: '',
      },
      {
        image: market1,
        title: 'OpenSea',
        duration: '',
      },
      {
        image: market3,
        title: 'X2Y2',
        duration: '',
      }
    ],
    rank: 5,
    score: 593,
    priceETH: 94.23,
    priceUSD: toLocaleUS(5325),
    purchase_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      priceCurrency: 'eth',
      floor: {
        usd: 187824,
        eth: 99.5,
      },
    },
    pnl: {
      percent: 2,
      duration: true,
    },
    royalties: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 2,
    imageUrl: nft2,
    name: '#3867',
    collection: {
      name: 'Bored Ape Yacht Club',
      slug: 'bored-ape-yacht-club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    rank: 5,
    score: 593,
    priceETH: 94.23,
    priceUSD: toLocaleUS(5325),
    markets: [
      {
        image: market4,
        title: 'Rinzo',
        duration: '',
      },
      {
        image: market3,
        title: 'X2Y2',
        duration: '',
      }
    ],
    purchase_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      priceCurrency: 'eth',
      floor: {
        usd: 187824,
        eth: 99.5,
      },
    },
    pnl: {
      percent: 2,
      duration: false,
    },
    royalties: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 3,
    imageUrl: nft3,
    name: '#3867',
    collection: {
      name: 'Bored Ape Yacht Club',
      slug: 'bored-ape-yacht-club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    rank: 5,
    score: 593,
    priceETH: 94.23,
    priceUSD: toLocaleUS(5325),
    markets: [
      {
        image: market4,
        title: 'Rinzo',
        duration: '',
      },
      {
        image: market1,
        title: 'OpenSea',
        duration: '',
      },
      {
        image: market3,
        title: 'X2Y2',
        duration: '',
      },
      {
        image: market2,
        title: 'LooksRare',
        duration: '',
      }
    ],
    purchase_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      priceCurrency: 'eth',
      floor: {
        usd: 187824,
        eth: 99.5,
      },
    },
    pnl: {
      percent: 2,
      duration: true,
    },
    royalties: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 104.24,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 4,
    imageUrl: nft2,
    name: '#3867',
    collection: {
      name: 'Bored Ape Yacht Club',
      slug: 'bored-ape-yacht-club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    rank: 5,
    score: 593,
    priceETH: 94.23,
    priceUSD: toLocaleUS(5325),
    markets: [],
    purchase_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      priceCurrency: 'eth',
      floor: {
        usd: 187824,
        eth: 99.5,
      },
    },
    pnl: {
      percent: 2,
      duration: true,
    },
    royalties: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    estimatedPriceUSD: 532.54,
    estimatedPriceETH: 0.599,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 5,
    imageUrl: nft1,
    name: '#3867',
    collection: {
      name: 'Bored Ape Yacht Club',
      slug: 'bored-ape-yacht-club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    rank: 5,
    score: 593,
    priceETH: 94.23,
    priceUSD: toLocaleUS(5325),
    markets: [],
    purchase_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      priceCurrency: 'eth',
      floor: {
        usd: 187824,
        eth: 99.5,
      },
    },
    pnl: {
      percent: 2,
      duration: true,
    },
    royalties: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    estimatedPriceUSD: 532.54,
    estimatedPriceETH: 0.599,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	expiry: '2023-12-29, 16:50:00',
  },
];
