import { FC } from 'react';
import './ProgressRing.scss';

interface IProps {
	radius: number;
	stroke: number;
	progress: number;
	color: string;
}

export const ProgressRing: FC<IProps> = ({ radius, stroke, progress, color }) => {
	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;

	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<svg height={radius * 2} width={radius * 2}>
			<circle
				className={`proggress-circle proggress-circle--${color}`}
				strokeWidth={stroke}
				strokeDasharray={circumference + ' ' + circumference}
				style={{ strokeDashoffset }}
				r={radius}
				cx={radius}
				cy={radius}
			/>
		</svg>
	);
};
