import { IconTimeRange, IconFloorPrice, IconNewListings, IconSupply } from 'src/assets/icons';

import pic1 from 'src/assets/images/home/tableNFT/nft1.png';
import pic2 from 'src/assets/images/home/tableNFT/nft2.png';
import pic3 from 'src/assets/images/home/tableNFT/nft3.png';
import pic4 from 'src/assets/images/home/tableNFT/nft4.png';
import pic5 from 'src/assets/images/home/tableNFT/nft5.png';

import { tTopRows } from './types';
import { tTimeFilter, tBaseSelect } from 'src/typed/types';
import { toLocaleUS } from 'src/helpers';

export const timeFilterInitialState: tTimeFilter[] = [
	{ val: '30m', title: '30m', check: true },
	{ val: '1h', title: '1h', check: false },
	{ val: '24h', title: '24h', check: false },
	{ val: '7d', title: '7d', check: false },
	{ val: '30d', title: '30d', check: false },
	{ val: 'all', title: 'All Time', check: false },
];

export const rows: tTopRows[] = [
  {
    id: 1,
    collection: {
      imageUrl: pic1,
      name: 'Peachy Puch#22',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    },
    volume: {
      value: toLocaleUS(24.265),
      percent: '+2%',
      duration: true,
    },
    floor_price: {
      value: toLocaleUS(0.265),
      percent: '+1.5%',
      duration: true,
    },
    owners: {
      value: '5.1K',
      percent: '-33',
      duration: false,
    },
    smart_wallets: {
      value: '4.6K',
      percent: '-33',
      duration: false,
    },
    sales: {
      value: 54,
      percent: '+3.5%',
      duration: true,
    },
    outlook: true,
    history: {
      time_range: {
        value: '1044h 26m',
        addition_value: '+3m',
        duration: false,
      },
      floor_price: {
        value: toLocaleUS(129205),
        percent: '10%',
        duration: true,
      },
      new_listings: {
        value: '86',
        addition_value: '+33',
        duration: true,
      },
      supply: { value: '10k' },
    },
    open: false,
  },
  {
    id: 2,
    collection: {
      imageUrl: pic2,
      name: 'Dayco Serpentine Belt',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    },
    volume: {
      value: toLocaleUS(8.99),
      percent: '+2%',
      duration: true,
    },
    floor_price: {
      value: toLocaleUS(2.245),
      percent: '+1.5%',
      duration: true,
    },
    owners: {
      value: '3.2K',
      percent: '-33',
      duration: false,
    },
    smart_wallets: {
      value: '4.6K',
      percent: '-33',
      duration: false,
    },
    sales: {
      value: 32,
      percent: '+3.5%',
      duration: true,
    },
    outlook: false,
    history: {
      time_range: {
        value: '1044h 26m',
        addition_value: '+3m',
        duration: false,
      },
      floor_price: {
        value: toLocaleUS(129205),
        percent: '3.5%',
        duration: true,
      },
      new_listings: { value: '86', addition_value: '-33', duration: false },
      supply: { value: '10k' },
    },
    open: false,
  },
  {
    id: 3,
    collection: {
      imageUrl: pic3,
      name: 'mad-ballot-holder',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    },
    volume: {
      value: toLocaleUS(17.84),
      percent: '+2%',
      duration: true,
    },
    floor_price: {
      value: toLocaleUS(0.135),
      percent: '+1.5%',
      duration: true,
    },
    owners: {
      value: '5.5K',
      percent: '-33',
      duration: false,
    },
    smart_wallets: {
      value: '5.0K',
      percent: '-33',
      duration: false,
    },
    sales: {
      value: 24,
      percent: '+3.5%',
      duration: true,
    },
    outlook: true,
    history: {
      time_range: {
        value: '1044h 26m',
        addition_value: '+3m',
        duration: false,
      },
      floor_price: {
        value: toLocaleUS(129205),
        percent: '3.5%',
        duration: true,
      },
      new_listings: { value: '86' },
      supply: { value: '10k' },
    },
    open: false,
  },
  {
    id: 4,
    collection: {
      imageUrl: pic4,
      name: 'Pile of Many Plates',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    },
    volume: {
      value: toLocaleUS(14.81),
      percent: '+2%',
      duration: true,
    },
    floor_price: {
      value: toLocaleUS(2.245),
      percent: '+1.5%',
      duration: true,
    },
    owners: {
      value: '3.2K',
      percent: '-33',
      duration: false,
    },
    smart_wallets: {
      value: '2.6K',
      percent: '-33',
      duration: false,
    },
    outlook: true,
    sales: {
      value: 23,
      percent: '+3.5%',
      duration: true,
    },
    history: {
      time_range: {
        value: '1044h 26m',
        addition_value: '+3m',
        duration: false,
      },
      floor_price: {
        value: toLocaleUS(129205),
        percent: '3.5%',
        duration: true,
      },
      new_listings: { value: '86' },
      supply: { value: '10k' },
    },
    open: false,
  },
  {
    id: 5,
    collection: {
      imageUrl: pic5,
      name: 'Worldpac Alternator',
      contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    },
    volume: {
      value: toLocaleUS(8.99),
      percent: '+2%',
      duration: true,
    },
    floor_price: {
      value: toLocaleUS(0.135),
      percent: '+1.5%',
      duration: true,
    },
    owners: {
      value: '5.5K',
      percent: '-33',
      duration: false,
    },
    smart_wallets: {
      value: '5.0K',
      percent: '-33',
      duration: false,
    },
    sales: {
      value: 24,
      percent: '+3.5%',
      duration: true,
    },
    outlook: false,
    history: {
      time_range: {
        value: '1044h 26m',
        addition_value: '+3m',
        duration: false,
      },
      floor_price: {
        value: toLocaleUS(129.205),
        percent: '3.5%',
        duration: true,
      },
      new_listings: { value: '86' },
      supply: { value: '10k' },
    },
    open: false,
  },
];

