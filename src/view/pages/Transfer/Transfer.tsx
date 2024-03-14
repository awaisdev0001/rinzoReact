import { FC } from 'react';
import { ReviewUpperInfo } from 'src/view/components';
import { TransferMain } from './TransferMain';
import './Transfer.scss';

export const Transfer: FC = () => {
	return (
		<div className="transfer__page container">
			<ReviewUpperInfo
				title={'Transfer'}
				descPar={'Check Selected NFTs with preview and name'}
			/>
			<TransferMain />
		</div>
	);
};
