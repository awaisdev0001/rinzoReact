import { IconArrowTopEmptyLong, IconDiamond, IconEther, IconRank } from 'src/assets/icons';
import { rinzoBenefits } from '../../../data';
import { FeeList } from '../FeeList';
import { YouPay } from '../YouPay';

export const RinzoBenefits = () => {
	return (
		<div className="benefit-card benefit-card--green">
			<div className="benefit-card__image">
				<img src={rinzoBenefits.imageUrl} alt="" className="benefit-card__image_thumb" />
			</div>
			<div className="benefit-card__content">
				<h6 className="benefit-card__name">{rinzoBenefits.name}</h6>
				<div className="benefit-card__estimation">
					<div className="benefit-card__estimation_price">
						<div className="benefit-card__estimation_price-left">
							<div className="benefit-card__star">
								<span className="benefit-card__estimation_price-icon">
									<IconRank />
								</span>
								<p>{rinzoBenefits.rank}</p>
							</div>
							<div className="benefit-card__diamond">
								<span className="benefit-card__estimation_price-icon">
									<IconDiamond />
								</span>
								<p>{rinzoBenefits.score}</p>
							</div>
						</div>
						<div className="benefit-card__estimation_price-right">
							<div className="benefit-card__ether">
								<IconEther className="eth--only-black" />
								<p>{rinzoBenefits.priceETH}</p>
							</div>
						</div>
					</div>
					<div className="benefit-card__estimation_info">
						<p>
							Estimated
							<span className="benefit-card__estimation_info-eth">
								<IconEther className="eth--only-black" />
							</span>
							{rinzoBenefits.estimtedPriceETH}
							<span
								className={`benefit-card__info_percent benefit-card__info_percent--${rinzoBenefits.duration ? 'up' : 'down'
									}`}
							>
								<IconArrowTopEmptyLong />
								{rinzoBenefits.percent}
							</span>
						</p>
					</div>
				</div>
			</div>
			<FeeList
				gasFee={rinzoBenefits.gasFee}
				royalty={rinzoBenefits.royalty}
				platformFee={rinzoBenefits.platformFee}
				color="green"
			/>
			<YouPay color="green" usd={124342.79} eth={92.977} />
		</div>
	);
};
