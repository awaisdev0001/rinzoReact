import { FC, useState, ChangeEvent } from 'react';
import { TransferCart } from './TransferCart';
import { TransferSummary } from './TransferSummary';
import { CheckoutPagePlaceOrder } from '../../CheckoutPage/components/CheckoutPageMain/CheckoutPagePlaceOrder';
import { useAppSelector, useWindowSize } from 'src/hooks';
import './TransferMain.scss';

export const TransferMain: FC = () => {
	const [addressVal, setAddressVal] = useState<string>('');
	const [startTransaction, setStartTransaction] = useState<boolean>(false);
	const { selectedCards } = useAppSelector(state => state.sellNFTsReducerReducer);
	const { width } = useWindowSize();

	const onAddressChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setAddressVal(e.target.value);
	};

	const onTransactionClickHandler = (arg: boolean) => {
		setStartTransaction(arg);
	};

	return (
		<div className="transfer__page__main">
			{startTransaction && width <= 1299 && (
				<CheckoutPagePlaceOrder
					transferItems={selectedCards.length}
					hasPrice
					isTransferPage
				/>
			)}
			<TransferCart onAddressChangeHandler={onAddressChangeHandler} />
			{startTransaction && width > 1299 ? (
				<CheckoutPagePlaceOrder
					transferItems={selectedCards.length}
					hasPrice
					isTransferPage
				/>
			) : (
				<>
					{!startTransaction && (
						<TransferSummary
							addressVal={addressVal}
							onTransactionClickHandler={onTransactionClickHandler}
						/>
					)}
				</>
			)}
		</div>
	);
};
