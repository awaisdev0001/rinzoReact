import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { TabMenu } from 'src/view/components';
import { PortfolioBanner } from './components';

import { useAppSelector } from 'src/hooks';
import { items } from './data';
import { WalletPortfolio } from './WalletPortfolio';

export const Wallet = () => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { pathname } = useLocation();
  const { slug: wallet } = useParams();
	const bWalletHomepage = useMemo(() => (pathname === `/wallet/${wallet}` || pathname === `/wallet/${wallet}/`), [pathname]);

	useEffect(() => {
		if (!wallet) {
			return;
		}

		window.analytics.track('wallets/view', {
      address: wallet,
    });

	}, [wallet]);

	return (
		<>
			<PortfolioBanner />
			<TabMenu
				items={items}
				className={`tabs-menu-overlay--bg tabs-menu-overlay--bg-darker tabs-menu-overlay--bg-${themeMode}`}
				initialSelect={0}
			/>
			<div className={`app__content_body app__content_body--white ${themeMode}`}>
				{bWalletHomepage ? <WalletPortfolio /> : <Outlet />}
			</div>
		</>
	);
};
