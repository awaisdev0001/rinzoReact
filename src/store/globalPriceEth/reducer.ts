import { CurrencyPriceInitialState } from './initialState';
import { IAction } from 'src/typed/interfaces';
import { ETH_USD_PRICE } from './action-types';

export type tCurrencyPriceReducer = {
  eth: any;
  usd: any;
};

export const CurrencyPriceReducer = (
  state = CurrencyPriceInitialState,
  action: IAction<tCurrencyPriceReducer>
): tCurrencyPriceReducer => {
  switch (action.type) {
    case ETH_USD_PRICE:
      return {
        ...state,
        eth: action.payload?.eth,
        usd: action.payload?.usd,
      };
    default:
      return state;
  }
};
