import { FC, useState } from 'react';
import { AnalyticsTab } from './AnalyticsTab';
import { tSelectedTab } from './types';
import { tabsArr } from './data';
import './AnalyticsTabs.scss';

export const AnalyticsTabs: FC = () => {
	const [selected, setSelected] = useState<tSelectedTab>(0);
	const selectTabHandler = (num: tSelectedTab) => setSelected(num);

	return (
		<div className="analytics__tabs">
			{tabsArr.map((item, index) => {
				return (
					<AnalyticsTab
						selectTabHandler={selectTabHandler}
						key={index}
						selectedKey={index as tSelectedTab}
						tab={item.name}
						selected={selected}
					/>
				);
			})}
		</div>
	);
};
