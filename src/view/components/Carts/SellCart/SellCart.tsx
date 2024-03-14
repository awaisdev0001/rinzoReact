import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { CartItem } from '../CartItem';

import { tCollectionItem } from 'src/typed/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { removeAllItemsOfSellNFTs, removeItemOfSellNFTs, changeOpenWalletPopUp } from 'src/store';
import { CollapseButton } from 'src/view/components/buttons';

import '../Cart.scss';

interface IProps {
	items: tCollectionItem[] | [];
}

export const SellCart: FC<IProps> = ({ items }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const routeChangeListingPage = () => {
		const path = '/create-listing';
		navigate(path);
	};
	const routeChangeTransferPage = () => {
		const path = '/transfer-page';
		navigate(path);
	};
	const { account } = useAppSelector(state => state.accountReducer);
	const [isCollapse, setIsCollapse] = useState<boolean>(false);

	// const countTotalAmountOfPrices = (itemsArr: tCollectionItem[], currency: string) => {
	//     const resultNum = itemsArr?.reduce((accumulator, object) => {
	//         return accumulator + (currency === 'eth' ? +object.priceETH : +object.priceUSD);
	//     }, 0);

	//     return Math.floor(resultNum * 100) / 100;
	// };

	const connectWallet = () => {
		dispatch(changeOpenWalletPopUp(true));
	};

	return (
		<div className="cart-overlay cart-overlay--fixed">
			<div className="cart-overlay__header">
				<div className="cart-overlay__header_left cart-overlay__header_left-flex">
					<h2>Summary</h2>
					<button
						className="cart-overlay__header-clear"
						onClick={() => {
							dispatch(removeAllItemsOfSellNFTs());
						}}
					>
						Clear
					</button>
				</div>
				<div
					className={`cart-overlay__header_right ${isCollapse && 'cart-overlay__header_right--close'
						}`}
				>
					<CollapseButton
						color="grey"
						isCollapse={isCollapse}
						onClick={() => {
							setIsCollapse(!isCollapse);
						}}
					/>
				</div>
			</div>
			<div className="cart-overlay__body">
				<div className="cart-overlay__body_top">
					<div className="cart-overlay__body_top-info">
						<p className="cart-overlay__sum">{items.length} NFTs</p>
						{!isCollapse && <p className="cart-overlay__last-price">Last Price was</p>}
					</div>
					<div
						className={`cart-overlay__body_items-overlay ${isCollapse && 'cart-overlay__body_items-overlay--hidden'
							}`}
					>
						<div className="cart-overlay__body_items cart-overlay__body_items--fixed-height">
							{items.map(el => {
								return (
									<CartItem
										key={el.id}
										item={el}
										onRemove={() => {
											dispatch(removeItemOfSellNFTs(el));
										}}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="cart-overlay__body_bottom">
					<div className="cart-overlay__buttons">
						{account.address ? (
							<>
								<Button
									className="mui-button mui-button--l mui-button--width-50 mui-button--outline mui-button--outline-green"
									onClick={routeChangeListingPage}
								>
									List
								</Button>
								<Button
									className="mui-button mui-button--l mui-button--width-50 mui-button--outline mui-button--outline-green"
									onClick={routeChangeTransferPage}
								>
									Send
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
		</div>
	);
};
