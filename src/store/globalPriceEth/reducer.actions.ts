import { ETH_USD_PRICE } from './action-types';


export const tCurrencyPrice = (EthPrice: any, USDPrice: any) => ({
  type: ETH_USD_PRICE,
  payload: {
    eth: EthPrice,
    usd: USDPrice,
  },
});