export const collumn = [
	{
		key: 'collection',
		name: 'Collection',
		isSort: false,
	},
	{
		key: 'volume',
		name: 'Volume',
		isSort: true,
		align: 'left',
		collumnClassName: 'mobile-right',
	},
	{
		key: 'floor_price',
		name: 'Floor Price',
		isSort: true,
		align: 'left',
		collumnClassName: 'mobile-right',
	},
	{
		key: 'owners',
		name: 'Owners',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'smart_wallets',
		nameHidden: 'Smart ',
		name: 'Wallets',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'sales',
		name: 'Sales',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'outlook',
		name: 'Outlook',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{ key: 'open', name: '', isSort: false, align: 'center', collumnClassName: 'same-padding' },
];

export const historyData = [
	{ id: '1', image: <IconTimeRange />, title: 'Time Listed', type: 'time_range' },
	{ id: '2', image: <IconFloorPrice />, title: 'Average Price Sold', type: 'floor_price' },
	{ id: '3', image: <IconNewListings />, title: 'Listings', type: 'new_listings' },
	{ id: '4', image: <IconSupply />, title: 'Supply', type: 'supply' },
];

export const selectData: tBaseSelect = [
	{ title: 'Volume (High to Low)', key: 'volume_high_low' },
	{ title: 'Volume (Low to High)', key: 'volume_value_low_high' },
	{ title: 'Floor Price (High to Low)', key: 'floor_price_high_low' },
	{ title: 'Floor Price (Low to High)', key: 'floor_price_low_high' },
	{ title: 'Owners (Max to Min)', key: 'owners_max_min' },
	{ title: 'Owners (Min to Max)', key: 'owners_min_max' },
	{ title: 'Smart Wallets (Max to Min)', key: 'smart_wallets_max_min' },
	{ title: 'Smart Wallets (Min to Max)', key: 'smart_wallets_min_max' },
	{ title: 'Sales (High to Low)', key: 'sales_max_min' },
	{ title: 'Sales (Low to High)', key: 'sales_min_max' },
	{ title: 'Outlook (Up to Down)', key: 'outlook_max_min' },
	{ title: 'Outlook (Down to Up)', key: 'outlook_min_max' },
];
