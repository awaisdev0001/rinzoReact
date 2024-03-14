import { FC } from 'react';
import { toLocaleUS } from 'src/helpers';
import { IconEther } from 'src/assets/icons';
import './SubTotalCartTotalSection.scss';

export const SubTotalCartTotalSection: FC = () => {
	return (
		<div className="subtotal__cart__total__section">
			<h1 className="subtotal__cart__total__section-title">Total</h1>
			<div className="subtotal__cart__total__section-amount">
				<h1 className="subtotal__cart__total__section-amount-ether">
					<IconEther /> <span>{toLocaleUS(406685)} </span>{' '}
				</h1>
				<p className="subtotal__cart__total__section-amount-dollar">
					${toLocaleUS(632395.175)}
				</p>
			</div>
		</div>
	);
};
