import { FC } from 'react';
import './EventType.scss';
import { useAppSelector } from 'src/hooks';

interface IProps {
	text: string;
	type: string;
	size?: string;
}

export const EventType: FC<IProps> = ({ text, type, size }) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	return <span className={`tag tag--${size} tag--${themeMode}-${type}`}>{text}</span>;
};
