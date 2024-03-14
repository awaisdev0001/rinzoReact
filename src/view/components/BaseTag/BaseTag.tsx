import { FC } from 'react';
import './BaseTag.scss';
interface IProps {
	title: string;
	type: string;
	onClick: (args: string) => any | void;
}
export const BaseTag: FC<IProps> = ({ title, type, onClick }) => {
	return (
		<button
			className="base-tag"
			onClick={() => {
				onClick(type);
			}}
		>
			{title}
		</button>
	);
};
