import { useState, useEffect } from 'react';

import { BaseButton, FilterLine, CalendarInput, Loading, EmptyData } from 'src/view/components';
import { Container, InputBase } from '@mui/material';
import { HistoryTable, StatsBlock } from '../components';

import { statsTimeFilter, statsInfo, historyCollumn, historData } from '../data';
import { tTimeFilter } from 'src/typed/types';

import { ProfileGraph } from './ProfileGraph';
import { IconExport } from 'src/assets/icons';
import './ProfileStatistics.scss';

export const ProfileStatistics = () => {
	const [pageData, setPageDate] = useState({
		time: '24h',
		search: '',
		history: {
			order: 'profitability',
			sort: 'asc',
		},
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const [timeFilter, setTimeFilter] = useState<tTimeFilter[]>(statsTimeFilter);

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

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
		if (pageData.search) {
			setError(true);
		} else setError(false);
	}, [pageData.search]);

	return (
		<Container maxWidth="xl" sx={{ padding: 0 }}>

			<div className="profile-stats">
				<div className="profile-stats__info">
					<div className="container">
						<div className="action-line action-line--with-radius">
							<h4 className="action-line__text action-line__text-margin-bottom">
								Main Stats
							</h4>
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
					</div>
					<div className="container container-tablet-padding-empty">
						<div className="profile-stats__info_line">
							{statsInfo.map(el => {
								return (
									<div
										className="profile-stats__info_line-item"
										key={`stats-block-${el.id}`}
									>
										<StatsBlock item={el} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="profile-stats__history">
						<ProfileGraph />
					</div>
				</div>
				<div className="container container-tablet-padding-empty">
					<div className="profile-stats__history">
						<div className="action-line action-line--with-radius">
							<h4 className="action-line__text action-line__text-margin-right ">
								P&L History
							</h4>
							<div className="action-line__search action-line__search--tablet-70 action-line__search-margin-top-10">
								<InputBase
									className="mui-input mui-input--simple"
									placeholder="Search for specific contract or token"
									inputProps={{
										'aria-label': 'Search for specific contract or token',
									}}
									onChange={e => {
										setPageDate(prevState => {
											return {
												...prevState,
												search: e.target.value,
											};
										});
									}}
								/>
							</div>
							<div className="action-line__datepicker">
								<CalendarInput />
							</div>
							<div className="action-line__export">
								<BaseButton
									className="button--icon button--outline button--outline-s button--outline-transparent"
									text="Export as PDF"
									disabled={true}
									icon={<IconExport />}
									onClick={() => {
										console.log('Export');
									}}
								/>
							</div>
						</div>
						<div className="profile-stats__history_table">
							{loading ? (
								<Loading />
							) : error ? (
								<EmptyData />
							) : (
								<HistoryTable
									headerItems={historyCollumn}
									sort={(val: { sort: string; order: string }) =>
										setPageDate(prevState => {
											return {
												...prevState,
												history: { ...val },
											};
										})
									}
									order={pageData.history.order}
									sortName={pageData.history.sort}
									rowsItems={historData}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
