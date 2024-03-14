import { FC, Fragment, useState } from 'react';
import { BaseDivLine } from '../../index';
import { MenuItem } from './MenuItem';
import { tMenuItem } from 'src/typed/types';
import { tFilterMultiSingleLevelEventType, tFilterSideNestedEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';

interface IProps {
	nestedMenu?: tMenuItem[];
  onChange?: (multiChecked: tFilterSideNestedEventType) => void;
}

export const FilterSideNestedMenu: FC<IProps> = ({ nestedMenu, onChange }) => {
  const [filterState, setFilterState] = useState<tFilterSideNestedEventType>({});

  const handleChecked = (title: string, multiChecked: tFilterMultiSingleLevelEventType) => {
    const newValue = {...filterState, [title]: multiChecked};
    setFilterState(newValue);
    onChange && onChange(newValue);
  };

	return (
    <>
      {nestedMenu?.map((item, index) => {
        return (
          <Fragment key={index}>
            <BaseDivLine />
            <MenuItem
              title={item.title}
              id={item.id}
              items={item.items}
              key={index}
              hasSearch={item?.hasSearch}
              hasRange={item.hasRange}
              hasHoverIcon={item.hasHoverIcon}
              hoverText={item.hoverText}
              rangeColor={item?.rangeColor}
              range={item.range}
              onChange={(multiChecked) => handleChecked(item.id, multiChecked)}
            />
          </Fragment>
        );
      })}
    </>
  );
};
