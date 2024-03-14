import { FC } from 'react';
import { CustomTableCart } from 'src/view/components';
import './TransferTable.scss';

export const TransferTable: FC = () => {
	return (
		<div className="transfer__table">
			<CustomTableCart />
		</div>
	);
};
