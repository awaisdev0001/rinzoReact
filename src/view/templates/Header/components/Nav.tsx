import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface IProps {
	menu: { to: string; value: string }[];
	className: string;
}

export const Nav: FC<IProps> = ({ menu, className }) => {
	const { pathname } = useLocation();
	const arr = ['/sweeps', '/dumps', '/leaderboard', '/activity'];
	return (
		<nav className={className}>
			<ul>
				{menu.map(el => {
					return (
						<li key={`nav-${el.value}`}>
							<NavLink
								to={el.to}
								className={({ isActive }) =>
									`${className}_item` +
									(isActive || (arr.includes(pathname) && el.value === 'Discover')
										? ` ${className}_item--active`
										: '')
								}
							>
								{el.value}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
