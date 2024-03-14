import { FC, useEffect } from 'react';
import { useState } from 'react';

import { IconFilter } from 'src/assets/icons';
import { tMenuItem } from 'src/typed/types';
import { FilterSideNestedMenu } from './FilterSideNestedMenu';
import { CloseButton } from '../buttons';
import { LeaderboardFilterMenu } from './LeaderboardFilterMenu';

import { CollectionPageFilterSide } from './CollectionPageFilterSide';
import { Button } from '@mui/material';

import { useAppSelector } from 'src/hooks';

import './FilterSide.scss';
import { tFilterSidebarEventType, tFilterSideNestedEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';
import { tActivityFilterButtons } from './LeaderboardFilterMenu/data';
import { set } from 'lodash';

interface IProps {
	changeFilterOpenOption: (arg: boolean) => void;
	isActivityTab?: boolean;
	isCollectionPage?: boolean;
	openMobile: boolean;
	isNestedMenu?: boolean;
	data?: tMenuItem[];
	isProfileActivity?: boolean;
	isItems?: boolean;
	onChange?: (e: tFilterSidebarEventType) => void;
	onApply?: (e: tFilterSidebarEventType) => void;
}

export const FilterSide: FC<IProps> = ({
	changeFilterOpenOption,
	isActivityTab,
	openMobile,
	isCollectionPage,
	isNestedMenu,
	isProfileActivity,
	data,
	onChange,
	onApply,
	isItems = false,

}) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const [open, setOpen] = useState<boolean>(true);
	useEffect(() => {
		changeFilterOpenOption(open);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	useEffect(() => {
		setOpen(openMobile);
	}, [openMobile]);

	useEffect(()=>{
		setOpen(true)
	},[])

	const [filterState, setFilterState] = useState<tFilterSidebarEventType>({
    filterSide: {},
    leaderboard: [],
    collectionPage: {},
  });

	const handleFilterSideNestedMenu = (multiChecked: tFilterSideNestedEventType) => {
		const newValue = {...filterState, filterSide: multiChecked};
		setFilterState(newValue);
		onChange && onChange(newValue);
	};

	const handleLeaderboardFilter = (selected: tActivityFilterButtons[]) => {
		const newValue = {...filterState, leaderboard: selected};
		setFilterState(newValue);
		onChange && onChange(newValue);
	};

	const handleCollectionPageFilterSide = (multiChecked: tFilterSideNestedEventType) => {
		const newValue = {...filterState, collectionPage: multiChecked};
		setFilterState(newValue);
		onChange && onChange(newValue);
	};

	const filterNestedMenuHandler = () => {
		if (isActivityTab) return <LeaderboardFilterMenu isProfileActivity={isProfileActivity} onChange={handleLeaderboardFilter} />;
		if (isCollectionPage) return <CollectionPageFilterSide menu={data} isItems={isItems} onChange={handleCollectionPageFilterSide} />;
		return <FilterSideNestedMenu nestedMenu={data} onChange={handleFilterSideNestedMenu} />;
	};

	const apply = () => {
		onApply && onApply(filterState);
	};
	const cancel = () => {
		alert('cancel');
	};

	return (
		<div className={`filter filter--${open ? 'show' : 'hide'}`}>
			<div className={`filter__sidebar filter__sidebar--${themeMode}`}>
				<div className="filter__sidebar_top">
					<div className="filter__sidebar__filterSec">
						{open ? (
							<>
								<div className="filter__sidebar__filterSec-icon">
									<IconFilter />
									<h3 className="filter__sidebar__filterSec-icon-title">
										Filter
									</h3>
								</div>
								<CloseButton onClick={() => setOpen(false)} />
							</>
						) : (
							<button
								onClick={() => setOpen(true)}
								className="filter__sidebar__filterBtn"
							>
								<IconFilter />
								<span className="filter__sidebar__filterBtn-span">Filter</span>
							</button>
						)}
					</div>
					{open && (
						<div className="filter__sidebar__scroll-content">
							{filterNestedMenuHandler()}
						</div>
					)}
				</div>
				{open && (
					<div className="filter__sidebar_bottom" >
						<Button
							className="mui-button mui-button--m mui-button--contained mui-button--contained-green"
							onClick={apply}
						>
							Apply
						</Button>
						<Button
							className="mui-button mui-button--m mui-button--outline mui-button--outline-green"
							onClick={cancel}
						>
							Cancel
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};
