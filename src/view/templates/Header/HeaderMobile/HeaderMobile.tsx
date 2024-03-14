import { FC, useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AccountInfo } from 'src/view/components';
import {
	BackgroundMode,
	CurrencySwitcher,
	Autocomplete,
	BurgerMenu,
	Nav,
	Cart,
	AccountMenu,
} from '../components';
import { Button } from '@mui/material';
import { IconSearch, IconMoonEmpty, IconSunEmpty, IconWhale } from 'src/assets/icons';

import { menu, searchResultInitialState } from '../data';
import { getGlobalSearchResult } from 'src/services';
import { useAppSelector, useAppDispatch } from 'src/hooks';
import { tAccount } from 'src/typed/types';
import { changeOpenWalletPopUp } from 'src/store';

import logo from 'src/assets/images/rinzo-logo-legacy.svg';
import logoDark from 'src/assets/images/rinzo-logo-dark-mode-legacy.svg';

import './HeaderMobile.scss';

interface IProps {
	openedMenu: (arg: boolean) => any | void;
	account: tAccount;
	defaultMode: boolean;
	toggleTheme: React.ChangeEventHandler<HTMLInputElement>;
}
export const HeaderMobile: FC<IProps> = ({ openedMenu, account, defaultMode, toggleTheme }) => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const [searchResult, setSearchResult] = useState(searchResultInitialState);
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [openSearch, setOpenSearch] = useState<boolean>(false);
	const nodeRef = useRef<HTMLInputElement>();

	useEffect(() => {
		openedMenu(openMenu);
	}, [openMenu]);

	useEffect(() => {
		setOpenMenu(false);
	}, [pathname]);

	const search = (val: string) => {
		setSearchResult(prevState => {
			return {
				...prevState,
				search: val,
			};
		});
		if (val.length === 0 || val.length > 2) {
			setSearchResult(prevState => {
				return {
					...prevState,
					search: val,
					loading: true,
				};
			});
			getGlobalSearchResult(val).then(response => {
				const { data, isEmpty } = response;
				setSearchResult(prevState => {
					return {
						...prevState,
						search: val,
						loading: false,
						result: data,
						isEmpty,
					};
				});
			});
		}
	};

	const connectWallet = () => {
		dispatch(changeOpenWalletPopUp(true));
	};

	return (
		<header className="header-mobile">
			<div className="header-mobile__top">
				<div className="header-mobile__top_left">
					<NavLink to={'/'}>
						<div className="header-mobile__logo">
							{themeMode === 'light' ? (
								<img src={logo} alt="rinzo-logo" />
							) : (
								<img src={logoDark} alt="rinzo-logo" />
							)}
						</div>
					</NavLink>
				</div>
				<div className="header-mobile__top_right">
					{!openMenu && (
						<div className="header-mobile__top_right-icons">
							<div className="header-mobile__icon">
								<button onClick={() => setOpenSearch(true)}>
									<IconSearch
										width="20"
										height="20"
										className="header-mobile__icon-search"
									/>
								</button>
							</div>
							<label className="header-mobile__icon" htmlFor="mobile-theme">
								<input
									type="checkbox"
									id="mobile-theme"
									checked={defaultMode}
									onChange={toggleTheme}
								/>
								{defaultMode ? <IconSunEmpty /> : <IconMoonEmpty />}
							</label>
							<div className="header-mobile__icon">
								<Cart />
							</div>
						</div>
					)}
					<div className="header-mobile__icon">
						<BurgerMenu
							//eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							ref={nodeRef}
							checked={openMenu}
							onChange={e => {
								setOpenMenu(e.target.checked);
							}}
						/>
					</div>
				</div>
			</div>
			<div
				className={`header-mobile__menu header-mobile__hidden-block ${openMenu && 'header-mobile__hidden-block--visible'
					}`}
			>
				<div>
					{account.address && <AccountInfo account={account} />}
					<Nav menu={menu} className="header-mobile__nav" />
					<div className="header-mobile__menu_line">
						<p className="line-text">Сurrent currency</p>
						<CurrencySwitcher />
					</div>
					<div className="header-mobile__menu_line">
						<p className="line-text">Color mode</p>
						<BackgroundMode
							id="header-mobile-checkbox"
							defaultMode={defaultMode}
							onChange={toggleTheme}
						/>
					</div>
				</div>
				{account.address ? (
					<div>
						<AccountMenu />
					</div>
				) : (
					<Button
						className="mui-button mui-button--outline mui-button--outline-red"
						onClick={() => {
							connectWallet();
						}}
					>
						Connect Wallet
					</Button>
				)}
			</div>
			<div
				className={`header-mobile__hidden-block header-mobile__hidden-block-top ${openSearch && 'header-mobile__hidden-block--visible'
					}`}
			>
				<Autocomplete
					placeholder="Search items, collections and profiles"
					search={search}
					searchValue={searchResult.search}
					loading={searchResult.loading}
					result={searchResult.result}
					isEmpty={searchResult.isEmpty}
					closeSearch={() => setOpenSearch(false)}
				/>
			</div>
		</header>
	);
};
