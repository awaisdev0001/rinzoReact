import { ChangeEvent, FC, useState } from 'react';
import { SubtotalCartPercentageButton } from './SubtotalCartPercentageButton';
import { percentagesArr, tPercentages } from './utils';
import { excludeZeroAhead, onlyPositiveDigitsInputHandler } from 'src/helpers';
import './CheckoutPageSubTotalTipRinzo.scss';

export const CheckoutPageSubTotalTipRinzo: FC = () => {
	const [isSelected, setIsSelected] = useState<tPercentages>('0%');
	const [val, setVal] = useState<string | number>(0);

	const selectPercentage = (percentage: tPercentages) => {
		setIsSelected(percentage);
	};

	return (
		<div className="checkout__page__subtotal__tip__rinzo">
			<h1 className="checkout__page__subtotal__tip__rinzo-title">Tip Rinzo</h1>
			<div className="checkout__page__subtotal__tip__rinzo-percentages">
				<div className="checkout__page__subtotal__tip__rinzo-percentages-left">
					{percentagesArr.map((item, index) => (
						<SubtotalCartPercentageButton
							key={item + '' + index}
							selectPercentage={selectPercentage}
							isActive={isSelected}
						>
							{item}
						</SubtotalCartPercentageButton>
					))}
					<div className="checkout__page__subtotal__short">
						<p className="checkout__page__subtotal__short-par">Your %</p>
						<input
							type="number"
							// placeholder="0"
							className="checkout__page__subtotal__short-input"
							onKeyDown={onlyPositiveDigitsInputHandler}
							value={excludeZeroAhead(val) || ''}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
