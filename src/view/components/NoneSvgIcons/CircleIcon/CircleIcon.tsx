import { FC } from 'react';
import './CircleIcon.scss';

interface IProps {
	color?: string;
}

export const CircleIcon: FC<IProps> = ({ color }) => {
	return (
		<div
			style={color ? { backgroundColor: color, width: 7, height: 7 } : {}}
			className="circle__icon"
		/>
	);
};
