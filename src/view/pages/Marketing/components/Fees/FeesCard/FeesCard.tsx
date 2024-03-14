import { FC } from 'react';
import { tFeesCard } from '../../../types';
import { BaseButton } from 'src/view/components';
import { IconRedirect } from 'src/assets/icons';
import './FeesCard.scss';
import { toLocaleUS } from 'src/helpers';

type IProps = tFeesCard;

export const FeesCard: FC<IProps> = ({
	icon,
	title,
	gasAmount,
	images,
	usdPrice,
	avgCostPerItem,
}) => {
	return (
		<div className="fees-card">
			<div className="fees-card__upper">
				<img src={icon as string} alt="icon" />
				<h1>{title}</h1>
			</div>
			<div className="fees-card__images">
				{images.map((item, index) => (
					<div style={{ backgroundImage: `url('${item}')` }} key={index} />
				))}
			</div>
			<div className="fees-card__data">
				<div className={`fees-card__data_option ${title !== 'Rinzo' ? 'down' : ''}`}>
					<h5>Gas Amount</h5>
					<p>{toLocaleUS(gasAmount)}%</p>
				</div>
				<div className={`fees-card__data_option ${title !== 'Rinzo' ? 'down' : ''}`}>
					<h5>Avg Cost Per Item</h5>
					<p>${toLocaleUS(avgCostPerItem)}</p>
				</div>
				<div className={`fees-card__data_option ${title !== 'Rinzo' ? 'down' : ''}`}>
					<h5>USD Price</h5>
					<p>${toLocaleUS(usdPrice)}</p>
				</div>
			</div>
			<div className="fees-card__btn">
				<BaseButton
					className="button--icon button--outline button--outline-xxs button--outline-transparent"
					text="View transaction"
					icon={<IconRedirect />}
					onClick={() => 'e'}
				/>
			</div>
		</div>
	);
};
