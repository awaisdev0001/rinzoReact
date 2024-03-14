import { FC } from 'react';
import { ContactData } from './ContactData';
import { NotificationSettings } from './NotificationSettings';
import './Settings.scss';

export const Settings: FC = () => {
	return (
		<div className="settings__container">
			<h1 className="settings__title">Settings</h1>
			<ContactData
				title={'Contact data'}
				desc={'Here we are going to write why we need user’s email or phone number'}
				isEmailForm
			/>
			<NotificationSettings />
			<ContactData
				title={'Receive an Offer'}
				desc={
					'Receive notifications only when you receive offers with a value greater than or equal to this amount of ETH'
				}
				isEmailForm={false}
			/>
		</div>
	);
};
