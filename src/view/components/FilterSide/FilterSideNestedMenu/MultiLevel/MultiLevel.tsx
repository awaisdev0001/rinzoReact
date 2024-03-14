import { FC, useState, ChangeEvent } from 'react';
import { Collapse, List, ListItem, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconExpandLess, IconExpandMore, IconInfo } from 'src/assets/icons';
import { tMenuItem } from 'src/typed/types';
import { SingleLevel } from '../SingleLevel';
import { multiLevelListItemStyle } from './styles';
import { priceETH } from 'src/constants';
import { SliderAndInputs } from './SliderAndInputs';
import { BaseTooltip } from '../../../BaseTooltip';
import './MultiLevel.scss';
import { tFilterMultiSingleLevelEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';

type tProps = tMenuItem & {
	onChange?: (multiChecked: tFilterMultiSingleLevelEventType) => void
};

export const MultiLevel: FC<tProps> = ({
	title,
	id,
	items,
	hasRange,
	rangeColor,
	hasHoverIcon,
	hoverText,
	hasSearch,
	range,
	onChange
}) => {
	const [open, setOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const handleClick = () => setOpen(prev => !prev);
	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	}

	const [multiChecked, setMultiChecked] = useState<{ [name: string]: boolean | number[] }>({});

	const handleSingleLevelCheck = (key: string, checked: boolean | number[]) => {
		const newState = {
			...multiChecked,
			[key]: checked
		};
		setMultiChecked(newState);

		let upState = [];
		if (typeof checked === "boolean") {
			for (let k in newState) {
				if (newState[k]) {
					upState.push(k);
				}
			}
		} else {
			upState = checked;
		}

		onChange && onChange(upState);
	};

	return (
		<>
			<ListItem
				style={multiLevelListItemStyle}
				button
				onClick={handleClick}
				alignItems="flex-start"
				disableRipple
				disableTouchRipple
				className="multiLevel"
			>
				<span className="multiLevel__title">
					{title}{' '}
					{hasHoverIcon && (
						<BaseTooltip biggerText width={'178px'} text={hoverText as string}>
							<IconInfo />
						</BaseTooltip>
					)}
				</span>
				{open ? <IconExpandLess /> : <IconExpandMore />}
			</ListItem>
			{hasSearch && (
				<>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<div className="multiLevel__search">
							<input value={searchValue} onChange={(e) => handleSearchChange(e)} />
							<SearchIcon />
						</div>
					</Collapse>
				</>
			)}
			{(title === priceETH || hasRange) && (
				<>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<SliderAndInputs
							rangeColor={rangeColor}
							onChange={(range) => handleSingleLevelCheck(id, range)}
							range={range}
							rangeValue={multiChecked[id] as number[]}
						/>
					</Collapse>
				</>
			)}
			{items?.filter((item) => item.title.includes(searchValue)).map((item, index) => (
				<Collapse key={index} in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<div className="multiLevel__collapse__singleLevel-wrap">
							<SingleLevel
								title={item.title}
								id={item.id}
								number={item.number}
								onChange={(checked) => handleSingleLevelCheck(item.id, checked)}
								checked={multiChecked[item.id] as boolean}
							/>
						</div>
					</List>
				</Collapse>
			))}
		</>
	);
};
