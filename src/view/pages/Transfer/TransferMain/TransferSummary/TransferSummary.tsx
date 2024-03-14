import { FC } from 'react';
import { IconEther } from 'src/assets/icons';
import { Button } from '@mui/material';
import './TransferSummary.scss';

interface IProps {
	addressVal: string;
	onTransactionClickHandler: (agr: boolean) => void;
}

export const TransferSummary: FC<IProps> = ({ addressVal, onTransactionClickHandler }) => {
	return (
		<div className="transfer__page__summary">
			<h1 className="transfer__page__summary__title">Summary</h1>
			<div className="transfer__page__summary__estimated">
				<div className="transfer__page__summary__estimated__gas">
					<h1 className="transfer__page__summary__estimated__gas__title">
						Estimated Gas Fee
					</h1>
					<div className="transfer__page__summary__estimated__gas__price">
						<span>
							<IconEther /> 0.034
						</span>
						<p>$68.86</p>
					</div>
				</div>
				<div className="transfer__page__summary__estimated__button">
					<Button
						disabled={Boolean(!addressVal.length)}
						className={`mui-button mui-button--none-transform mui-button--l mui-button--fulwidth mui-button--${addressVal.length
								? 'contained mui-button--contained-green'
								: 'contained mui-button--contained-blue'
							}`}
						onClick={() => onTransactionClickHandler(true)}
					>
						{addressVal.length ? 'Approve Transfer' : 'Enter an address'}
					</Button>
				</div>
			</div>
		</div>
	);
};
