import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconArrowLongLeft } from 'src/assets/icons';

import './BackButton.scss';
interface IProps {
	defaultClick?: boolean;
	customClickAction?: (val?: MouseEvent) => void;
}
export const BackButton: FC<IProps> = ({ customClickAction, defaultClick = true }) => {
	const history = useNavigate();

	const backToPage = () => {
		history(-1);
	};
	return (
		<button
			className="button-back"
			onClick={() => {
				return defaultClick ? backToPage() : customClickAction ? customClickAction() : () => { };
			}}
		>
			<IconArrowLongLeft />
		</button>
	);
};
