import { FC } from 'react';

import { IconEther } from 'src/assets/icons';
import { tStats } from '../../types';

import './StatsBlock.scss';

interface IProps {
	item: tStats;
}

export const StatsBlock: FC<IProps> = ({ item }) => {
	return (
		<div className="stats-info">
			<p className="stats-info__title">{item.title}</p>
			<h6 className="stats-info__count">
				{item.amount ? (
					item.amount
				) : (
					<>
						<span className="stats-info__count_icon">
							<IconEther />
						</span>
						{item.price}
					</>
				)}
			</h6>
		</div>
	);
};
