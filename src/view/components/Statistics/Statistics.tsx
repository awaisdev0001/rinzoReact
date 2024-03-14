import { FC } from 'react';

import { IconArrowTopEmptyLong, IconEther } from 'src/assets/icons';
import { FilterLine } from 'src/view/components';

import { tTimeFilter, tStatistics } from 'src/typed/types';

import './Statistics.scss';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	statistics: tStatistics[];
	timeFilter: tTimeFilter[];
	changeFilter: (arg: { time: string }) => void;
	type: 'light' | 'dark';
}

export const Statistics: FC<IProps> = ({ statistics, timeFilter, changeFilter, type }) => {
	return (
		<div className="statistics">
			<div className={`statistics__filters statistics__filters--${type}`}>
				<FilterLine
					className={`${type}`}
					items={timeFilter}
					changeFilter={(val: string) => {
						changeFilter({ time: val });
					}}
				/>
			</div>
			<div className={`statistics__content statistics__content--${type}`}>
				{statistics.map(el => {
					return (
						<div
							className={`statistics__content_item statistics__content_item--${type}`}
							key={`statistics__content_item-${el.title}`}
						>
							<p className="statistics__content_item-title">{el.title}</p>
							<p
								className={`statistics__content_item-info statistics__content_item-info--${el.duration ? 'up' : 'down'
									}`}
							>
								{el.eth && (
									<span className="statistics__content_item-info-eth">
										<IconEther className={type} />
									</span>
								)}
								{el.count}
								{el.arrow && (
									<span className="statistics__content_item-info-arrow">
										<IconArrowTopEmptyLong />
									</span>
								)}
								{el.percent && (
									<span className="statistics__content_item-info-percent">
										{el.percent}
									</span>
								)}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
