import { FC, useState } from 'react';
import { excludeZeroAhead, onlyPositiveDigitsInputHandler } from 'src/helpers';
import { useAppDispatch } from 'src/hooks';
import { addPlaceOrder } from 'src/store';
import './SubTotalAmount.scss';

export const SubTotalAmount: FC = () => {
	const [amountState, setAmountState] = useState<string | number>('');
	const dispatch = useAppDispatch();

	return (
		<div className="subtotal__cart__amount">
			<h1 className="subtotal__cart__amount-title">Amount</h1>
			<div className="subtotal__cart__amount-form">
				<div
					style={
						('' + amountState).length ||
							amountState === '0' ||
							typeof amountState === 'undefined'
							? { borderColor: '#ADCA5C' }
							: {}
					}
					className="subtotal__cart__amount-form-input"
				>
					<input
						value={excludeZeroAhead(amountState)}
						onChange={e => setAmountState(e.target.value)}
						className="amount__input"
						type="number"
						onKeyDown={onlyPositiveDigitsInputHandler}
						placeholder="0"
					/>
					<p className="amount__input__max">Max</p>
				</div>

				<button
					disabled={!(Boolean(('' + amountState).length) || amountState === '0')}
					className="subtotal__cart__amount-form-btn"
					style={
						('' + amountState).length ||
							amountState === '0' ||
							typeof amountState === 'undefined'
							? { backgroundColor: '#ADCA5C', color: '#FFFFFF', cursor: 'pointer' }
							: {}
					}
					onClick={() => dispatch(addPlaceOrder(true))}
				>
					{('' + amountState).length ||
						amountState === '0' ||
						typeof amountState === 'undefined'
						? 'Place Order'
						: 'Select Token'}
				</button>
			</div>
		</div>
	);
};
