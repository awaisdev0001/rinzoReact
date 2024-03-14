import { tCollectionItem, tTimeFilter } from 'src/typed/types';
import { tNFT } from './types';

import pic from 'src/assets/images/NFT/nft.png';
import market1 from 'src/assets/images/markets/market1.svg';
import market2 from 'src/assets/images/markets/market2.svg';
import nft2 from 'src/assets/images/NFT/nft-similar.jpg';
import { toLocaleUS } from 'src/helpers';

export const nft: tNFT = {
  id: 1,
  collection: {
    name: 'Bored Ape Yacht Club',
    slug: 'bored-ape-yacht-club',
    contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    token_id: 0,
  },
  imageUrl: pic,
  name: '#8135',
  author: 'Ganzila',
  boughtPrice: 95.54,
  rank: 5,
  maxRank: 148,
  score: 662,
  markets: [
    {
      url: '',
      image: market1,
    },
    {
      url: '',
      image: market2,
    },
  ],
  priceUSD: 19499.599,
  priceETH: 95.043,
  estimatedPriceUSD: 26234,
  estimatedPriceETH: 97.567,
  estimatePercent: {
    duration: false,
    value: 4,
  },
  expiry: '2023-12-29, 16:50:00',
  traits: [
    {
      id: 1,
      trait_type: 'Hat',
      trait_value: {
        value: "Еrippy Captain's Hat",
      },
      occurrences: '65 - 0.65%',
      rarity_score: 12,
    },
    {
      id: 2,
      trait_type: 'Eyes',
      trait_value: {
        value: 'Hypnotized',
      },
      occurrences: '65 - 0.65%',
      rarity_score: 14,
    },
    {
      id: 3,
      trait_type: 'Earring',
      trait_value: {
        value: 'Silver Stud',
        type: 'super',
      },
      occurrences: '65 - 0.65%',
      rarity_score: 43,
    },
    {
      id: 4,
      trait_type: 'Fur',
      trait_value: {
        value: 'Black',
      },
      occurrences: '65 - 0.65%',
      rarity_score: 34,
    },
    {
      id: 5,
      trait_type: 'Mouth',
      trait_value: {
        value: 'Bored Unshaven Dagger',
      },
      occurrences: '65 - 0.65%',
      rarity_score: 12,
    },
    {
      id: 6,
      trait_type: 'Clothes',
      trait_value: {
        value: 'Hip Hop',
        type: 'silver',
      },
      occurrences: '65 - 0.65%',
      rarity_score: 22,
    },
    {
      id: 7,
      trait_type: 'Background',
      trait_value: {
        value: 'Army Green',
        type: 'gold',
      },
      occurrences: '65 - 0.65%',
      rarity_score: 432,
    },
  ],
  statistics: [
    { title: 'Sold Times', count: 24 },
    { title: 'Offers', count: 54 },
    {
      title: 'Avg. Offer Price',
      count: toLocaleUS(95.03),
      eth: true,
      arrow: true,
      duration: true,
      percent: '+3%',
    },
  ],
  info: {
    contract_address: {
      address: '0x495f906bf780753522c4c5c5eafb5f9905c07b5e',
      etherscan: 'https://etherscan.io/',
    },
    token_id: '6606',
    token_standard: 'ERC1155',
    blockchain: 'Ethereum',
    creator_fees: '5%',
  },
  description:
    '<p>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit <a target="_blank" rel="noreferrer" href="www.BoredApeYachtClub.com">www.BoredApeYachtClub.com </a> for more details.</p>',
  tags: [
    {
      title: 'APE',
      type: 'ape',
    },
    {
      title: 'Yacht',
      type: 'yacht',
    },
    {
      title: 'CLUB',
      type: 'club',
    },
    {
      title: 'DAGGER',
      type: 'dagger',
    },
    {
      title: 'HAT',
      type: 'hat',
    },
    {
      title: 'MOUTH',
      type: 'mouth',
    },
    {
      title: 'HIP HOP',
      type: 'hip_hop',
    },
    {
      title: 'BLACK',
      type: 'black',
    },
    {
      title: 'ARMY GREEN',
      type: 'army_green',
    },
  ],
  activity: [
    {
      id: 1,
      tag: 'sale',
      priceETH: 94.23,
      priceUSD: 532.54,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
      to: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
    {
      id: 2,
      tag: 'listing',
      priceETH: 180.78,
      priceUSD: 2325,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
    {
      id: 3,
      tag: 'sale',
      priceETH: 94.23,
      priceUSD: 532.54,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
      to: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
    {
      id: 4,
      tag: 'transfer',
      priceETH: 94.23,
      priceUSD: 532.54,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
      to: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
    {
      id: 5,
      tag: 'listing',
      priceETH: 94.23,
      priceUSD: 532.54,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
    {
      id: 6,
      tag: 'sale',
      priceETH: 94.23,
      priceUSD: 532.54,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
      to: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
    {
      id: 7,
      tag: 'cancellation',
      priceETH: 94.23,
      priceUSD: 532.54,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
      to: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
    {
      id: 8,
      tag: 'cancellation',
      priceETH: 94.23,
      priceUSD: 532.54,
      date: '04/04/2022',
      from: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
      to: '0xb84a906bf780753522c4c5c5eafb5f9905cffc53',
    },
  ],
};

export const similar: tCollectionItem[] = [
  {
    id: 1,
    name: 'Tavish Foxchase',
    collection: {
      slug: 'cyber-brokers',
      name: 'CyberBrokers',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      token_id: 0,
    },
    imageUrl: nft2,
    rank: 54,
    score: 7262,
    priceETH: 65032,
    priceUSD: 5325.4,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 97.567,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 2,
    name: 'KumaBoss #4902',
    collection: {
      slug: 'kuma-boss-NFT',
      name: 'KumaBossNFT',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: nft2,
    rank: 54,
    score: 7262,
    priceETH: 65032,
    priceUSD: 2654,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 97.567,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 3,
    name: '2942',
    collection: {
      slug: 'mutant-ape-yacht-club',
      name: 'Mutant Ape Yacht Club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: nft2,
    rank: 54,
    score: 7262,
    priceETH: 56.34,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 97.567,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 4,
    name: 'Life Stream',
    collection: {
      slug: 'parallel-alpha',
      name: 'Parallel Alpha',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: nft2,
    rank: 54,
    score: 7262,
    priceETH: 120.05,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 97.567,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 5,
    name: 'CryptoPunk #3100',
    collection: {
      slug: 'crypto-punks',
      name: 'CryptoPunks',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: nft2,
    rank: 54,
    score: 7262,
    priceETH: 120.05,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 97.567,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
  {
    id: 6,
    name: '2942',
    collection: {
      slug: 'mutant-ape-yacht-club',
      name: 'Mutant Ape Yacht Club',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
token_id: 0,
    },
    imageUrl: nft2,
    rank: 54,
    score: 7262,
    priceETH: 120.05,
    priceUSD: 532.54,
    estimatedPriceUSD: 26234,
    estimatedPriceETH: 97.567,
    estimatePercent: {
      duration: true,
      value: 4,
    },
    checked: false,
	  expiry: '2023-12-29, 16:50:00',
  },
];

export const collumn = [
	{
		key: 'trait_type',
		name: 'Trait Type',
		nameMobileVisible: '& Value',
		isSort: true,
	},
	{
		key: 'empty',
		name: '',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'empty5',
		name: '',
		isSort: false,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'trait_value',
		name: 'Trait Value',
		isSort: true,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'occurrences',
		name: 'Occurrences',
		isSort: true,
	},
	{
		key: 'empty3',
		name: '',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'empty7',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'rarity_score',
		name: 'Rarity Score',
		isSort: true,
	},
	{
		key: 'empty4',
		name: '',
		isSort: false,
		align: 'left',
		collumnClassName: 'tablet-hidden',
	},
];

export const timeFilter: tTimeFilter[] = [
	{ val: '24h', title: '24h', check: true },
	{ val: '7d', title: '7d', check: false },
	{ val: '30d', title: '30d', check: false },
];

export const checkboxes = [
	{ name: 'All Events', checked: true },
	{ name: 'Sale', checked: true },
	{ name: 'Listing', checked: true },
	{
		name: 'Transfer',
		checked: true,
	},
	{ name: 'Cancellation', checked: true },
];

export const activityCollumn = [
	{
		key: 'tag',
		name: 'Event Type',
		isSort: false,
	},
	{
		key: 'price',
		name: 'Price',
		isSort: true,
	},
	{
		key: 'empty',
		name: '',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'date',
		name: 'Date',
		isSort: true,
	},
	{
		key: 'from',
		name: 'From',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'to',
		name: 'To',
		isSort: false,
		collumnClassName: 'mobile-hidden',
	},
];

export const chartData = {
	labels: [
		'5 Jun',
		'6 Jun',
		'7 Jun',
		'8 Jun',
		'9 Jun',
		'10 Jun',
		'11 Jun',
		'12 Jun',
		'13 Jun',
		'14 Jun',
		'15 Jun',
		'16 Jun',
		'17 Jun',
		'18 Jun',
		'19 Jun',
	],
	datasets: [
		{
			label: 'Sale',
			data: [
				2000, 4000, 6000, 1500, 6000, 10000, 11000, 12000, 11000, 9000, 5000, 3000, 6000,
			],
			fill: false,
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: '#8EB136',
			lineTension: 0.4,
		},
		{
			label: 'Offer',
			data: [3300, 2500, 3500, 5100, 5400, 4600, 9000, 11000, 10000, 8000, 9000],
			fill: false,
			borderColor: '#FF7676',
			lineTension: 0.4,
		},
		{
			label: 'Transfer',
			data: [
				4300, 3500, 1500, 6100, 4400, 3600, 4000, 2000, 4000, 3000, 4000, 8000, 2000, 1000,
			],
			fill: false,
			borderColor: '#FDB022',
			lineTension: 0.4,
		},
		{
			label: 'Listing',
			data: [
				5300, 4500, 6500, 6500, 5400, 4600, 5000, 3500, 7000, 2000, 8000, 9000, 10000,
				11000,
			],
			fill: false,
			borderColor: '#4891F0',
			lineTension: 0.4,
		},
	],
};
