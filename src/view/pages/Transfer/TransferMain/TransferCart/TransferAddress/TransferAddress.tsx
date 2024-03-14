import { ChangeEvent, FC } from 'react';
import './TransferAddress.scss';

interface IProps {
	onAddressChangeHandler: (arg: ChangeEvent<HTMLInputElement>) => void;
}

export const TransferAddress: FC<IProps> = ({ onAddressChangeHandler }) => {
	return (
		<div className="transfer__page__address">
			<h1 className="transfer__page__address__highlight">Send to wallet</h1>
			<input
				className="transfer__page__address__input"
				type="text"
				placeholder="Please enter wallet address"
				onChange={onAddressChangeHandler}
			/>
		</div>
	);
};
