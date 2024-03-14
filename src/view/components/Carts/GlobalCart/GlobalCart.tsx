import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconBeatingHeart, IconEther, IconLoader } from 'src/assets/icons';
import { Button } from '@mui/material';
import { CloseButton } from 'src/view/components';
import { CartItem } from '../CartItem';

import { tCollectionItem } from 'src/typed/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import {
	changeOpenCart,
	removeAllItemsOfCollections,
	removeItemOfCollections,
	changeOpenWalletPopUp,
} from 'src/store';
import { tCartOpenReducer } from 'src/store/layout/reducer';
import '../Cart.scss';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	items: tCollectionItem[] | [];
}

export const GlobalCart: FC<IProps> = ({ items }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const routeChange = () => {
		const path = `/checkout-page`;
		navigate(path);
	};
	const { sweepOpen } = useAppSelector<tCartOpenReducer>(state => state.cartOpenReducer);
	const { account } = useAppSelector(state => state.accountReducer);
	const [loader, setLoader] = useState<boolean>(false);

	const countTotalAmountOfPrices = (itemsArr: tCollectionItem[], currency: string) => {
		const resultNum = itemsArr?.reduce((accumulator, object) => {
			return accumulator + (currency === 'eth' ? +object.priceETH : +object.priceUSD);
		}, 0);
		return Math.floor(resultNum * 100) / 100;
	};
	const Seconds = 5000;
	const connectWallet = () => {
		dispatch(changeOpenWalletPopUp(true));
	};

	useEffect(() => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
		}, 1500);
	}, [items]);


	/**
	 * Checking expiry time
	 * Disabled for now. We will enable this after we have integrated listing aggregator
	 */
	
	// useEffect(() => {
  //   const interval = setInterval(() => {
  //     items.forEach((el) => {
  //       const item_date: any = el.expiry;
  //       const new_item_date: any = new Date(item_date);
  //       const currentDate: any = new Date();
  //       if (new_item_date.getTime() <= currentDate.getTime()) {
  //         dispatch(removeItemOfCollections(el));
  //       }
  //     });
  //   }, Seconds);
  //   return () => clearInterval(interval);
  // }, [dispatch, items]);

  
	return (
		<div className="cart-overlay">
			<div className="cart-overlay__header">
				<h2>My Cart</h2>
				{!sweepOpen && (
					<span className="sweep-mode__header-close">
						<CloseButton
							onClick={() => {
								dispatch(changeOpenCart(false));
							}}
						/>
					</span>
				)}
			</div>
			{items.length > 0 ? (
				<>
					{loader ? (
						<div className="cart-overlay__loader">
							<IconLoader color="grey" />
						</div>
					) : (
						<div className="cart-overlay__body">
							<div className="cart-overlay__body_top">
								<div className="cart-overlay__body_top-info">
									<p className="cart-overlay__sum">
										{items.length} NFTs{' '}
										<button
											className="cart-overlay__header-clear"
											onClick={() => {
												dispatch(removeAllItemsOfCollections());
											}}
										>
											Clear
										</button>
									</p>
								</div>
								<div className="cart-overlay__body_items">
									{items.map(el => {
										return (
											<CartItem
												key={el.id}
												item={el}
												onRemove={() => {
													dispatch(removeItemOfCollections(el));
												}}
											/>
										);
									})}
								</div>
							</div>
							<div className="cart-overlay__body_bottom">
								<div className="cart-overlay__body_total">
									<div className="cart-overlay__body_total-block">
										<h2>Total</h2>
										<h2>
											<IconEther />
											{toLocaleUS(countTotalAmountOfPrices(items, 'eth'))}
										</h2>
									</div>
									<div className="cart-overlay__body_total-block">
										<h6>{items.length} NFTs</h6>
										<p className="cart-overlay__body_total-tertiary">
											${toLocaleUS(countTotalAmountOfPrices(items, 'usd'))}
										</p>
									</div>
								</div>
								<p className="cart-overlay__body_gas">
									<span className="cart-overlay__body_gas--bold">Gas Saving</span>
									<span className="cart-overlay__body_gas--green">$15.53</span>
									with Rinzo <IconBeatingHeart />
								</p>
								<div className="cart-overlay__buttons">
									{account.address ? (
										<>
											<Button
												className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-blue"
												onClick={() => {
													alert('Insufficient Balance to Buy Now');
												}}
											>
												Insufficient Balance to Buy Now
											</Button>
											{/*<Button*/}
											{/*    className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green"*/}
											{/*    onClick={() => {*/}
											{/*        alert('Buy Now');*/}
											{/*    }}*/}
											{/*>*/}
											{/*    Buy Now*/}
											{/*</Button>*/}
											<Button
												className="mui-button mui-button--l mui-button--fulwidth mui-button--outline mui-button--outline-green"
												onClick={routeChange}
											>
												Proceed to Checkout
											</Button>
										</>
									) : (
										<Button
											className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green"
											onClick={() => {
												connectWallet();
											}}
										>
											Connect Wallet
										</Button>
									)}
								</div>
							</div>
						</div>
					)}
				</>
			) : (
				<>
					<div className="cart-overlay__empty">
						<p className="cart-overlay__empty-text">
							Your Rinzo Cart is empty. Fill it with NFTs and start collecting
						</p>
						<div className="cart-overlay__buttons">
							{account.address ? (
								<Button
									className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-blue"
									onClick={() => {
										alert('Select Items to Buy');
									}}
								>
									Select Items to Buy
								</Button>
							) : (
								<Button
									className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green"
									onClick={() => {
										connectWallet();
									}}
								>
									Connect Wallet
								</Button>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};
