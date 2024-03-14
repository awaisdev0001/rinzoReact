import { RinzoBenefits, OpenseaBenefits, GemBenefits } from './cards';

import iconRinzo from 'src/assets/images/marketingPage/iconRinzo.svg';
import iconOpensea from 'src/assets/images/marketingPage/iconOpensea.svg';
import iconGem from 'src/assets/images/marketingPage/iconGem.svg';

import arrow from 'src/assets/images/marketingPage/arrow.svg';
import arrowSmall from 'src/assets/images/marketingPage/arrowSmall.svg';
import arrowBig from 'src/assets/images/marketingPage/arrowBig.svg';
import './style.scss';

export const Benefits = () => {
	return (
		<div className="benefits">
			<div className="benefits__items">
				<div className="benefits__items_item">
					<div className="platform">
						<div
							className="platform__image"
							style={{ backgroundImage: `url(${iconRinzo})` }}
						></div>
						<h3 className="platform__name">Rinzo</h3>
					</div>
					<RinzoBenefits />
				</div>
				<div className="benefits__items_item">
					<div className="platform">
						<div
							className="platform__image"
							style={{ backgroundImage: `url(${iconOpensea})` }}
						></div>
						<h3 className="platform__name">Opensea</h3>
					</div>
					<OpenseaBenefits />
				</div>
				<div className="benefits__items_item">
					<div className="platform">
						<div
							className="platform__image platform__image--big"
							style={{ backgroundImage: `url(${iconGem})` }}
						></div>
						<h3 className="platform__name">Gem</h3>
					</div>
					<GemBenefits />
				</div>
			</div>
			<div className="benefits__items">
				<div className="benefits__items_item benefits__items_item--centred">
					<div className="platform">
						<div
							className="platform__image"
							style={{ backgroundImage: `url(${iconRinzo})` }}
						></div>
						<h3 className="platform__name">Rinzo</h3>
					</div>
					<p className="benefits__items_item-sum benefits__items_item-sum--green">
						With <span>Rinzo</span>
					</p>
					<div className="benefits__items_item-arrow">
						<img src={arrow} />
						<img src={arrowBig} className="mobile" />
					</div>
				</div>
				<div className="benefits__items_item benefits__items_item--centred">
					<div className="platform">
						<div
							className="platform__image"
							style={{ backgroundImage: `url(${iconOpensea})` }}
						/>
						<h3 className="platform__name">Opensea</h3>
					</div>
					<p className="benefits__items_item-sum benefits__items_item-sum--red">
						You&apos;re saving
						<span> $15 528</span>
					</p>
					<div className="benefits__items_item-arrow--small">
						<img src={arrowSmall} />
						<img src={arrowBig} className="mobile" />
					</div>
				</div>
				<div className="benefits__items_item benefits__items_item--centred">
					<div className="platform">
						<div
							className="platform__image platform__image--big"
							style={{ backgroundImage: `url(${iconGem})` }}
						></div>
						<h3 className="platform__name">Gem</h3>
					</div>
					<p className="benefits__items_item-sum benefits__items_item-sum--red">
						You&apos;re saving <span> $15 528</span>
					</p>
				</div>
			</div>
		</div>
	);
};
