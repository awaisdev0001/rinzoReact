import { FC, useState } from 'react';
import { PayWithCartChoice } from './PayWithCartChoice';
import { cartChoices } from './data';
import { ArrowDropdownIcon } from 'src/view/components';
import { tSubtotalPayChoice } from 'src/typed/types';
import './SubTotalCartPayWithCart.scss';

export const SubTotalCartPayWithCart: FC = () => {
	const [selectedChoice, setSelectedChoice] = useState<tSubtotalPayChoice>('eth');

	const onChoiceClickHandler = (choice: tSubtotalPayChoice) => {
		setSelectedChoice(choice);
	};

	return (
		<div className="subtotal__cart__pay__with__cart">
			<h1 className="subtotal__cart__pay__with__cart-title">You pay with</h1>
			<div className="subtotal__cart__pay__with__cart-choices">
				{cartChoices.map((item, index) => (
					<PayWithCartChoice
						key={index}
						hasIcon={item.hasIcon}
						balance={item.balance}
						tokenName={item.tokenName}
						onClick={onChoiceClickHandler}
						choiceType={item.type as tSubtotalPayChoice}
						selectedChoice={selectedChoice}
					/>
				))}
			</div>
			<button className="subtotal__cart__pay__with__cart-show__tokens">
				<span className="subtotal__cart__pay__with__cart-show__tokens-span">
					Show all tokens
				</span>
				<ArrowDropdownIcon color={'#667085'} padding={'2.5'} direction={'down'} />
			</button>
		</div>
	);
};
