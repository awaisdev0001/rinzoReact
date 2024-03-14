import { FC, useEffect, useState } from 'react';
import { CartItem, CloseButton } from 'src/view/components';
import { tCollectionItemExtend } from 'src/typed/types';
import './ListingSummaryRow.scss';
interface IProps {
	item: tCollectionItemExtend;
	removeFromMarket: (val: string) => void;
}

export const ListingSummaryRow: FC<IProps> = ({ item, removeFromMarket }) => {
	const [newItem, setNewItem] = useState(item);

	useEffect(() => {
		setNewItem({
			...item,
			priceUSD:
				item.list_price.priceCurrency === 'eth'
					? +item.list_price.price * 2
					: item.list_price.price,
			priceETH:
				item.list_price.priceCurrency === 'usd'
					? +item.list_price.price / 2
					: item.list_price.price,
		});
	}, [item]);

	return (
		<div className="listing-summary-row">
			<CartItem item={newItem} removed={false} />
			{item.markets?.map((item, index) => (
				<div key={index + item.title} className="listing-summary-row-market">
					<div className="listing-summary-row-market__title">
						<img src={item.image} alt="alt" />
						<h5>{item.title}</h5>
					</div>
					<div className="listing-summary-row-market__time">
						<p>{item.duration || '---'}</p>
						<CloseButton
							className="icon-close--small"
							onClick={() => removeFromMarket(item.title)}
						/>
					</div>
				</div>
			))}
		</div>
	);
};
