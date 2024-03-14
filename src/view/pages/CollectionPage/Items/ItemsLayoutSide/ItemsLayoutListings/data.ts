import pic1 from 'src/assets/images/home/tableNFT/nft1.png';
import pic2 from 'src/assets/images/home/tableNFT/nft3.png';
import pic3 from 'src/assets/images/home/tableNFT/nft6.png';
import pic4 from 'src/assets/images/home/tableNFT/nft4.png';
import pic5 from 'src/assets/images/home/tableNFT/nft5.png';

import market1 from "src/assets/images/markets/market1.svg";
import market2 from "src/assets/images/markets/market2.svg";
import market3 from "src/assets/images/markets/market3.svg";

import { tListingRow } from './types';
import { tBaseSelect } from 'src/typed/types';

export const collumns = [
  {
    key: 'checkbox',
    name: '',
    isSort: false,
    align: 'center',
  },
  {
    key: 'item',
    name: 'Item',
    isSort: false,
  },
  {
    key: 'markets',
    name: 'Marketplace',
    isSort: false,
    align: 'center',
    collumnClassName: 'tablet-hidden',
  },
  {
    key: 'empty',
    name: '',
    isSort: false,
    collumnClassName: 'tablet-hidden',
  },
  {
    key: 'last_item_price',
    name: 'Last Item Price',
    isSort: true,
    collumnClassName: 'mobile-hidden',
  },
  {
    key: 'list_price',
    name: 'List Price',
    isSort: false,
    collumnClassName: 'mobile-hidden',
  },
  {
    key: 'empty3',
    name: '',
    isSort: false,
    collumnClassName: 'tablet-visible',
  },
  {
    key: 'floor_price',
    name: 'Floor Price',
    isSort: true,
    collumnClassName: 'mobile-hidden',
  },
  {
    key: 'empty4',
    name: '',
    isSort: false,
    collumnClassName: 'tablet-visible',
  },
  {
    key: 'projected_profit',
    name: 'Projected Profit',
    isSort: true,
    collumnClassName: 'mobile-hidden',
  },
  {
    key: 'empty2',
    name: '',
    isSort: false,
    collumnClassName: 'mobile-hidden',
  },
];
export const rows: tListingRow[] = [
  {
    id: 1,
    item: {
      imageUrl: pic1,
      name: '#3867',
      collection: {
        name: 'Bored Ape Yacht Club',
        slug: 'bored-ape-yacht-club',
      },
    },
    markets: [
      {
        url: '',
        image: market1,
        title: 'OpenSea',
        data: '7d',
      },
      {
        url: '',
        image: market2,
        title: 'X2Y2',
        data: '6m',
      },
      {
        url: '',
        image: market3,
        title: 'LooksRare',
        data: '1h',
      },
    ],
    last_item_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      usd: 187824,
      eth: 99.5,
    },
    floor_price: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    projected_profit: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
  },
  {
    id: 2,
    item: {
      imageUrl: pic2,
      name: '#3867',
      collection: {
        name: 'Bored Ape Yacht Club',
        slug: 'bored-ape-yacht-club',
      },
    },
    markets: [
      {
        url: '',
        image: market1,
        title: 'OpenSea',
        data: '7d',
      },
      {
        url: '',
        image: market2,
        title: 'X2Y2',
        data: '6m',
      },
      {
        url: '',
        image: market3,
        title: 'LooksRare',
        data: '1h',
      },
    ],
    last_item_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      usd: 187824,
      eth: 99.5,
    },
    floor_price: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: false,
    },
    projected_profit: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
  },
  {
    id: 3,
    item: {
      imageUrl: pic3,
      name: '#3867',
      collection: {
        name: 'Bored Ape Yacht Club',
        slug: 'bored-ape-yacht-club',
      },
    },
    markets: [
      {
        url: '',
        image: market1,
        title: 'OpenSea',
        data: '7d',
      },
      {
        url: '',
        image: market2,
        title: 'X2Y2',
        data: '6m',
      },
      {
        url: '',
        image: market3,
        title: 'LooksRare',
        data: '1h',
      },
    ],
    last_item_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      usd: 187824,
      eth: 99.5,
    },
    floor_price: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    projected_profit: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
  },
  {
    id: 4,
    item: {
      imageUrl: pic4,
      name: '#3867',
      collection: {
        name: 'Bored Ape Yacht Club',
        slug: 'bored-ape-yacht-club',
      },
    },
    markets: [
      {
        url: '',
        image: market1,
        title: 'OpenSea',
        data: '7d',
      },
      {
        url: '',
        image: market2,
        title: 'X2Y2',
        data: '6m',
      },
      {
        url: '',
        image: market3,
        title: 'LooksRare',
        data: '1h',
      },
    ],
    last_item_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      usd: 187824,
      eth: 99.5,
    },
    floor_price: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    projected_profit: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
  },
  {
    id: 5,
    item: {
      imageUrl: pic5,
      name: '#3867',
      collection: {
        name: 'Bored Ape Yacht Club',
        slug: 'bored-ape-yacht-club',
      },
    },
    markets: [
      {
        url: '',
        image: market1,
        title: 'OpenSea',
        data: '7d',
      },
      {
        url: '',
        image: market2,
        title: 'X2Y2',
        data: '6m',
      },
      {
        url: '',
        image: market3,
        title: 'LooksRare',
        data: '1h',
      },
    ],
    last_item_price: {
      usd: 532.54,
      eth: 0.599,
    },
    list_price: {
      price: 0,
      usd: 187824,
      eth: 99.5,
    },
    floor_price: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
    projected_profit: {
      usd: 532.54,
      eth: 0.599,
      percent: 2,
      duration: true,
    },
  },
];

export const selectMobileData: tBaseSelect = [
  { title: 'Last Item Price', key: 'last_item_price' },
  { title: 'Floor Price', key: 'floor_price' },
  { title: 'Projected Profit', key: 'projected_profit' },
];
