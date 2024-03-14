import { FC } from 'react';
import { toLocaleUS } from 'src/helpers';
import { IconEther } from 'src/assets/icons';
interface IProps {
	color: 'red' | 'green';
	usd: number;
	eth: number;
}
export const YouPay: FC<IProps> = ({ color, usd, eth }) => {
	return (
		<div className="pay-block">
			<h6 className="pay-block__title">You Pay</h6>
			<div className="pay-block__info">
				<p className={`pay-block__info_eth pay-block__info_eth--${color}`}>
					<span className="pay-block__info_eth-icon">
						<IconEther className="eth--only-black" />
					</span>
					{eth}
				</p>
				<p className="pay-block__info_usd">${toLocaleUS(usd)}</p>
			</div>
		</div>
	);
};
