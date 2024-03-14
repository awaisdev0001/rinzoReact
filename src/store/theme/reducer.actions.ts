import { CHANGE_THEME_OF_APP } from './action-types';
import { tTheme } from 'src/typed/types';

export const addTheme = (theme: tTheme) => {
	return {
		type: CHANGE_THEME_OF_APP,
		payload: {
			themeMode: theme,
		},
	};
};
