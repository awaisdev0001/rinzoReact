import { FC } from 'react';

import { IconEther } from 'src/assets/icons';

import { toLocaleUS } from 'src/helpers';
import { useAppSelector } from 'src/hooks';
import { tProfileGraphButton, tProfileGraphButtonOptions } from '../types';

import './ProfileGraphButton.scss';
interface IProps extends tProfileGraphButton {
	activeButton: tProfileGraphButtonOptions;
	clickButtonHandler: (arg: tProfileGraphButtonOptions) => void;
}

export const ProfileGraphButton: FC<IProps> = ({
	title,
	price,
	hasEth,
	hasUsd,
	btnType,
	activeButton,
	usd,
	clickButtonHandler,
}) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	return (
		<div
			onClick={() => clickButtonHandler(btnType)}
			className={`profile__graph__button ${themeMode} ${activeButton === btnType && 'active'
				}`}
		>
			<h6 className="profile__graph__button__title">{title}</h6>
			<p className="profile__graph__button__price">
				{hasEth && <IconEther />}
				{price}
				{hasUsd && <span>${toLocaleUS(usd || 0)} </span>}
			</p>
		</div>
	);
};
