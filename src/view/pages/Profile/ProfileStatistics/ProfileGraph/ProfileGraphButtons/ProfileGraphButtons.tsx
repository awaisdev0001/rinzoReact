import { FC, useState } from 'react';
import { ProfileGraphButton } from './ProfileGraphButton';
import { buttonsData } from './data';
import { tProfileGraphButtonOptions } from './types';
import './ProfileGraphButtons.scss';

export const ProfileGraphButtons: FC = () => {
	const [activeButton, setActiveButton] = useState<tProfileGraphButtonOptions>('pnl');

	const clickButtonHandler = (arg: tProfileGraphButtonOptions) => {
		setActiveButton(arg);
	};

	return (
		<div className="profile__graph__chart__buttons">
			{buttonsData.map((item, index) => (
				<ProfileGraphButton
					key={index}
					title={item.title}
					price={item.price}
					hasEth={item.hasEth}
					hasUsd={item.hasUsd}
					btnType={item.btnType}
					activeButton={activeButton}
					clickButtonHandler={clickButtonHandler}
				/>
			))}
		</div>
	);
};
