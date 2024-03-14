import { IconSettings, IconProfile } from 'src/assets/icons';

export const menu = [
	{ to: '/', value: 'Discover' },
	{ to: '/manage', value: 'Manage' },
	// { to: '/send', value: 'Send' },
];

export const searchResultInitialState = {
	search: '',
	loading: false,
	result: {},
	isEmpty: true,
};

export const accountMenu = [
	{ to: '/profile', value: 'My Profile', icon: <IconProfile /> },
	{ to: '/settings', value: 'Account Settings', icon: <IconSettings /> },
];
