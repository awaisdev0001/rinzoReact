import { FC } from 'react';
import { BaseTooltip } from 'src/view/components';
import { IconInfo } from 'src/assets/icons';

import { useAppSelector } from 'src/hooks';
import { tCollectionItem } from 'src/typed/types';
import { tCollectionReducer } from 'src/store';
import { CheckoutPageMyCartTableRow } from './CheckoutPageMyCartTableRow';
import './CheckoutPageMyCart.scss';

interface IProps {
	items: tCollectionItem[];
}

export const CheckoutPageMyCart: FC<IProps> = ({ items }) => {
	const { selectedCards } = useAppSelector<tCollectionReducer>(state => state.collectionReducer);

	return (
		<div className="checkout__page__my_cart">
			<table className="checkout__page__my_cart__table">
				<thead className="checkout__page__my_cart__table-head">
					<tr className="checkout__page__my_cart__table-head-tr">
						<th>My Cart</th>
						<th className="my__cart__middle__head">
							Royalty
							<BaseTooltip
								text={`We don’t pay collection royalties - you have 100% ownership of the NFT. If you want to support the collection out of generosity you can set a royalty fee!`}
								width={'20.6rem'}
								biggerText
							>
								<IconInfo
									height={16}
									width={16}
									fill={'#667085'}
									className="my__cart__middle__head-icon"
								/>
							</BaseTooltip>
						</th>
						<th>{selectedCards.length} NFTs</th>
					</tr>
				</thead>
				<tbody className="checkout__page__my_cart__table-body">
					{items.map((item, index) => (
						<CheckoutPageMyCartTableRow
							hasValue={item.hasValue}
							key={index}
							item={item}
							index={index}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
