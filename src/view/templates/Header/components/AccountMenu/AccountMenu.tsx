import { NavLink } from 'react-router-dom';

import { IconLogout } from 'src/assets/icons';

import { accountMenu } from '../../data';
import { clearAccountParams } from 'src/store';
import { useAppDispatch } from 'src/hooks';

import { FC } from 'react';
import './AccountMenu.scss';

import { useDisconnect } from 'wagmi';
import clearStorageItem from 'src/helpers/localStorage/clearStorageItem';

interface IProps {
	cancelMenuHandler?: (arg: boolean) => void;
}

export const AccountMenu: FC<IProps> = ({ cancelMenuHandler }) => {
	const dispatch = useAppDispatch();
	const { disconnect } = useDisconnect();
	/* Logout and Remove Blur/X2Y2 Tokens */
	const Logout = () => {
		dispatch(clearAccountParams());
		disconnect();
		clearStorageItem("BLUR_TOKEN");
		clearStorageItem("X2Y2_TOKEN");
	}

	return (
		<>
			<ul className="account-menu">
				{accountMenu.map(el => {
					return (
						<li key={`account-menu-${el.value}`} className="account-menu__item">
							<NavLink
								onClick={() => {
									if (cancelMenuHandler) {
										cancelMenuHandler(false);
									}
								}}
								to={el.to}
							>
								<span className="icon">{el.icon}</span>
								{el.value}
							</NavLink>
						</li>
					);
				})}
			</ul>
			<ul className="account-menu">
				<li className="account-menu__item">
					<button
						onClick={Logout}
					>
						<span className="icon">
							<IconLogout />
						</span>
						Disconnect
					</button>
				</li>
			</ul>
		</>
	);
};
