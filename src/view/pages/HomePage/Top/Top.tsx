import { useEffect, useState } from 'react';
import { Container, InputBase } from '@mui/material';

import { ResultView, ViewToggle, FilterLine, BaseSelect, Loading, EmptyData } from 'src/view/components';
import { TopTable } from './TopTable';
import { TopCardsCollections } from './TopCardsCollections';

import { tTimeFilter } from 'src/typed/types';
import { timeFilterInitialState, rows, collumn, historyData, selectData } from './data';

import "./Top.scss";

export const Top = () => {
	const [pageData, setPageDate] = useState({
		status: 'live',
		result: 29,
		updateTime: 30,
		search: '',
		time: '30m',
		sort: 'volume',
		order: 'desc',
		select: 'volume_high_low',
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const [view, setView] = useState('list');
	const [timeFilter, setTimeFilter] = useState<tTimeFilter[]>(timeFilterInitialState);

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

	// this is for UI view only
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
		<div className="top-container">
			<Container maxWidth="xl" sx={{ padding: 0 }}>
				<div className="container container-tablet-padding-empty">
					<div className="action-line">
						<div className="action-line__result">
							<ResultView {...pageData} />
						</div>
						<div className="action-line__search">
							<InputBase
								className="mui-input mui-input--simple"
								placeholder="Search by name or address"
								inputProps={{ 'aria-label': 'Search by name or address' }}
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
						<div
							className={`action-line__select ${view === 'list' && 'action-line__select-hidden'
								} action-line__select--full-width`}
						>
							<BaseSelect
								items={selectData}
								selectedValue={pageData.select}
								onClick={(key) => {
									setPageDate(prevState => {
										return {
											...prevState,
											select: key,
										};
									});
								}}
							/>
						</div>
						<div className="action-line__filter-mobile">
							<BaseSelect items={timeFilter} selectedValue={pageData.time}
								onClick={val => {
									setPageDate(prevState => {
										return {
											...prevState,
											time: val,
										};
									});
								}} isForTime />
						</div>
						<div className="action-line__filter action-line__filter-mobile-margin">
							<FilterLine
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
						<div className="action-line__view">
							<ViewToggle
								type={view}
								changeView={val => {
									setView(val);
								}}
							/>
						</div>
					</div>
					{loading ? (
						<Loading />
					) : error ? (
						<EmptyData />
					) : view === 'list' ? (
						<TopTable
							headerItems={collumn}
							sort={(val: { sort: string; order: string }) =>
								setPageDate(prevState => {
									return {
										...prevState,
										...val,
									};
								})
							}
							order={pageData.order}
							sortName={pageData.sort}
							rowsItems={rows}
							historyData={historyData}
						/>
					) : (
						<TopCardsCollections />
					)}
				</div>
			</Container>
		</div>
	);
};
