import { FC, MouseEvent } from 'react';
import { CloseButton, NftInfoForCart } from 'src/view/components';
import { toLocaleUS } from 'src/helpers';
import { IconEther } from 'src/assets/icons';

import { tCollectionItem } from 'src/typed/types';

import '../Cart.scss';

interface IProps {
	item: tCollectionItem;
	onRemove?: (args?: MouseEvent<any>) => any | void;
	removed?: boolean;
}

export const CartItem: FC<IProps> = ({ item, onRemove, removed = true }) => {
	return (
		<div className="cart-overlay__body_item">
			<div className="cart-overlay__body_item-content">
				<NftInfoForCart
					item={item}
					removed={removed}
					onRemove={() => onRemove && onRemove()}
				/>
				<div className="cart-overlay__body_item-info cart-overlay__body_item-info--end">
					<p className="price">
						<span>
							<IconEther />
						</span>
						{toLocaleUS(item.priceETH)}
					</p>
					<p className="tertiary">${toLocaleUS(item.priceUSD)}</p>
				</div>
			</div>
			{removed && (
				<div className="cart-overlay__body_item-close">
					<CloseButton
						onClick={() => {
							onRemove && onRemove();
						}}
						className="icon-close--medium icon-close--pink"
					/>
				</div>
			)}
		</div>
	);
};
