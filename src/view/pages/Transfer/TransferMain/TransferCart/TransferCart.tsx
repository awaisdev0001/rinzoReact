import { ChangeEvent, FC } from 'react';
import { TransferAddress } from './TransferAddress';
import { TransferTable } from './TransferTable';
import './TransferCart.scss';

interface IProps {
	onAddressChangeHandler: (arg: ChangeEvent<HTMLInputElement>) => void;
}

export const TransferCart: FC<IProps> = ({ onAddressChangeHandler }) => {
	return (
		<div className="transfer__page__cart">
			<TransferAddress onAddressChangeHandler={onAddressChangeHandler} />
			<TransferTable />
		</div>
	);
};
