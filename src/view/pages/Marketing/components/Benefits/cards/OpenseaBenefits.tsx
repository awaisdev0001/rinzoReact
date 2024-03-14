import { IconEther } from 'src/assets/icons';
import { openSeaBenefits } from '../../../data';
import { FeeList } from '../FeeList';
import { YouPay } from '../YouPay';

export const OpenseaBenefits = () => {
	return (
		<div className="benefit-card">
			<div className="benefit-card__image">
				<img src={openSeaBenefits.imageUrl} alt="" className="benefit-card__image_thumb" />
			</div>
			<div className="benefit-card__content benefit-card__content--small">
				<h6 className="benefit-card__name--small">{openSeaBenefits.name}</h6>
				<div className="benefit-card__ends">
					<div className="benefit-card__ends_block">
						<p className="benefit-card__ends_price">Price</p>
						<div className="benefit-card__ether">
							<IconEther className="eth--only-black" />
							<p>{openSeaBenefits.priceETH}</p>
						</div>
					</div>
					<p className="benefit-card__ends_text">Ends in {openSeaBenefits.ends}</p>
				</div>
			</div>
			<FeeList
				gasFee={openSeaBenefits.gasFee}
				royalty={openSeaBenefits.royalty}
				platformFee={openSeaBenefits.platformFee}
				color="red"
			/>
			<YouPay color="red" usd={139870.76} eth={104.588} />
		</div>
	);
};
