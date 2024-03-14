import { FC, useEffect, useState } from 'react';
import { RangeSlider } from '../../../../index';
import { excludeZeroAhead } from 'src/helpers';
import './SliderAndInputs.scss';

interface IProps {
	rangeColor?: string;
	onChange?: (e: number[]) => void;
	range?: number[];
	rangeValue?: number[];
}

export const SliderAndInputs: FC<IProps> = ({ rangeColor, onChange, range, rangeValue: initialRangeValue }) => {
	const [rangeValue, setRangeValue] = useState<number[]>(initialRangeValue ?? range ?? [0, 0]);
	// const [error, setError] = useState(false);
	const onRangeChangeHandler = (rangeArr: number[]) => {
		setRangeValue(rangeArr);
	};

	useEffect(() => {
		// if (rangeValue[0] > rangeValue[1]) {
		// 	setError(true);

		// 	setTimeout(() => {
		// 		setError(false);
		// 		setRangeValue(rangeValue ?? [0, 0]);
		// 	}, 2500);
		// }
		onChange && onChange(rangeValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rangeValue[0], rangeValue[1]]);

	return (
		<>
			<div className="multiLevel__collapse__wrap">
				<input
					type="number"
					// value={('' + rangeValue[0]).replace(/^0+/, '')}
					// value={excludeZeroAhead('' + rangeValue[0])}
					value={rangeValue[0]}
					className="multiLevel__collapse__wrap-input"
					onChange={event =>
						setRangeValue(prevState => {
							return [Number(event.target.value), prevState[1]];
						})
					}
				/>
				<input
					type="number"
					// value={('' + rangeValue[1]).replace(/^0+/, '')}
					value={rangeValue[1]}
					className="multiLevel__collapse__wrap-input"
					onChange={event =>
						setRangeValue(prevState => {
							return [prevState[0], Number(event.target.value)];
						})
					}
				/>
				<button
					onClick={() => {
						// setRangeValue(rangeValue.map(item => +item));
						onChange && onChange(rangeValue);
					}}
					className="multiLevel__collapse__wrap-btn"
				>
					OK
				</button>
			</div>
			{/* {error && (
				<p className="input__range__error">The maximum must be greater than the minimum.</p>
			)} */}

			<div className="multiLevel__collapse__range__slider">
				<RangeSlider
					initValChange={rangeValue}
					onRangeChangeHandler={onRangeChangeHandler}
					rangeColor={rangeColor}
					minVal={range?.[0] ?? 0}
					maxVal={range?.[1] ?? 0}
				/>
			</div>
		</>
	);
};
