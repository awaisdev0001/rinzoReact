import { FC } from 'react';
import './PopupCardItem.scss';

interface IProps {
	cardImage: string;
	cardNumber: string | number;
	cardTitle: string;
}

export const PopupCardItem: FC<IProps> = ({ cardImage, cardNumber, cardTitle }) => {
	return (
		<div className="popup__card__item">
			<img className="popup__card__item-img" src={cardImage} alt={cardTitle} />
			<h2 className="popup__card__item-cardNumber">{cardNumber}</h2>
			<h2 className="popup__card__item-cardTitle">{cardTitle}</h2>
		</div>
	);
};
