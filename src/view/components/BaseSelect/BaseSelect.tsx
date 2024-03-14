import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { IconArrowsUpDown } from 'src/assets/icons/IconArrowsUpDown';
import { IconArrowTopEmptyShort, IconCheck } from 'src/assets/icons';

import './BaseSelect.scss';

interface IProps {
	selectedValue?: string | boolean;
	items: {
		title: string;
		key?: string;
		val?: string;
		check?: boolean;
		id?: number;
		to?: string;
		image?: ReactNode;
	}[];
	onClick?: (arg: string) => void;
	className?: string;
	isForTime?: boolean;
	isTopMenu?: boolean;
}

export const BaseSelect: FC<IProps> = ({ items, selectedValue, className, onClick, isForTime = false, isTopMenu = false }) => {
	const [openSelect, setOpenSelect] = useState<boolean>(false);
	const selectClickHandler = () => setOpenSelect(prevState => !prevState);
	const nodeRef = useRef<HTMLElement | any>();

	const [value, setValue] = useState<string>('');
	const location = useLocation();
	const handleOutSideClick = (e: any) => {
		if (nodeRef.current.contains(e.target)) {
			return;
		}
		setOpenSelect(false);
	};

	useEffect(() => {
		if (!isTopMenu) {
			items.forEach(el => {
				if (isForTime) {
					el.val === selectedValue && setValue(el.val || '');
				} else {
					el.key === selectedValue && setValue(el.title);
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedValue]);

	useEffect(() => {
		if (isTopMenu) {
			items.forEach(el => {
				if (location.pathname.includes(el?.to || '')) {
					setValue(el.title);
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleOutSideClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleOutSideClick);
		};
	}, []);

	return (
		<div ref={nodeRef} className={`base-select ${className}`}>
			<div onClick={selectClickHandler} className="base-select__select">
				<span className="base-select__select-icon base-select__select-icon-UpDown">
					<IconArrowsUpDown />
				</span>
				<p className="base-select__select-input">{value}</p>
				<span
					className={`base-select__select-icon ${openSelect && 'base-select__select-icon--open'
						}`}
				>
					<IconArrowTopEmptyShort width="30" height="30" />
				</span>
			</div>
			<div className={`dropdown dropdown--${openSelect ? 'open' : 'close'}`}>
				<ul className="dropdown__list">
					{items.map(el => {
						if (isTopMenu) {
							return (
								<li key={`tabs-menu-${el.to}`}>
									<NavLink
										className={({ isActive }) =>
											'tabs-menu__item ' + (isActive ? 'tabs-menu__item--active' : '')
										}
										to={el.to || ''}
										onClick={() => {
											setOpenSelect(false);
										}}
									>
										{el.image && <span className="tabs-menu__item_icon">{el.image}</span>}
										{el.title}
									</NavLink>
								</li>
							);
						}
						return (
							<li key={`select-item-${el.key || el.val}`}>
								<button
									className={`dropdown__list_item
										${!isForTime && selectedValue === el.key && 'dropdown__list_item--active'
										} ${isForTime && selectedValue === el.val && 'dropdown__list_item--active'
										}`}
									onClick={() => {
										if (isForTime) {
											onClick && onClick(el.val || '');
										}
										if (!isForTime) {
											onClick && onClick(el.key || '');
										}
										setOpenSelect(false);
									}}
								>
									{el.title}
									{!isForTime && selectedValue === el.key && (
										<span className="dropdown__list_item-check">
											<IconCheck />
										</span>
									)}
									{isForTime && selectedValue === el.check && (
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
