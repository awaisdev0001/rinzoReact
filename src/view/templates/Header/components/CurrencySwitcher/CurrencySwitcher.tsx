import { useEffect, useState } from 'react';
import { IconEther } from 'src/assets/icons';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { shiftCurrency } from 'src/store';
import './CurrencySwitcher.scss';

export const CurrencySwitcher = () => {
	const { currency } = useAppSelector(state => state.currencyReducer);
	const dispatch = useAppDispatch();

	const [currencyBoolean, setCurrencyTheme] = useState<boolean>(false);

	const changeCurrencyTheme = (arg: boolean) => {
		switch (arg) {
			case true: {
				dispatch(shiftCurrency('eth'));
				break;
			}
			case false: {
				dispatch(shiftCurrency('usd'));
				break;
			}
		}
	};

	useEffect(() => {
		switch (currency) {
			case 'eth': {
				setCurrencyTheme(true);
				break;
			}
			case 'usd': {
				setCurrencyTheme(false);
				break;
			}
		}
	}, [currency]);

	return (
		<div className="currency-switcher">
			<input
				type="checkbox"
				id="currency-switcher"
				checked={currencyBoolean}
				onChange={e => {
					changeCurrencyTheme(e.target.checked);
				}}
			/>
			<label className="currency-switcher__toggle" htmlFor="currency-switcher">
				<span
					className={`currency-switcher__item ${currency === 'eth' && 'currency-switcher__item--active'
						}`}
				>
					<span>
						<IconEther />
					</span>
					ETH
				</span>
				<span
					className={`currency-switcher__item ${currency === 'usd' && 'currency-switcher__item--active'
						}`}
				>
					$ USD
				</span>
			</label>
		</div>
	);
};
