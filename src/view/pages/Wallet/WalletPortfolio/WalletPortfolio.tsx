import { useState } from 'react';
import { ItemsLayoutSide } from './ItemsLayoutSide';
import { ItemsFilterSide } from './ItemsFilterSide';
import { tFilterSidebarEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';

export const WalletPortfolio = () => {
	const [filterOpen, setFilterOpen] = useState(false);
	const [selectedFilterOptions, setSelectedFilterOptions] = useState<tFilterSidebarEventType>({
    filterSide: {},
    leaderboard: [],
    collectionPage: {}
  });

	const changeFilterOpenOption = (arg: boolean) => {
		setFilterOpen(arg);
	};


	return (
		<>
			<ItemsFilterSide
				changeFilterOpenOption={changeFilterOpenOption}
				openMobile={filterOpen}
				onApply={(e) => setSelectedFilterOptions(e)}
			/>
			<ItemsLayoutSide
				isFilterOpen={filterOpen}
				changeFilterOpenOption={arg => changeFilterOpenOption(arg)}
				selectedFilterOptions={selectedFilterOptions}
			/>
		</>
	);
};
