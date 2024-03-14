import { FC, ReactNode } from 'react';
import { tOrder } from '../types';
import { IconEther } from 'src/assets/icons';
import './PlaceOrderItem.scss';

interface IProps {
	item: tOrder;
	waiting: boolean;
	icon: ReactNode;
	hasPrice?: boolean;
	hidePrice?: boolean;
}

export const PlaceOrderItem: FC<IProps> = ({ item, waiting, icon, hasPrice, hidePrice }) => {
	return (
		<li className="place__order__item">
			{icon}
			<ul className="place__order__item__desc">
				{item.desc}
				{item.child.map((item, index) => (
					<li className="place__order__item__desc-inner" key={index}>
						<img src={item.icon as string} alt="alt" /> {item.desc}{' '}
						<>
							{hasPrice && (
								<>
									<IconEther /> 94.23
								</>
							)}
						</>
					</li>
				))}
			</ul>
		</li>
	);
};
