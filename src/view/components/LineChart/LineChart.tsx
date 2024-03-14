import { forwardRef } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { options } from './options';
import { plugins } from './plugins';
import { tChartData } from 'src/typed/types';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import './LineChart.scss';
import {CircleIcon} from "../NoneSvgIcons";

interface IProps {
	chartData: tChartData;
	noPoints?: boolean;
}

export const LineChart = forwardRef<ChartJSOrUndefined<'line', number[], string>, IProps>(
	({ chartData, noPoints }, ref) => {
		ChartJS.register(...registerables);

		return (
			<>
				<div className="line__chart">
					<Line ref={ref} options={options} plugins={plugins} data={chartData} />
				</div>
				{!noPoints && (
					<div className="line__chart__checkboxes">
						{chartData.datasets.map((item, index) => {
							return (
								<div key={index} className="line__chart__checkboxes__checkbox">
									<CircleIcon color={item.borderColor} />
									<div className="line__chart__checkboxes__checkbox__choice">
										<input type="checkbox" name={item.label} value={index} />
										<span>{item.label}</span>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</>
		);
	}

);

LineChart.displayName = 'LineChartComponent';
