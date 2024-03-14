import { FC, useRef, useState } from 'react';
import { splitAddressInHalf } from 'src/helpers';
import { IconArrowTopEmptyShort } from 'src/assets/icons';
import { tAccount } from 'src/typed/types';
import { useOnClickOutside } from 'src/hooks';

import { AccountMenu } from '../index';
import './ConnectedWallet.scss';
interface IProps {
	account: tAccount;
}

export const ConnectedWallet: FC<IProps> = ({ account }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const nodeRef = useRef<any>();
	const { image, address, connectType, portfolioValue, checked } = account;
	const cancelMenuHandler = (arg: boolean) => setOpenMenu(arg);
	useOnClickOutside(nodeRef, () => setOpenMenu(false));

	return (
		<div ref={nodeRef} className="account-data">
			<div
				className="account-data__image"
				style={{ backgroundImage: `url(${account.image})` }}
			/>
			<button
				className="account-data__address"
				onClick={() => {
					setOpenMenu(prevState => !prevState);
				}}
			>
				{splitAddressInHalf(address)}
				<span className={`account-data__icon ${openMenu && 'account-data__icon--open'}`}>
					<IconArrowTopEmptyShort />
				</span>
			</button>
			<div className={`account-data__actions ${openMenu && 'account-data__actions--open'}`}>
				<div className="account-data__actions_body">
					<AccountMenu cancelMenuHandler={cancelMenuHandler} />
				</div>
			</div>
		</div>
	);
};
