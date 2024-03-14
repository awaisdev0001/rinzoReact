import { useState } from 'react';
import { SweepsFilterSide } from './SweepsFilterSide';
import { SweepsLayoutSide } from './SweepsLayoutSide';

export const Sweeps = () => {
	const [filterOpen, setChangeFilterOpenOption] = useState<boolean>(false);
	const changeFilterOpenOption = (arg: boolean) => {
		setChangeFilterOpenOption(arg);
	};
	return (
		<div className="app__content_body">
			<SweepsLayoutSide
				isFilterOpen={filterOpen}
				changeFilterOpenOption={arg => changeFilterOpenOption(arg)}
			/>
		</div>
	);
};
