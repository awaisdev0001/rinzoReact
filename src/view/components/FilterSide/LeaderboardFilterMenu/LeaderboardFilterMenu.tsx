import { FC, useState } from 'react';
import { buttonsArr, tActivityFilterButtons } from './data';
import { useAppSelector } from 'src/hooks';
import './LeaderboardFilterMenu.scss';

interface IProps {
	isProfileActivity?: boolean;
	onChange?: (selected: tActivityFilterButtons[]) => void
}

export const LeaderboardFilterMenu: FC<IProps> = ({ isProfileActivity, onChange }) => {
	const [selectedFilter, setSelectedFilter] = useState<Record<tActivityFilterButtons, boolean>>({} as Record<tActivityFilterButtons, boolean>);
	const { themeMode } = useAppSelector(state => state.themeReducer);

	const onClick = (button: tActivityFilterButtons) => {
		const newFilter = {...selectedFilter, [button]: !selectedFilter[button]};
		setSelectedFilter(newFilter);

		const arr = Object.keys(newFilter).filter(k => newFilter[k as tActivityFilterButtons]) as tActivityFilterButtons[];
		onChange && onChange(arr);
	};

	return (
		<div className="leaderboard__filter">
			<h2 className="leaderboard__filter_title">Event Type</h2>
			<div className="leaderboard__filter_buttons">
				{buttonsArr.map((item, index) => {
					// if (isProfileActivity && item.buttonType === 'mint') return null;
					return (
						<button
							key={item.buttonTitle + '' + index}
							className={` ${themeMode} ${selectedFilter[item.buttonType]
									? 'leaderboard__filter_buttons-btn-selected'
									: 'leaderboard__filter_buttons-btn-notselected'
								}`}
							onClick={() => onClick(item.buttonType)}
						>
							{item.buttonIcon}
							<span className="leaderboard__filter_buttons-btn-span">
								{item.buttonTitle}
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};
