import { createRef, FC, useEffect, useRef, useState } from 'react';
import { LineChart } from '../LineChart';
import { FilterLine } from '../FilterLine';
import { tChartData, tTimeFilter } from 'src/typed/types';
import { useWindowSize } from 'src/hooks';
import { timeFilterInitialState } from '../../pages/HomePage/Top/data';
import { GraphComponentCheckbox } from './GraphComponentCheckbox';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { LegendItem } from 'chart.js';
import './GraphComponent.scss';

interface IProps {
	chartData: tChartData;
}

export const GraphComponent: FC<IProps> = ({ chartData }) => {

	const [pageData, setPageDate] = useState({
		status: 'live',
		result: 29,
		updateTime: 30,
		search: '',
		time: '30m',
		sort: 'volume',
		order: 'desc',
		select: 'volume_high_low',
	});
	const [timeFilter, setTimeFilter] = useState<tTimeFilter[]>(timeFilterInitialState);
	const [chartState, setChartState] = useState<LegendItem[] | undefined>([]);
	const { width } = useWindowSize();
	const chartRef = useRef<ChartJSOrUndefined<'line', number[], string>>();
	const refArray = Array.from(Array(chartData.datasets.length)).map(_ => createRef());
	const inputRef = useRef<any>(refArray);


	const changeFilter = (val: string) => {
		let newTimeFilter = [];
		newTimeFilter = timeFilter.map(el => {
			return {
				...el,
				check: el.val === val,
			};
		});
		setTimeFilter(newTimeFilter);
	};
	useEffect(() => {
		changeFilter(pageData.time);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageData.time]);


	const onCheckboxClickHandler = (e: any) => {
		if (!chartRef.current) return;
		const isDataShown = chartRef.current.isDatasetVisible(e.target.value);


		if (!isDataShown) {
			chartRef.current.show(e.target.value);
		}

		if (isDataShown) {
			chartRef.current.hide(e.target.value);
		}
		if (chartRef?.current?.legend) {
			setChartState(chartRef.current.legend.legendItems);
		}
	};


	return (
		<div className="graph__component">
			<div className="graph__component__section">
				<div className="graph__component__section__checkboxes">
					{chartData.datasets.map((item, index) => (
						<GraphComponentCheckbox
							key={index}
							ref={inputRef.current[index]}
							index={index}
							item={item}
							onCheckboxClickHandler={onCheckboxClickHandler}
							labelsArr={chartState ?? []}
						/>
					))}
				</div>
				{width > 1299 && (
					<div>
						<FilterLine
							items={timeFilter}
							changeFilter={(val: string) => {
								setPageDate(prevState => {
									return {
										...prevState,
										time: val,
									};
								});
							}}
						/>
					</div>
				)}
			</div>
			{width <= 1299 && (
				<div className="graph__component__mobile__timeline">
					<FilterLine
						items={timeFilter}
						changeFilter={(val: string) => {
							setPageDate(prevState => {
								return {
									...prevState,
									time: val,
								};
							});
						}}
					/>
				</div>
			)}
			<LineChart ref={chartRef} chartData={chartData} />
		</div>
	);

};
