import { IAction } from 'src/typed/interfaces';
import { initialState } from './initialState';
import { CHANGE_THEME_OF_APP } from './action-types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { EMode, tTheme } from 'src/typed/types';

export type tThemeReducer = {
	themeMode: tTheme;
};

const themePersistConfig = {
	key: 'themeState',
	storage: storage,
	whitelist: ['themeMode'],
};

const theme = (state = initialState, action: IAction<tThemeReducer>): tThemeReducer => {
	switch (action.type) {
		case CHANGE_THEME_OF_APP:
			return {
				...state,
				themeMode: action.payload?.themeMode ?? EMode.LIGHT,
			};
		default:
			return state;
	}
};

export const themeReducer = persistReducer<any>(themePersistConfig, theme);
