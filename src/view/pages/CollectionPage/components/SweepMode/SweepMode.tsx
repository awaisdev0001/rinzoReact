import { FC, useState, useEffect, useCallback, ChangeEvent, useRef, useMemo } from 'react';
import { CloseButton, FilterLine, RangeSlider } from 'src/view/components';
import { InputBase, InputAdornment } from '@mui/material';
import { tCollectionItem, tTimeFilter } from 'src/typed/types';

import { IconEther } from 'src/assets/icons';
import { useAppDispatch, useAppSelector, useDebounce } from 'src/hooks';
import {
	tCollectionReducer,
	rangeSelectOfCards,
	changeSweepCart,
	removeAllItemsOfCollections,
} from 'src/store';

import './SweepMode.scss';
import { BigNumber } from 'ethers';
import { toLocaleUS } from 'src/helpers';
interface IProps {
	items: tTimeFilter[];
	filterPosition: string;
	changeFilter: (arg: string) => void;
}
export const SweepMode: FC<IProps> = ({ items, changeFilter, filterPosition }) => {
	const [rangeValue, setRangeValue] = useState<number>(0);
	const { totalAmountOfCards, arrayOfCards, selectedCards } = useAppSelector<tCollectionReducer>(
		state => state.collectionReducer
	);
	const [sweepValue, setSweepValue] = useState<{ title: string; prefix: string }>({
		title: 'Enter number of Items to sweep the floor',
		prefix: 'items',
	});
	const tempRef = useRef(0);

	const dispatch = useAppDispatch();
	const debouncedValue = useDebounce<number>(rangeValue, 500);

	const sumPrice = useMemo(() => {
		let sum = 0;
		selectedCards.forEach(c => sum += +c.priceETH);
		return sum;
	}, [selectedCards.length]);

	useEffect(() => {
		if (filterPosition === "items") {
			setRangeValue(selectedCards.length);
		}
	}, [selectedCards.length, filterPosition]);

	const selectCards = useCallback((range: number) => {
		let clonedData: tCollectionItem[] = [...arrayOfCards];
		const now = new Date();
		if (filterPosition === "items") {
			tempRef.current = range > clonedData.length ? clonedData.length : range;
			setRangeValue(tempRef.current);

			for (let i = 0; i < clonedData.length; i++) {
				// clonedData[i].checked = (i < tempRef.current && (new Date(clonedData[i].expiry)).getTime() > now.getTime());
				clonedData[i].checked = (i < tempRef.current);
			}
		}
		else if (filterPosition === "eth") {
			setRangeValue(range);
			let sum = 0;
			for (let i = 0; i < clonedData.length; i++) {
				// if (range > 0 && sum + (+clonedData[i].priceETH) <= range && (new Date(clonedData[i].expiry)).getTime() > now.getTime())
				if (range > 0 && sum + (+clonedData[i].priceETH) <= range)
				{
					clonedData[i].checked = true;
					sum += +clonedData[i].priceETH;
				} else {
					clonedData[i].checked = false;
				}
			}
		}
		else if (filterPosition === "floor") {
			setRangeValue(range);
			for (let i = 0; i < clonedData.length; i++) {
				// clonedData[i].checked = (clonedData[i].priceETH >= range && (new Date(clonedData[i].expiry)).getTime() > now.getTime());
				clonedData[i].checked = (clonedData[i].priceETH >= range);
			}
		}

		clonedData.length === 0 ? dispatch(removeAllItemsOfCollections()) : dispatch(rangeSelectOfCards(clonedData));
	}, [filterPosition]);

	// const onRangeChangeHandler = useCallback(
	// 	(range: number, side: string) => {
	// 		setRangeValue(range);
	// 		const clonedData = [...arrayOfCards];

	// 		if (side === 'right') {
	// 			for (let i = 0; i <= rangeValue; i++) {
	// 				clonedData[i].checked = true;
	// 				dispatch(rangeSelectOfCards(clonedData));
	// 			}
	// 		} else if (side === 'left') {
	// 			for (let i = 0; i <= rangeValue; i++) {
	// 				clonedData[range].checked = false;
	// 				dispatch(rangeSelectOfCards(clonedData));
	// 			}
	// 		}
	// 	},
	// 	[rangeValue]
	// );

	const onRangeChangeHandler = (range: number, side: string) => selectCards(range);
	const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => selectCards(+e.target.value);

	useEffect(() => {
		let sweepValue = {
			title: 'Enter number of Items to sweep the floor',
			prefix: 'Items',
		};
		switch (filterPosition) {
			case 'items': {
				sweepValue = {
					title: 'Enter number of Items to sweep the floor',
					prefix: 'items',
				};
				break;
			}
			case 'eth': {
				sweepValue = {
					title: 'Total Order Value',
					prefix: 'ETH',
				};
				break;
			}
			case 'floor': {
				sweepValue = {
					title: 'Till what the price of floor you want to sweep',
					prefix: 'ETH',
				};
				break;
			}
			default: {
				sweepValue = {
					title: 'Till what the price of floor you want to sweep',
					prefix: 'ETH',
				};
				break;
			}
		}
		setSweepValue(sweepValue);
		selectCards(0);
	}, [filterPosition]);

	// const inputValueHandler = () => {
	// 	if (sweepValue.prefix === 'ETH') return 95.4;
	// 	return ('' + rangeValue).replace(/^0+/, '');
	// };

	return (
		<div className="sweep-mode">
			<div className="sweep-mode__header">
				<h4>
					Sweep
					<span className="sweep-mode__header-close">
						<CloseButton
							onClick={() => {
								dispatch(changeSweepCart(false));
							}}
						/>
					</span>
				</h4>
				<FilterLine
					className="filter-line--s"
					items={items}
					changeFilter={(val: string) => {
						changeFilter(val);
					}}
				/>
			</div>
			<div className="range-overlay">
				<p className="range-overlay__title">{sweepValue.title}</p>
				<div className="range-overlay__input">
					<InputBase
						type="number"
						className="mui-input mui-input--simple-s mui-input--icon mui-input--icon-m"
						placeholder=""
						inputProps={{
							'aria-label': '',
						}}
						value={rangeValue}
						onChangeCapture={onInputChangeHandler}
						endAdornment={
							<InputAdornment className="mui-input-prefix" position="end">
								<span>{sweepValue.prefix}</span>
							</InputAdornment>
						}
					/>
				</div>
				<RangeSlider
					rangeType="simple"
					maxVal={filterPosition === "items" ? arrayOfCards.length : 2000}
					onRangeSimpleChangeHandler={onRangeChangeHandler}
					simpleSliderValue={rangeValue}
				/>
				<p className="range-overlay__floor">
					Total price
					<span className="range-overlay__floor-icon">
						<IconEther />
					</span>
					<span className="range-overlay__floor-counter">{toLocaleUS(sumPrice)}</span>
				</p>
			</div>
		</div>
	);
};
