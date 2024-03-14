import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { BaseButton } from 'src/view/components';
import { Button, Container } from '@mui/material';
import { IconCheck, IconClose } from 'src/assets/icons';
import { TabMenu } from '../HomePage/components';

import { useAppSelector, useWindowSize, useAppDispatch } from 'src/hooks';
import { tabsItems } from './data';
import { changeOpenWalletPopUp } from 'src/store';

import './SellNFTs.scss';

export const SellNFTs = () => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { pathname } = useLocation();
	const history = useNavigate();
	const params = useParams()
	const dispatch = useAppDispatch();
	const { account } = useAppSelector(state => state.accountReducer);
	const [canBeCancel, setCanBeCancel] = useState<boolean>(false);
	const [isCancel, setIsCancel] = useState<boolean>(false);

	const { width } = useWindowSize();

	const connectWallet = () => {
		dispatch(changeOpenWalletPopUp(true));
	};

	useEffect(() => {
		if (pathname === `/manage`) {
			history(`/manage/items`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<div className="send-page">
			{account.address === '' ? (
				<Container maxWidth="xl" sx={{ padding: 0 }}>
					<div className="send-page__noconnected">
						<h2>Connect your wallet to start listing your NFTs</h2>
						<div className="send-page__noconnected_action">
							<Button
								className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green"
								onClick={() => {
									connectWallet();
								}}
							>
								Connect Wallet
							</Button>
						</div>
					</div>
				</Container>
			) : (
				<>
					<Container maxWidth="xl" sx={{ padding: 0 }}>
						<div className="container--small">
							<h2 className="send-page__title">List your items for sale</h2>
							<h6 className="send-page__subtitle">
								Sell your NFTs all across multiple marketplaces. Use bulk selection to
								sell them in batches.
							</h6>
						</div>
					</Container>
					<TabMenu
						items={tabsItems}
						className={`tabs-menu-overlay--bg-left tabs-menu-overlay--bg tabs-menu-overlay--bg-darker tabs-menu-overlay--bg-${themeMode}`}
						additionInfo={
							canBeCancel && width > 1199 ? (
								<div style={{ display: 'flex' }}>
									{pathname === '/sell/offers-received' && (
										<BaseButton
											text={'Accept Selected'}
											className="button--icon button--colored button--icon-right button--colored-green"
											icon={<IconCheck />}
											onClick={() => {
												setIsCancel(true);
											}}
										/>
									)}
									<BaseButton
										className="button--icon button--colored button--icon-right button--colored-red"
										text={
											pathname === '/sell/offers-sent'
												? 'Cancel Selected Offers'
												: pathname === '/sell/offers-received'
													? 'Ignore Selected'
													: 'Cancel Selected'
										}
										icon={<IconClose />}
										onClick={() => {
											setIsCancel(true);
										}}
									/>
								</div>
							) : (
								false
							)
						}
					/>
					<Outlet context={{ canBeCancel, setCanBeCancel, isCancel, setIsCancel }} />
				</>
			)}
		</div>
	);
};
