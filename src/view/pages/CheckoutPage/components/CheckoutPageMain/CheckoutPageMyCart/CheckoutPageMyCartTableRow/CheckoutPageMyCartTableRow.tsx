import { ChangeEvent, createRef, FC, useRef, useState } from 'react';
import { NftInfoForCart } from 'src/view/components';
import { removeItemOfCollections, tCollectionReducer } from 'src/store';
import { excludeZeroAhead, onlyPositiveDigitsInputHandler, toLocaleUS } from 'src/helpers';
import { IconEther } from 'src/assets/icons';
import { tCollectionItem } from 'src/typed/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';

import '../CheckoutPageMyCart.scss';

interface IProps {
	item: tCollectionItem;
	index: number;
	hasValue?: boolean;
}

export const CheckoutPageMyCartTableRow: FC<IProps> = ({ item, index, hasValue }) => {
	const [content, setContent] = useState<number | string>(0);
	const { selectedCards } = useAppSelector<tCollectionReducer>(state => state.collectionReducer);

	const refArray = Array.from(Array(selectedCards.length)).map(_ => createRef());
	const nodeRef = useRef<HTMLInputElement[] | any>(refArray);

	const dispatch = useAppDispatch();

	const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setContent(evt.target.value);
	};
	return (
		<tr>
			<td>
				<NftInfoForCart
					item={item}
					onRemove={() => dispatch(removeItemOfCollections(item))}
					hasFeePercent
					isCheckoutCart={true}
				/>
			</td>
			<td>
				<div
					tabIndex={0}
					className={
						hasValue ? 'my__cart__middle__body-disable' : 'my__cart__middle__body'
					}
					onClick={e => {
						e.preventDefault();
						nodeRef.current[index].current.focus();
					}}
				>
					<label>
						<input
							ref={nodeRef.current[index]}
							type="number"
							value={excludeZeroAhead(content)}
							// placeholder="0"
							defaultValue={0}
							className="my__cart__middle__body__input"
							onKeyDown={onlyPositiveDigitsInputHandler}
							onChange={changeHandler}
						/>
						<span>%</span>
					</label>
				</div>
			</td>
			<td>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-end',
					}}
				>
					<h1 className="my__cart__nft__price">
						<IconEther />
						<span>{toLocaleUS(item.priceETH)}</span>
					</h1>
					<h2 className="my__cart__nft__price_dollars">${toLocaleUS(item.priceUSD)}</h2>
				</div>
			</td>
		</tr>
	);
};
