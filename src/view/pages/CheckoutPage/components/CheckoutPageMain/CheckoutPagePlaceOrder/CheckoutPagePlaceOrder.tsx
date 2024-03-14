import { FC, useEffect, useState } from 'react';
import { PlaceOrderPopup } from './PlaceOrderPopup';
import { PlaceOrderItem } from './PlaceOrderItem';
import { IconGreenChecked, IconLoader } from 'src/assets/icons';
import { NoneMuiModal } from 'src/view/components';
import { tOrder } from './types';
import { firstFetch, secondRequest, thirdRequest, forthRequest } from './data';
import './CheckoutPagePlaceOrder.scss';
import { useNavigate } from "react-router-dom";

interface IProps {
	hasPrice?: boolean;
	isTransferPage?: boolean;
	transferItems?: number | string;
}

export const CheckoutPagePlaceOrder: FC<IProps> = ({ hasPrice, isTransferPage, transferItems }) => {

    const [orders, setOrders] = useState<tOrder[]>([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    console.log({ showModal });

    useEffect(() => {
        setOrders(firstFetch);
        setTimeout(() => {
            setOrders(secondRequest);
        }, 1000);
        setTimeout(() => {
            setOrders(thirdRequest);
        }, 2500);
        setTimeout(() => {
            setOrders(forthRequest);
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
          <PlaceOrderPopup
            isTransferPopUp={isTransferPage}
            transferItems={transferItems}
          />
        </NoneMuiModal>
        <h1 className="checkout__page__place__order__title">Order Routing</h1>
        <ul className="checkout__page__place__order__orders">
          {orders.map((item, index) => (
            <div
              className="checkout__page__place__order__orders-order"
              key={index}
            >
              <div className="checkout__page__place__order__orders-order-icon">
                {item.waiting ? <IconLoader /> : <IconGreenChecked />}
              </div>
              <PlaceOrderItem
                waiting={true}
                icon={<></>}
                item={item}
                hasPrice={hasPrice}
              />
            </div>
          ))}
        </ul>
      </div>
    );

};
