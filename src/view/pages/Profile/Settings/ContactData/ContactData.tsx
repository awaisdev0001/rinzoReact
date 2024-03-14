import { ChangeEvent, FC, useState } from 'react';
import { Button } from '@mui/material';
import { excludeZeroAhead, validateEmail, onlyPositiveDigitsInputHandler } from 'src/helpers';
import './ContactData.scss';

interface IProps {
	title: string;
	desc: string;
	isEmailForm: boolean;
}

export const ContactData: FC<IProps> = ({ title, desc, isEmailForm }) => {
	const [emailValidation, setEmailValidation] = useState<boolean>();
	const [offerPrice, setOfferPrice] = useState<number | string>(0);

	const contactEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const valResult = validateEmail(event.target.value);
		setEmailValidation(valResult);
	};

	const offerPriceChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setOfferPrice(event.target.value);
	};

	return (
		<div className="contact__data">
			<h1 className="contact__data__title">{title}</h1>
			<p className="contact__data__desc">{desc}</p>
			{isEmailForm ? (
				<input
					type="email"
					className="contact__data_input"
					placeholder="Email"
					onChange={contactEmailChangeHandler}
				/>
			) : (
				<div className="contact__data__number__input">
					<input
						type="number"
						value={excludeZeroAhead(offerPrice) || ''}
						// value={offerPrice}
						onChange={offerPriceChangeHandler}
						onKeyDown={onlyPositiveDigitsInputHandler}
					/>
					<p className="contact__data__number__input__par">ETH</p>
				</div>
			)}

			<div className="contact__data__button">
				{isEmailForm ? (
					<Button
						className={`mui-button mui-button--l mui-button--fulwidth mui-button--${emailValidation
							? 'outline mui-button--contained-green'
							: 'contained mui-button--contained-blue'
							}`}
					>
						Save Changes
					</Button>
				) : (
					<Button
						className={`mui-button mui-button--l mui-button--fulwidth mui-button--${offerPrice > 0
							? 'outline mui-button--contained-green'
							: 'contained mui-button--contained-blue'
							}`}
					>
						Save Changes
					</Button>
				)}
			</div>
		</div>
	);
};
