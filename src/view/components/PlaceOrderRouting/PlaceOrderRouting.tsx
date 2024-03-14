import { FC, useEffect, useState } from 'react';
import { tOrder } from '../../pages/CheckoutPage/components/CheckoutPageMain/CheckoutPagePlaceOrder/types';
import '../../pages/CheckoutPage/components/CheckoutPageMain/CheckoutPagePlaceOrder/CheckoutPagePlaceOrder.scss';
import { NoneMuiModal } from '../NoneMuiComponents';
import { PlaceOrderPopup } from '../../pages/CheckoutPage/components/CheckoutPageMain/CheckoutPagePlaceOrder/PlaceOrderPopup';
import { IconGreenChecked, IconLoader } from 'src/assets/icons';
import { PlaceOrderItem } from '../../pages/CheckoutPage/components/CheckoutPageMain/CheckoutPagePlaceOrder/PlaceOrderItem';
import { useNavigate } from 'react-router-dom';

interface IProps {
	ordersArr: tOrder[][];
	title: string;
	popUpTitle?: string;
	popUpDesc?: string;
}

export const PlaceOrderRouting: FC<IProps> = ({ ordersArr, title, popUpTitle, popUpDesc }) => {

    const [orders, setOrders] = useState<tOrder[]>([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();


	useEffect(() => {
		setOrders(ordersArr[0]);
		setTimeout(() => {
			setOrders(ordersArr[1]);
		}, 1000);
		setTimeout(() => {
			setOrders(ordersArr[2]);
		}, 2500);
		setTimeout(() => {
			setOrders(ordersArr[3]);
		}, 3000);
		setTimeout(() => {
			setOrders(prevState => {
				return prevState.map(item => {
					if (item.desc === 'Success') {
						return { ...item, waiting: false };
					}
					return item;
				});
			});
		}, 3500);
		setTimeout(() => {
			setShowModal(true);
		}, 3800);
	}, []);

    function redirectToManagePage() {
      setShowModal(false);
      navigate('/manage');
    }


    return (
      <div className="checkout__page__place__order">
        <NoneMuiModal
          show={showModal}
          onClose={() => redirectToManagePage()}
          title={''}
          width={452}
          isSuccessAnimation={true}
        >
          <PlaceOrderPopup mainTitle={popUpTitle} mainDesc={popUpDesc} />
        </NoneMuiModal>
        <h1 className="checkout__page__place__order__title">{title}</h1>
        <ul className="checkout__page__place__order__orders">
          {orders.map((item, index) => (
            <div
              className="checkout__page__place__order__orders-order"
              key={index}
            >
              <div className="checkout__page__place__order__orders-order-icon">
                {item.waiting ? <IconLoader /> : <IconGreenChecked />}
              </div>
              <PlaceOrderItem waiting={true} icon={<></>} item={item} />
            </div>
          ))}
        </ul>
      </div>
    );

};
