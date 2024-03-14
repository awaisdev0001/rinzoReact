import { ChangeEventHandler, FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { BackgroundMode, CurrencySwitcher, Autocomplete, Nav, Cart } from '../components';
import Button from '@mui/material/Button';
import { ConnectedWallet } from '../components';

import { menu, searchResultInitialState } from '../data';
import { getGlobalSearchResult } from 'src/services';
import { useAppSelector, useAppDispatch } from 'src/hooks';
import { tAccount } from 'src/typed/types';
import { changeOpenWalletPopUp } from 'src/store';

import logo from 'src/assets/images/rinzo-logo-light-mode.svg';
import logoDark from 'src/assets/images/rinzo-logo-dark-mode.svg';
import './Header.scss';

interface IProps {
	defaultMode: boolean;
	toggleTheme: ChangeEventHandler<HTMLInputElement>;
	account: tAccount;
}

export const Header: FC<IProps> = ({ defaultMode, toggleTheme, account }) => {
	const dispatch = useAppDispatch();
    const { pathname } = useLocation();
	
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const [searchResult, setSearchResult] = useState(searchResultInitialState);

	const search = (val: string) => {
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
	};

	const connectWallet = () => {
		dispatch(changeOpenWalletPopUp(true));
	};

	{/*
	 	window.analytics.track('pages/view', {
    page: pathname,
  	});
*/}

	return (
		<header className="header">
			<div className="header__left">
				<NavLink to={'/'}>
					<div className="header__logo">
						{themeMode === 'light' ? (
							<img src={logo} alt="rinzo-logo" />
						) : (
							<img src={logoDark} alt="rinzo-logo" />
						)}
						{/* <span className={"header__logo_name"}>RINZO</span> */}
					</div>
				</NavLink>

				<Autocomplete
					placeholder="Search items, collections and profiles"
					search={search}
					searchValue={searchResult.search}
					loading={searchResult.loading}
					result={searchResult.result}
					isEmpty={searchResult.isEmpty}
				/>
				<Nav menu={menu} className="header__nav" />
			</div>
			<div className="header__right">
				<CurrencySwitcher />
				<BackgroundMode
					id="header-checkbox"
					defaultMode={defaultMode}
					onChange={toggleTheme}
				/>
				{account.address ? (
					<ConnectedWallet account={account} />
				) : (
					<Button
						style={{ marginRight: '6px' }}
						className="mui-button mui-button--outline mui-button--outline-red"
						onClick={() => {
							connectWallet();
						}}
					>
						Connect Wallet
					</Button>
				)}
				<Cart />
			</div>
		</header>
	);
};
