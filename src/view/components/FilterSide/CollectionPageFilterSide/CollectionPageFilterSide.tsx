import { FC, Fragment, useState } from 'react';
import { BaseDivLine } from '../../BaseDivLine';
import { MenuItem } from '../FilterSideNestedMenu/MenuItem';
import { tMenuItem } from 'src/typed/types';
import { tFilterMultiSingleLevelEventType, tFilterSideNestedEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';

interface IProps {
	menu?: tMenuItem[];
	isItems?: boolean;
  onChange?: (multiChecked: tFilterSideNestedEventType) => void;
}

export const CollectionPageFilterSide: FC<IProps> = ({ menu, isItems = false, onChange }) => {
	const [filterState, setFilterState] = useState<tFilterSideNestedEventType>({});

	const handleChecked = (title: string, multiChecked: tFilterMultiSingleLevelEventType) => {
    const newValue = {...filterState, [title]: multiChecked};
    setFilterState(newValue);
    onChange && onChange(newValue);
  };

	return (
		<>
			{menu?.filter((item) => !isItems || !!item.isItems).map((item, index) => (
				<Fragment key={index}>
					<BaseDivLine />
					<MenuItem
						title={item.title}
						id={item.id}
						items={item.items}
						key={index}
						hasRange={item?.hasRange}
						hasSearch={item?.hasSearch}
						rangeColor={item.rangeColor}
						hasHoverIcon={item.hasHoverIcon}
						hoverText={item.hoverText}
						range={item.range}
						onChange={(multiChecked) => handleChecked(item.id, multiChecked)}
					/>
				</Fragment>
			))}
		</>
	);

};
