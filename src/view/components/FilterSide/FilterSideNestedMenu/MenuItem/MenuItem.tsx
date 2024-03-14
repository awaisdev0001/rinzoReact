import './MenuItem.scss';
import { FC } from 'react';
import { tMenuItem } from 'src/typed/types';
import { MultiLevel } from '../MultiLevel';
import { tFilterMultiSingleLevelEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';

type tProps = tMenuItem & {
	onChange?: (multiChecked: tFilterMultiSingleLevelEventType) => void
};

export const MenuItem: FC<tProps> = ({
	title,
	items,
	hasRange,
	rangeColor,
	hasHoverIcon,
	hoverText,
	hasSearch,
	id: value,
	range,
	onChange
}) => {
	return (
		<div className="filter__menu__item">
			<MultiLevel
				title={title}
				id={value}
				items={items}
				hasRange={hasRange}
				rangeColor={rangeColor}
				hasHoverIcon={hasHoverIcon}
				hoverText={hoverText}
				hasSearch={hasSearch}
				range={range}
				onChange={onChange}
			/>
		</div>
	);
};
