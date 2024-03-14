import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/images/rinzo-logo-legacy.svg';
import logoDark from 'src/assets/images/rinzo-logo-dark-mode-legacy.svg';
import { useAppSelector } from 'src/hooks';
import { RoundedQuestionMarkIcon } from 'src/assets/icons';
import './SimpleHeader.scss';

export const SimpleHeader: FC = () => {
	const { themeMode } = useAppSelector(state => state.themeReducer);

	return (
		<header className="simple__header">
			<div className="simple__header__left">
				<NavLink to={'/'}>
					<div className="simple__header__logo">
						{themeMode === 'light' ? (
							<img src={logo} alt="rinzo-logo" />
						) : (
							<img src={logoDark} alt="rinzo-logo" />
						)}
					</div>
				</NavLink>
			</div>

			<div className="simple__header__right">
				<div className="simple__header__right-wrap">
					<RoundedQuestionMarkIcon />
					<p className="simple__header__right-wrap-par">Support Center</p>
				</div>
			</div>
		</header>
	);
};
