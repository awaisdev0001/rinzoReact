import { FC } from 'react';

import { IconAddressCheck, IconEdit, IconWhale } from 'src/assets/icons';

import { tAccount } from 'src/typed/types';
import { splitAddress, toLocaleUS } from 'src/helpers';

import './AccountInfo.scss';
import { BaseTooltip } from '../BaseTooltip';
import defaultImage from "src/assets/images/avatars/default-avatar.jpg";

interface IProps {
	account: tAccount;
	imageEditable?: boolean;
	editImage?: any | void;
}

export const AccountInfo: FC<IProps> = ({ account, imageEditable, editImage }) => {
	const { address, image, checked, portfolioValue, whale } = account;

	return (
		<div className="account-info">
			<div className="account-info__image" style={{ backgroundImage: `url(${image || defaultImage})` }}>
				{imageEditable && (
					<button
						className="account-info__image_edit"
						onClick={() => {
							editImage();
						}}
					>
						<IconEdit />
					</button>
				)}
			</div>
			<div className="account-info__data">
				<div className="account-info__data_address">
					<h2>{splitAddress(address)}</h2>
					{checked && (
						<div className="account-info__data_icon">
							<BaseTooltip
								text="Verified on Rinzo"
								positionClassName="bottom bottom-mobile"
							>
								<IconAddressCheck />
							</BaseTooltip>
						</div>
					)}
					{whale && (
						<div className="account-info__data_icon">
							<BaseTooltip text="Crypto Whale" positionClassName="bottom bottom-mobile">
								<IconWhale />
							</BaseTooltip>
						</div>
					)}
				</div>
				<p className="account-info__data_value">
					Portfolio value: <span>${toLocaleUS(portfolioValue)}</span>
				</p>
			</div>
		</div>
	);
};
