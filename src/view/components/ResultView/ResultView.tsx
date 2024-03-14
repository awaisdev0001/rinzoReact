import { FC, useEffect, useState } from 'react';

import './ResultView.scss';

interface IProps {
	status: string;
	result: number;
	updateTime: number;
	showResults?: boolean;
}

export const ResultView: FC<IProps> = ({ status, result, updateTime, showResults = false }) => {
	const [resultString, updateResultString] = useState('');

	useEffect(() => {
		let string = '';
		string = result === 1 ? `${result} result` : `${result} results`;
		updateResultString(string);
	}, [result]);

	return (
		<div className="update-view">
			<div className={`update-view__status update-view__status--${status}`}>
				<div>
					<span />
					<p className="update-view__status_text">{status === 'live' ? status + ' VIEW' : status}</p>
				</div>
			</div>
			{
				showResults && (
					<div className="update-view__time">
						<p>{resultString}</p>
					</div>
				)
			}
		</div>
	);
};
