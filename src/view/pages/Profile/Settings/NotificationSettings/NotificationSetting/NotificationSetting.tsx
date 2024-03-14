import { FC } from 'react';
import { SwitchToggleButton } from 'src/view/components';
import './NotificationSetting.scss';

interface IProps {
	name: string;
}

export const NotificationSetting: FC<IProps> = ({ name }) => {
	return (
		<div className="notification__setting">
			<p className="notification__setting__name">{name}</p>
			<SwitchToggleButton />
		</div>
	);
};
