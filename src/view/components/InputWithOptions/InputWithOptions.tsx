import { FC, useEffect, useRef, useState } from 'react';

import { InputBase, InputAdornment } from '@mui/material';
import { IconArrowTopEmptyShort, IconCheck } from 'src/assets/icons';

import { onlyPositiveDigitsInputHandler } from 'src/helpers';

import './InputWithOptions.scss';
interface IProps {
	selectedValue: string;
	items: {
		title: string;
		key: string;
	}[];
	placeholder: string;
	onClick: (arg: string) => void;
	inputValue: string | number;
	changePriceValue: (arg: number | string) => void;
	maxWidth?: string;
	disabled?: boolean;
}
export const InputWithOptions: FC<IProps> = ({
	maxWidth,
	items,
	selectedValue,
	placeholder,
	onClick,
	inputValue,
	changePriceValue,
	disabled,
}) => {
	const [openSelect, setOpenSelect] = useState<boolean>(false);
	const selectClickHandler = () => setOpenSelect(prevState => !prevState);
	const nodeRef = useRef<HTMLElement | any>();

	const [value, setValue] = useState<string>('');

	const handleOutSideClick = (e: any) => {
		if (nodeRef.current.contains(e.target)) {
			return;
		}
		setOpenSelect(false);
	};

	useEffect(() => {
		items.forEach(el => {
			el.key === selectedValue && setValue(el.title);
		});
	}, [selectedValue]);

	useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleOutSideClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleOutSideClick);
		};
	}, []);

	return (
		<div ref={nodeRef} className="base-input-options" style={{ maxWidth }}>
			<InputBase
				type="number"
				className="mui-input mui-input--icon mui-input--icon-l"
				placeholder={placeholder}
				inputProps={{ 'aria-label': placeholder }}
				endAdornment={
					<InputAdornment position="end">
						<span
							className={`base-input-options__text ${disabled && 'base-input-options__text--disabled'
								}`}
						>
							{value}
						</span>
						<button
							disabled={disabled}
							onClick={() => {
								selectClickHandler();
							}}
							className={`base-input-options__icon ${openSelect && 'base-input-options__icon--open'
								}`}
						>
							<IconArrowTopEmptyShort width="30" height="30" />
						</button>
					</InputAdornment>
				}
				onChange={e => {
					changePriceValue(e.target.value);
				}}
				value={inputValue}
				onKeyDown={onlyPositiveDigitsInputHandler}
				disabled={disabled}
			/>
			<div className={`dropdown dropdown--${openSelect ? 'open' : 'close'}`}>
				<ul className="dropdown__list">
					{items.map(el => {
						return (
							<li key={`select-item-${el.key}`}>
								<button
									className={`dropdown__list_item ${selectedValue === el.key && 'dropdown__list_item--active'
										}`}
									onClick={() => {
										onClick(el.key);
										setOpenSelect(false);
									}}
								>
									{el.title}
									{selectedValue === el.key && (
										<span className="dropdown__list_item-check">
											<IconCheck />
										</span>
									)}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
