import { FC, MouseEvent } from 'react';
import { CloseButton } from 'src/view/components';

import { useAppDispatch } from 'src/hooks';
import { tCollectionItem } from 'src/typed/types';

import './NftInfoForCart.scss';

interface IProps {
	item: tCollectionItem;
	onRemove?: (args?: MouseEvent<any>) => any | void;
	hasFeePercent?: boolean;
	isCheckoutCart?: boolean;
	removed?: boolean;
}

export const NftInfoForCart: FC<IProps> = ({
	item,
	onRemove,
	hasFeePercent,
	isCheckoutCart,
	removed = true,
}) => {
	return (
		<div className="cart-nft">
			<div className="cart-nft__count">1 X</div>
			<div className="cart-nft__image" style={{ backgroundImage: `url(${item.imageUrl})` }}>
				{isCheckoutCart ? (
					<div className="cart-nft__image-checkout">
						<CloseButton
							onClick={() => {
								if (onRemove) onRemove();
							}}
							className="icon-close--small"
						/>
					</div>
				) : removed ? (
					<div className="cart-nft__image-close">
						<CloseButton
							onClick={() => {
								if (onRemove) onRemove();
							}}
							className="icon-close--small"
						/>
					</div>
				) : (
					false
				)}
			</div>
			<div className="cart-nft__info">
				<p className="bold">{item.name}</p>
				{item.collection && <p className="secondary">{item.collection.name}</p>}
				{hasFeePercent && (
					<div className="cart-nft__info__fee">
						<span className="cart-nft__info__fee-par">R</span>
						<span className="cart-nft__info__fee-percent">0% Fee</span>
					</div>
				)}
			</div>
		</div>
	);
};
