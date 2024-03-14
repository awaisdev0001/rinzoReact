import { IconArrowRight, IconEther } from 'src/assets/icons';
import { gemBenefits } from '../../../data';
import { FeeList } from '../FeeList';
import { YouPay } from '../YouPay';

export const GemBenefits = () => {
	return (
		<div className="benefit-card">
			<div className="benefit-card__image">
				<img src={gemBenefits.imageUrl} alt="" className="benefit-card__image_thumb" />
			</div>
			<div className="benefit-card__content">
				<h6 className="benefit-card__name--light">{gemBenefits.name}</h6>
				<div className="benefit-card__details">
					<div className="benefit-card__ether benefit-card__ether--right">
						<p>{gemBenefits.priceETH}</p>
						<IconEther className="eth--only-black" />
					</div>
					<div className="benefit-card__details_button">
						Details
						<span className="benefit-card__details_button-arrow">
							<IconArrowRight />
						</span>
					</div>
				</div>
			</div>
			<FeeList
				gasFee={gemBenefits.gasFee}
				royalty={gemBenefits.royalty}
				platformFee={gemBenefits.platformFee}
				color="red"
			/>
			<YouPay color="red" usd={139870.76} eth={104.588} />
		</div>
	);
};
