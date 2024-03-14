import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { TabMenu } from 'src/view/components';
import { PortfolioBanner } from './components';

import { useAppSelector } from 'src/hooks';
import { items } from './data';

export const Profile = () => {
	const { account } = useAppSelector(state => state.accountReducer);
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { pathname } = useLocation();
	const history = useNavigate();
	useEffect(() => {
		if (account.address) {
			if (pathname === `/profile`) {
				history(`/profile/portfolio`);
			}
		} else history(`/`);
	}, [pathname]);

	useEffect(() => {
		if (!account.address) {
			alert('You are not connected');
			history(`/`);
		}
	}, [account]);

	return (
		<>
			<PortfolioBanner />
			<TabMenu
				items={items}
				className={`tabs-menu-overlay--bg tabs-menu-overlay--bg-darker tabs-menu-overlay--bg-${themeMode}`}
			/>
			<div className={`app__content_body app__content_body--white ${themeMode}`}>
					<Outlet />
			</div>
		</>
	);
};
