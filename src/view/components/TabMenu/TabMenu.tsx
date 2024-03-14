import { FC, ReactNode, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { tItemType } from '../../pages/HomePage/components/utils';
import { useAppSelector } from 'src/hooks';

import './TabMenu.scss';
interface IProps {
	items: tItemType[];
	className?: string;
	additionInfo?: ReactNode;
	isHome?: boolean;
	initialSelect?: number;
}

export const TabMenu: FC<IProps> = ({ items, className, additionInfo, isHome, initialSelect }) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { pathname } = useLocation();
	const hasMatched = useMemo(() => items.findIndex(item => pathname.endsWith(item.to)) !== -1, [pathname]);
	
	return (
		<div className={`tabs-menu-overlay tabs-menu-overlay--${themeMode} ${className} ${isHome ? 'home-menu' : ''}`}>
			<ul className="tabs-menu">
				{items.map((el, index) => {
					return (
						<li key={`tabs-menu-${el.to}`}>
							<NavLink
								className={({ isActive }) =>
									'tabs-menu__item ' + (isActive || (!hasMatched && index === initialSelect) ? 'tabs-menu__item--active' : '')
								}
								to={el.to}
							>
								{el.image && <span className="tabs-menu__item_icon">{el.image}</span>}
								{el.title}
							</NavLink>
						</li>
					);
				})}
			</ul>
			{additionInfo && <div style={{ marginLeft: 'auto' }}>{additionInfo}</div>}
		</div>
	);

};
