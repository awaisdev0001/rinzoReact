import { FC, useEffect, useState } from 'react';
import { IconGreenChecked, IconLoader } from 'src/assets/icons';
import { PlaceOrderPopup } from '../../../CheckoutPage/components/CheckoutPageMain/CheckoutPagePlaceOrder/PlaceOrderPopup';
import { NoneMuiModal } from 'src/view/components';
import './TransactionProgress.scss';

export const TransactionProgress: FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [order, setOrder] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOrder(true);
		}, 2500);
		setTimeout(() => {
			setShowModal(true);
		}, 3000);
	}, []);

	return (
    <div className="transaction__progress">
      <NoneMuiModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={''}
        width={452}
        isSuccessAnimation={false}
      >
        <PlaceOrderPopup isTransferPopUp />
      </NoneMuiModal>
      <h1 className="transaction__progress__title">Transaction Routing</h1>
      <div className="transaction__progress__load">
        {!order ? <IconLoader /> : <IconGreenChecked />}
        {!order ? <p>Start transacting...</p> : <p>Success</p>}
      </div>
    </div>
  );
};
