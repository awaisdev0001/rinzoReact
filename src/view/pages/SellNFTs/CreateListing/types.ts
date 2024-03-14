import { tMarketplaces } from 'src/typed/types';
export interface tMarketplacesExtend extends tMarketplaces {
	checked?: boolean;
	percent?: string | number;
}
