import { FC } from 'react';
import { tFilterSidebarEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';
import { FilterSide } from 'src/view/components';

interface IProps {
	changeFilterOpenOption: (arg: boolean) => void;
	openMobile: boolean;
	isActivityTab?: boolean;
	isProfileActivity?: boolean;
	onApply?: (e: tFilterSidebarEventType) => void;
}

export const ActivityFilterSide: FC<IProps> = ({
	changeFilterOpenOption,
	openMobile,
	isActivityTab,
	isProfileActivity,
  onApply,
}) => {
	return (
		<>
			<FilterSide
				isActivityTab={isActivityTab}
				isProfileActivity={isProfileActivity}
				changeFilterOpenOption={changeFilterOpenOption}
				openMobile={openMobile}
        		onApply={onApply}
			/>
		</>
	);
};
