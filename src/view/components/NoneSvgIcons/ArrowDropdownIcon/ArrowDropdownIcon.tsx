import { FC } from 'react';
import './ArrowDropdownIcon.scss';

interface IProps {
	color: string;
	padding: string;
	direction: string;
	border?: string;
	isOpen?: boolean;
}

export const ArrowDropdownIcon: FC<IProps> = ({ color, padding, border, isOpen }) => {
	return (
		<div className="arrow__dropdown__icon">
			<i
				className={`arrow__dropdown__icon_link${isOpen ? '-open' : ''}`}
				style={
					border
						? { color: color, padding: padding, borderColor: border }
						: { color: color, padding: padding }
				}
			/>
		</div>
	);
};
