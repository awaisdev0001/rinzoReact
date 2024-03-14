import { FC, useRef } from 'react';
import { useCountdown } from 'src/hooks';

interface IProps {
	date: string;
}

export const TimeLeft: FC<IProps> = ({ date }) => {
	const dayRef = useRef(new Date(date));
	const [weeks, days, hours, minutes, seconds] = useCountdown(
		dayRef.current.setDate(dayRef.current.getDate())
	);
	return (
		<div className="table__row_content-cell">
			<p className="bold">{`${weeks}w : ${days}d : ${hours}h : ${seconds}s`}</p>
			<span className="subtitle" style={{ margin: '2px 0px 0px' }}>
				{date}
			</span>
		</div>
	);
};
