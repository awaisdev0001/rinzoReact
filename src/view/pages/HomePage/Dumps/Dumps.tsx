import { useState } from 'react';
import { DumpsFilterSide } from './DumpsFilterSide';
import { DumpsLayoutSide } from './DumpsLayoutSide';

export const Dumps = () => {
	const [filterOpen, setChangeFilterOpenOption] = useState<boolean>(false);
	const changeFilterOpenOption = (arg: boolean) => {
		setChangeFilterOpenOption(arg);
	};
	return (
		<div className="app__content_body">
			<DumpsLayoutSide
				isFilterOpen={filterOpen}
				changeFilterOpenOption={arg => changeFilterOpenOption(arg)}
			/>
		</div>
	);
};
