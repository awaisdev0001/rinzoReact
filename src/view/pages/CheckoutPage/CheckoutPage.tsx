import { FC } from 'react';
import { CheckoutPageMain } from './components';
import { ReviewUpperInfo } from 'src/view/components';
import './CheckoutPage.scss';

export const CheckoutPage: FC = () => {
	return (
		<div className="checkout__page container">
			<ReviewUpperInfo
				title={'Checkout'}
				descPar={'Check the Cart and select token for payment before place an order'}
			/>
			<CheckoutPageMain />
		</div>
	);
};
