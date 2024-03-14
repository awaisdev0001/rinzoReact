import { FC } from 'react';
import { toLocaleUS } from 'src/helpers';
import { IconDiamond, IconEther } from 'src/assets/icons';
import '../Rarity.scss';

interface IProps {
	el: {
		image: string;
		logo: string;
		highestSoldPrice: number;
		highestOfferReceived: number;
		rarityScore: number;
		averageOfferAmount: number;
		color?: string;
	};
}

export const InfoCard: FC<IProps> = ({ el }) => {
	return (
		<div className={`rarity-info rarity-info--${el.color}`}>
			<div className="rarity-info__image" style={{ backgroundImage: `url(${el.image})` }}>
				<span
					className="rarity-info__image_logo"
					style={{ backgroundImage: `url(${el.logo})` }}
				></span>
			</div>
			<ul className="rarity-info__list">
				<li className="rarity-info__list_item">
					<p>Highest Sold Price</p>
					<p className="rarity-info__list_item-right">
						<span>
							<IconEther className="eth--only-black" />
						</span>
						{toLocaleUS(el.highestSoldPrice)}
					</p>
				</li>
				<li className="rarity-info__list_item">
					<p>Highest Offer Received</p>
					<p className="rarity-info__list_item-right">
						<span>
							<IconEther className="eth--only-black" />
						</span>
						{toLocaleUS(el.highestOfferReceived)}
					</p>
				</li>
				<li className="rarity-info__list_item">
					<p>Rarity Score</p>
					<p className="rarity-info__list_item-right rarity-info__list_item-right--light">
						<span>
							<IconDiamond />
						</span>
						{toLocaleUS(el.rarityScore)}
					</p>
				</li>
				<li className="rarity-info__list_item">
					<p>Average Offer Amount</p>
					<p className="rarity-info__list_item-right">
						{toLocaleUS(el.averageOfferAmount)}
					</p>
				</li>
			</ul>
		</div>
	);
};
