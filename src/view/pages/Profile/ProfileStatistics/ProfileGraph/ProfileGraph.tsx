import { FC, useEffect, useState } from 'react';

import { CalendarInput, FilterLine, LineChart } from 'src/view/components';
import { ProfileGraphButtons } from './ProfileGraphButtons';

import { tTimeFilter } from 'src/typed/types';
import { useWindowSize } from 'src/hooks';
import { profileData, statsTimeFilter } from './data';

import './ProfileGraph.scss';

export const ProfileGraph: FC = () => {
	const [pageData, setPageDate] = useState({
		time: '24h',
	});
	const [timeFilter, setTimeFilter] = useState<tTimeFilter[]>(statsTimeFilter);
	const { width } = useWindowSize();

	const changeFilter = (val: string) => {
		let newTimeFilter = [];
		newTimeFilter = timeFilter.map(el => {
			return {
				...el,
				check: el.val === val,
			};
		});
		setTimeFilter(newTimeFilter);
	};
	useEffect(() => {
		changeFilter(pageData.time);
	}, [pageData.time]);
	return (
		<div className="profile__graph">
			<div className="action-line action-line--with-radius">
				<CalendarInput />
				<div className="action-line__filter">
					<FilterLine
						className="filter-line--xs"
						items={timeFilter}
						changeFilter={(val: string) => {
							setPageDate(prevState => {
								return {
									...prevState,
									time: val,
								};
							});
						}}
					/>
				</div>
			</div>
			<div className="profile__graph__chart">
				{width > 1299 && <ProfileGraphButtons />}
				<div className="profile__graph__chart__container">
					<LineChart chartData={profileData} noPoints={true} />
				</div>
				{width < 1299 && <ProfileGraphButtons />}
			</div>
		</div>
	);
};
