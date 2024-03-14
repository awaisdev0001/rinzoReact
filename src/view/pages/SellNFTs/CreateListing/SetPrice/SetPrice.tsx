import { FC, useEffect, useState } from 'react';

import { InputBase, InputAdornment } from '@mui/material';
import { InputWithOptions } from 'src/view/components';

import { onlyDigitsInputHandler } from 'src/helpers';

import './SetPrice.scss';
interface IProps {
	changeNftPriceCurrency: (args: string) => void;
	changePriceValue: (args: number | string) => void;
}

export const SetPrice: FC<IProps> = ({ changeNftPriceCurrency, changePriceValue }) => {
	const [currency, setCurrency] = useState<string>('eth');
	const [price, setPrice] = useState<string | number>('');
	const [type, setType] = useState<string>('');
	const [percent, setPercent] = useState<number | string>('');

	useEffect(() => {
		const newPrice = (+price / 100) * +percent;
		changePriceValue(percent === 0 ? price : +price + newPrice);
	}, [percent, price]);
	return (
		<div className="set-price">
			<div className="set-price__dafault">
				<button
					className={`set-price__dafault_item ${type === 'floor_price' && 'set-price__dafault_item--active'
						}`}
					onClick={() => {
						setPrice(0);
						setPercent('');
						setType('floor_price');
						changePriceValue('floor_price');
					}}
				>
					to Floor Price
				</button>
				<button
					className={`set-price__dafault_item ${type === 'estimated_price' && 'set-price__dafault_item--active'
						}`}
					onClick={() => {
						setPrice(0);
						setPercent('');
						setType('estimated_price');
						changePriceValue('estimated_price');
					}}
				>
					to Estimated Price
				</button>
			</div>
			<div className="set-price__manually">
				<p className="set-price__manually_item set-price__manually_title">
					Set Price Manually
				</p>
				<div className="set-price__manually_item">
					<InputWithOptions
						items={[
							{ key: 'eth', title: 'ETH' },
							{ key: 'usd', title: 'USD' },
						]}
						selectedValue={currency}
						onClick={key => {
							setCurrency(key);
							changeNftPriceCurrency(key);
						}}
						changePriceValue={key => {
							setPrice(key);
							setType('manually');
							changePriceValue(key);
						}}
						inputValue={price}
						placeholder="0"
					/>
				</div>
			</div>
			<div className="set-price__manually">
				<p className="set-price__manually_item set-price__manually_title">
					Percentage Change, %
				</p>
				<div className="set-price__manually_item">
					<InputBase
						type="number"
						className="mui-input mui-input--icon mui-input--icon-double"
						placeholder="0"
						inputProps={{ 'aria-label': '0' }}
						startAdornment={
							<InputAdornment position="start">
								<button
									onClick={() => {
										setPercent(prevState => {
											return prevState ? +prevState - 5 : -5;
										});
									}}
									className="mui-input--icon-double-icon"
								>
									<span />
								</button>
							</InputAdornment>
						}
						endAdornment={
							<InputAdornment position="end">
								<button
									onClick={() => {
										setPercent(prevState => {
											return prevState ? +prevState + 5 : 5;
										});
									}}
									className="mui-input--icon-double-icon mui-input--icon-double-icon-end"
								>
									<span />
									<span />
								</button>
							</InputAdornment>
						}
						onChange={e => {
							setPercent(+e.target.value || '');
						}}
						value={percent}
						onKeyDown={onlyDigitsInputHandler}
					/>
				</div>
			</div>
		</div>
	);
};
