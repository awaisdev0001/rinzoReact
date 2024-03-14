import { FC, useState } from 'react';
import { tSelectedTab } from '../types';
import './AnalyticsTab.scss';

interface IProps {
	tab: string;
	selectTabHandler: (arg: tSelectedTab) => void;
	selectedKey: tSelectedTab;
	selected: tSelectedTab;
}

export const AnalyticsTab: FC<IProps> = ({ tab, selectTabHandler, selectedKey, selected }) => {
	const clickTabHandler = () => {
		selectTabHandler(selectedKey);
	};

	return (
		<p
			onClick={clickTabHandler}
			className={selectedKey === selected ? 'analytics__tab--active' : 'analytics__tab'}
		>
			{selectedKey === selected ? '+ Active Tab' : tab}
		</p>
	);
};
