import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './BaseButton.scss';
interface IProps {
	text: string;
	disabled?: boolean;
	icon?: ReactNode;
	className: string;
	onClick?: (arg: any) => void;
	href?: string;
}
export const BaseButton: FC<IProps> = ({ text, disabled, icon, className, onClick, href }) => {
	return href !== undefined ? (
		<Link onClick={onClick} className={`button ${className}`} to={href}>
			{text}
			{icon}
		</Link>
	) : (
		<button onClick={onClick} className={`button ${className}`} disabled={disabled}>
			{text}
			{icon}
		</button>
	);
};
