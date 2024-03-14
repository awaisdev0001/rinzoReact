import { FC } from 'react';
import { IconEther } from 'src/assets/icons';
import { BaseDivLine } from 'src/view/components';
import { CheckoutPageSubTotalTipRinzo } from './CheckoutPageSubTotalTipRinzo';
import { SubTotalCartTotalSection } from './SubTotalCartTotalSection';
import { SubTotalMiddleSection } from './SubTotalMiddleSection';
import { SubTotalCartPayWithCart } from './SubTotalCartPayWithCart';
import { SubTotalAmount } from './SubTotalAmount';
import { toLocaleUS } from 'src/helpers';
import './CheckoutPageSubTotal.scss';

export const CheckoutPageSubTotal: FC = () => {
	return (
		<div className="checkout__page__subtotal">
			{/* <div className="checkout__page__subtotal-upper">
                <h1 className="checkout__page__subtotal-upper-title">Subtotal</h1>
                <div className="checkout__page__subtotal-upper-price">
                    <h1 className="checkout__page__subtotal-upper-price-eth">
                        <IconEther />
                        <span className="checkout__page__subtotal-upper-price-eth-num">
                            {toLocaleUS(406685)}
                        </span>
                    </h1>
                    <p className="checkout__page__subtotal-upper-price-par">
                        ${toLocaleUS(632395.175)}
                    </p>
                </div>
            </div>
            <BaseDivLine />
            <CheckoutPageSubTotalTipRinzo />
            <BaseDivLine /> */}
			<SubTotalCartTotalSection />
			<BaseDivLine />
			<SubTotalMiddleSection />
			<BaseDivLine />
			<SubTotalCartPayWithCart />
			<BaseDivLine />
			<SubTotalAmount />
		</div>
	);
};
