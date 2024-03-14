import { FC } from 'react';
import logo from 'src/assets/images/rinzo-logo-legacy.svg';
import { MarketingMenu } from './MarketingMenu';
import './MenuSideBar.scss';

export const MenuSideBar: FC = () => {
	return (
		<div className="menu__side__bar">
			<div className="menu__side__bar__logo">
				<img src={logo} alt="rinzo-logo" />
			</div>
			<MarketingMenu isMobile={false} />
		</div>
	);
};
