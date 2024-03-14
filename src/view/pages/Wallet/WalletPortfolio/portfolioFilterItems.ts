import { tCurrency, tMenuItem } from 'src/typed/types';

export const portfolioFilterItems = (curr: tCurrency): tMenuItem[] => [
  {
    title: 'Collection',
    id: 'collection',
    hasSearch: true,
    isItems: true,
    items: [
      {
        title: 'All',
        id: 'all',
        number: 2,
      },
      {
        title: 'Bored Ape Yacht Club',
        id: 'rinzo',
        number: 2,
      },
      {
        title: 'CyberBrokers',
        id: 'cyberbrokers',
        number: 2,
      },
      {
        title: 'KILLABEARS',
        id: 'killabears',
        number: 2,
      },
      {
        title: 'God Hates NFTees',
        id: 'god',
        number: 2,
      },
    ],
  },
  {
    title: `Listed on Marketplace`,
    id: `marketplaces`,
    items: [
      {
        title: 'All',
        id: 'all',
        number: 2,
      },
      {
        title: 'Rinzo',
        id: 'rinzo',
        number: 0,
      },
      {
        title: 'Opensea',
        id: 'opensea',
        number: 2,
      },
      {
        title: 'Gem.xyz',
        id: 'gem',
        number: 0,
      },
      {
        title: 'x2y2.xyz',
        id: 'x2y2',
        number: 0,
      },
    ],
  },
  {
    title: `Market Price ${curr === 'eth' ? '(ETH)' : '(USD)'}`,
    id: `priceEth`,
    hasRange: true,
    items: [],
    hasHoverIcon: true,
    hoverText: 'The seller set the price on the marketplace',
  },
];
