import { FC } from 'react';
import { settingsArr } from './settingsArr';
import { NotificationSetting } from './NotificationSetting';
import './NotificationSettings.scss';

export const NotificationSettings: FC = () => {
	return (
		<div className="notification__settings">
			<h1 className="notification__settings__title">Notification settings</h1>
			<p className="notification__settings__desc">
				Select which notifications you would like to receive for 0x422c...342f
			</p>
			<div className="notification__settings__options">
				{settingsArr.map((text, index) => (
					<NotificationSetting key={index} name={text} />
				))}
			</div>
		</div>
	);
};
