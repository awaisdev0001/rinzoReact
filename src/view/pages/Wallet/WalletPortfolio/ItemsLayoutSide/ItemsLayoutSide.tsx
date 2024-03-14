import { FC, useState, useEffect } from 'react';
import { Container, InputBase } from '@mui/material';
import { BaseSelect, Loading, EmptyData } from 'src/view/components';
import { FilterButton } from 'src/view/components';
import { selectData } from '../../data';
import { ItemsLayoutCards } from './ItemsLayoutCards';
import { tFilterSidebarEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';

interface IProps {
	isFilterOpen: boolean;
	changeFilterOpenOption: (arg: boolean) => void;
  selectedFilterOptions: tFilterSidebarEventType;
}
export const ItemsLayoutSide: FC<IProps> = ({ isFilterOpen, changeFilterOpenOption, selectedFilterOptions }) => {
	const [pageData, setPageDate] = useState({
		status: 'live',
		result: 29,
		updateTime: 30,
		search: '',
		select: 'recently_acquired',
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

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

			<div className={`container container-filter ${isFilterOpen && 'container-filter--open'}`}>
				<div className="action-line">
					{/* <div className="action-line__result action-line__result--fullwidth">
						<ResultView {...pageData} />
					</div> */}
					<div className="action-line__search action-line__search--flexible">
						<InputBase
							className="mui-input mui-input--simple mui-input--simple-flexible"
							placeholder="Search NFTs by name, token ID"
							inputProps={{
								'aria-label': 'Search NFTs by name, token ID',
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
					<div className="action-line__select action-line__select--mobile-70 action-line__select--margin-top">
						<BaseSelect
							items={selectData}
							selectedValue={pageData.select}
							onClick={key => {
								setPageDate(prevState => {
									return {
										...prevState,
										select: key,
									};
								});
							}}
						/>
					</div>
					<div className="action-line__filter-button  action-line__filter-button--mobile-30">
						<FilterButton
							onClick={() => {
								changeFilterOpenOption(true);
							}}
						/>
					</div>
				</div>
				{loading ? <Loading /> : error ? <EmptyData /> : <ItemsLayoutCards selectedFilterOptions={selectedFilterOptions} pageFilterOptions={pageData} />}
			</div>
		</Container>
	);
};
