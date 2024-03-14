import { FC } from 'react';
import { ProgressRing } from 'src/view/components';
import {
	DrogonFlyIcon,
	FlowerIcon,
	PolarBearIcon,
	SamuraiIcon,
	RabbitIcon,
	DoveIcon,
	ShellIcon,
	DogIcon,
} from 'src/assets/icons';
import { tTrophy } from '../../types';
import './Trophy.scss';

interface IProps {
	trophy: tTrophy;
	className?: string;
}

export const Trophy: FC<IProps> = ({ trophy, className }) => {
	const { name, type, progress } = trophy;

	const iconChoice = (type: string) => {
		switch (type) {
			case 'blue_ronin': {
				return <SamuraiIcon />;
			}
			case 'best_sell': {
				return <FlowerIcon />;
			}
			case 'lowest_percent_deal': {
				return <PolarBearIcon />;
			}
			case 'fastest_purchase_offer': {
				return <DrogonFlyIcon />;
			}
			case 'rabbit': {
				return <RabbitIcon />;
			}
			case 'dove': {
				return <DoveIcon />;
			}
			case 'shell': {
				return <ShellIcon />;
			}
			case 'dog': {
				return <DogIcon />;
			}
		}
	};

	return (
		<div className={`trophy ${className}`}>
			{progress ? (
				<span className="trophy__border">
					<ProgressRing radius={41} stroke={2} progress={progress} color="green" />
				</span>
			) : (
				false
			)}
			<div className={`trophy__img trophy__img--${type}`}>{iconChoice(type)}</div>
			{name && <p className="trophy__name">{name}</p>}
		</div>
	);
};
