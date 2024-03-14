import { FC } from 'react';
import { IconEther, IconGreenArrowUp } from 'src/assets/icons';
import { CircleIcon } from 'src/view/components';
import './AnalyticsBlock.scss';

interface IProps {
	blockTitle: string;
	up: boolean;
	price: string;
	mainDesc: string;
	percentage: string;
}

export const AnalyticsBlock: FC<IProps> = ({ blockTitle, up, percentage, price, mainDesc }) => {
	return (
		<div className="analytics__block">
			<h1 className="analytics__block__title">{blockTitle}</h1>
			<h2 className="analytics__block__price">
				<IconEther />
				<span>{price}</span>
			</h2>
			<span className="analytics__block__desc">
				<IconGreenArrowUp />
				<span className="analytics__block__desc__percent">{percentage}</span>
				<CircleIcon />
				<span className="analytics__block__desc__text">was {mainDesc} last day</span>
			</span>
		</div>
	);
};
