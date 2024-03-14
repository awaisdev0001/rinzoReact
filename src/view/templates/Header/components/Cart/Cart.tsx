import { FC, useEffect, useState } from 'react';
import { IconCart } from 'src/assets/icons';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { changeOpenCart } from 'src/store';
import { tCartOpenReducer } from 'src/store/layout/reducer';
import { tCollectionReducer } from 'src/store/collections/reducer';

import './Cart.scss';
interface IProps {
	className?: string;
}

export const Cart: FC<IProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const { selectedCards } = useAppSelector<tCollectionReducer>(state => state.collectionReducer);
	const [count, setCount] = useState<number>(0);
	const { cartOpen } = useAppSelector<tCartOpenReducer>(state => state.cartOpenReducer);

	useEffect(() => {
		setCount(+selectedCards.length);
	}, [selectedCards]);

	return (
		<div className={`cart ${className}`}>
			<button
				className="cart__content"
				onClick={() => {
					dispatch(changeOpenCart(!cartOpen));
				}}
			>
				<IconCart />
				{count > 0 && (
					<span
						className={`cart__content_count ${count > 99 && 'cart__content_count--more'
							}`}
					>
						{count > 99 ? 99 + '+' : count}
					</span>
				)}
			</button>
		</div>
	);
};
