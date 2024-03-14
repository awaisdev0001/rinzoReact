import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconEther } from 'src/assets/icons';
import { Button } from '@mui/material';
import { CartItem } from '../CartItem';

import { tCollectionItem } from 'src/typed/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { removeAllItemsOfSentNFTs, removeItemOfSentNFTs, changeOpenWalletPopUp } from 'src/store';

import '../Cart.scss';
import { CollapseButton } from 'src/view/components/buttons';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	items: tCollectionItem[] | [];
}

export const SendCart: FC<IProps> = ({ items }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const routeChange = () => {
		const path = `/transfer-page`;
		navigate(path);
	};
	const { account } = useAppSelector(state => state.accountReducer);
	const [isCollapse, setIsCollapse] = useState<boolean>(false);

	const countTotalAmountOfPrices = (itemsArr: tCollectionItem[], currency: string) => {
		const resultNum = itemsArr?.reduce((accumulator, object) => {
			return accumulator + (currency === 'eth' ? +object.priceETH : +object.priceUSD);
		}, 0);

		return Math.floor(resultNum * 100) / 100;
	};

	const connectWallet = () => {
		dispatch(changeOpenWalletPopUp(true));
	};

	return (
		<div className="cart-overlay cart-overlay--fixed">
			<div className="cart-overlay__header">
				<div className="cart-overlay__header_left">
					<h2>Summary</h2>
					<button
						className="cart-overlay__header-clear"
						onClick={() => {
							dispatch(removeAllItemsOfSentNFTs());
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
						<div
							className={`cart-overlay__body_top-info-price ${isCollapse && 'cart-overlay__body_top-info-price--visible'
								}`}
						>
							<h4>
								<span className="cart-overlay__body_icon cart-overlay__body_icon-eth--big">
									<IconEther width={18} height={18} />
								</span>
								{toLocaleUS(countTotalAmountOfPrices(items, 'eth'))}
							</h4>
							<p>${toLocaleUS(countTotalAmountOfPrices(items, 'usd'))}</p>
						</div>
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
											dispatch(removeItemOfSentNFTs(el));
										}}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="cart-overlay__body_bottom">
					<div
						className={`cart-overlay__body_total ${isCollapse && 'cart-overlay__body_total--hidden'
							}`}
					>
						<div className="cart-overlay__body_total-block">
							<h4>Estimated Gas</h4>
							<h4>
								<span className="cart-overlay__body_icon cart-overlay__body_icon-eth--big">
									<IconEther width={18} height={18} />
								</span>
								{toLocaleUS(countTotalAmountOfPrices(items, 'eth'))}
							</h4>
						</div>
						<div className="cart-overlay__body_total-block">
							<p className="cart-overlay__body_total-tertiary">
								${toLocaleUS(countTotalAmountOfPrices(items, 'usd'))}
							</p>
						</div>
					</div>
					<div className="cart-overlay__buttons">
						{account.address ? (
							<>
								<Button
									className="mui-button mui-button--l mui-button--fulwidth mui-button--outline mui-button--outline-green"
									onClick={routeChange}
								>
									Proceed to Transfer
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
