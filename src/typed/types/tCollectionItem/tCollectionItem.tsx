import { ReactNode } from 'react';
import { tCollectionListingsMarket } from 'src/typed/requests/collection/tCollection';
export type tCollectionItem = {
  id: string | number;
  name: string;
  collection?: {
    slug: string;
    name: string;
    contract_address: string;
		token_id: string | number;
  };
  imageUrl: string;
  rank: number;
  score: number;
  priceETH: number | string;
  priceUSD: number | string;
  estimatedPriceUSD: number | string;
  estimatedPriceETH: number | string;
  estimatePercent: {
    duration: boolean;
    value: number;
  };
  checked: boolean;
  fee?: number;
  hasValue?: boolean;
  expiry: string;
	listings?: tCollectionListingsMarket[];
};

export type tMarketplaces = {
	id?: string;
	url?: string;
	image: string;
	title: string;
	duration?: string;
	additionData?: ReactNode;
	data?: string | number;
};
export interface tCollectionItemExtend extends tCollectionItem {
	markets: tMarketplaces[] | [];
	purchase_price: {
		usd: number;
		eth: number;
	};
	list_price: {
		price: number | string;
		priceCurrency: string;
		floor: {
			usd: number;
			eth: number;
		};
	};
	pnl: {
		percent: number;
		duration: boolean;
	};
	royalties: {
		usd: number;
		eth: number;
		percent: number;
		duration: boolean;
	};
}
