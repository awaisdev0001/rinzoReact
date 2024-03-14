import { Outlet, useLocation, useNavigate, useParams, useHref } from 'react-router-dom';
import { useEffect } from 'react';

import { Banner } from '../components';
import { TabMenu } from 'src/view/components';
import { useAppSelector } from 'src/hooks';
import { items } from '../data';
import { NftPage } from 'src/view/pages/NftPage';

export const CollectionPage = () => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { pathname } = useLocation();
	const { slug, token_id } = useParams();
	const history = useNavigate();
  
	window.analytics.track('collections/view', {
    contract_address: slug,
    });

	useEffect(() => {
		if (pathname === `/collection/${slug}`) {
			history(`${pathname}/listings`);
		}
	}, [pathname]);

	if (token_id) {
		return <NftPage />
	}

	return (
		<>
			<Banner />
			<TabMenu
				items={items}
				className={`tabs-menu-overlay--bg tabs-menu-overlay--bg-${themeMode}`}
			/>
			<div className={`app__content_body app__content_body--white ${themeMode}`}>
				<Outlet />
			</div>
		</>
	);
};
