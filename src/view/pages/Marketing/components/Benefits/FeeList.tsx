import { FC } from 'react';
import { IconEther } from 'src/assets/icons';

interface IProps {
	gasFee: number;
	royalty: { price: number; percent: number };
	platformFee: { price: number; percent: number };
	color: 'red' | 'green';
}
export const FeeList: FC<IProps> = ({ gasFee, royalty, platformFee, color }) => {
	return (
		<ul className="fee-list">
			<li className="fee-list__item">
				<p>Gas Fee</p>
				<span className="fee-list__item_right">
					<span className="fee-list__item_right-icon">
						<IconEther className="eth--only-black" />
					</span>
					{gasFee}
				</span>
			</li>
			<li className="fee-list__item">
				<p>
					Royalty
					<span className={`fee-list__item-icon fee-list__item-icon--${color}`}>
						{royalty.percent}%
					</span>
				</p>
				<span className="fee-list__item_right">
					<span className="fee-list__item_right-icon">
						<IconEther className="eth--only-black" />
					</span>
					{royalty.price}
				</span>
			</li>
			<li className="fee-list__item">
				<p>
					Platform Fee
					<span className={`fee-list__item-icon fee-list__item-icon--${color}`}>
						{platformFee.percent}%
					</span>
				</p>
				<span className="fee-list__item_right">
					<span className="fee-list__item_right-icon">
						<IconEther className="eth--only-black" />
					</span>
					{platformFee.price}
				</span>
			</li>
		</ul>
	);
};
