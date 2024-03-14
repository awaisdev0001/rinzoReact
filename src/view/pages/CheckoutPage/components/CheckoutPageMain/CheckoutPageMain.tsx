import { FC } from 'react';
import { CheckoutPageMyCart } from './CheckoutPageMyCart';
import { CheckoutPageSubTotal } from './CheckoutPageSubTotal';
import { useAppSelector, useWindowSize } from 'src/hooks';
import { tCollectionReducer } from 'src/store';
import { CheckoutPagePlaceOrder } from './CheckoutPagePlaceOrder';
import './CheckoutPageMain.scss';

export const CheckoutPageMain: FC = () => {
	const { placeOrder } = useAppSelector(state => state.checkoutReducer);
	const { selectedCards } = useAppSelector<tCollectionReducer>(state => state.collectionReducer);
	const { width } = useWindowSize();

	return (
		<div className="checkout__page__main">
			{placeOrder && width <= 1299 && <CheckoutPagePlaceOrder hasPrice />}
			<CheckoutPageMyCart items={selectedCards} />
			<>
				{placeOrder && width > 1299 ? (
					<CheckoutPagePlaceOrder hasPrice />
				) : (
					<>{!placeOrder && <CheckoutPageSubTotal />}</>
				)}
			</>
		</div>
	);
};
