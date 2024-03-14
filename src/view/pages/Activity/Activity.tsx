import { FC, useState } from 'react';
import { ActivityFilterSide } from './ActivityFilterSide';
import { ActivityLayoutSide } from './ActivityLayoutSide';
import { tAdditionData, tActivityRow } from 'src/typed/types';
import { isFilterCollection } from 'src/store';
import { useAppDispatch } from 'src/hooks';
import { tFilterSidebarEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';
import { tActivitiesResult } from 'src/typed/requests/activities/tActivities';

interface IProps {
	rows: tActivitiesResult[];
	additionData: tAdditionData[] | [];
	isProfileActivity?: boolean;
	onApply?: (e: tFilterSidebarEventType) => void;
  fetchItems?: (page: number, componentId:string) => void;
  apiLoading?: boolean;
  page?: number;
	hasNextPage?: boolean;
	
}

export const Activity: FC<IProps> = ({
  rows,
  additionData,
  isProfileActivity,
  onApply,
  fetchItems,
  apiLoading,
  page,
  hasNextPage,
}) => {
	const [filterOpen, setChangeFilterOpenOption] = useState<boolean>(false);
	const changeFilterOpenOption = (arg: boolean) => {
		setChangeFilterOpenOption(arg);
	};

	// const dispatch = useAppDispatch();
	// dispatch(isFilterCollection(filterOpen));
	
	return (
		<div className="app__content_body">
			<ActivityFilterSide
				changeFilterOpenOption={arg => changeFilterOpenOption(arg)}
				openMobile={filterOpen}
				isActivityTab
				isProfileActivity={isProfileActivity}
				onApply={onApply}
			/>
			<ActivityLayoutSide
				isFilterOpen={filterOpen}
				changeFilterOpenOption={arg => changeFilterOpenOption(arg)}
				rows={rows}
				additionData={additionData}
				fetchItems={fetchItems}
				apiLoading={apiLoading}
				page={page}
				hasNextPage={hasNextPage}
			/>
		</div>
	);
};
