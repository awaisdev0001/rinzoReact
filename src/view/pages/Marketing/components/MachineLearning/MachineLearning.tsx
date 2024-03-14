import { FC } from 'react';
import iconRinzo from 'src/assets/images/marketingPage/iconRinzo.svg';
import iconOpensea from 'src/assets/images/marketingPage/iconOpensea.svg';
import iconGem from 'src/assets/images/marketingPage/iconGem.svg';
import { IconGreenChecked, IconDangerCross } from 'src/assets/icons';
import './MachineLearning.scss';

export const MachineLearning: FC = () => {
	return (
		<div className="machine-learning">
			<div className="machine-learning__example">
				<div className="machine-learning__example__upper">
					<div className="machine-learning__example__upper__title__img">
						<img src={iconRinzo} alt="alt" />
						<h5>With Rinzo</h5>
					</div>
					<div className="machine-learning__example__upper_icon">
						<IconGreenChecked />
					</div>
				</div>
				<p className="machine-learning__example_desc">
					<span>Price Analysis and Price Prediction</span> based on AI and waste amount of
					data like data like assets sales history and a number of listings at low prices
				</p>
			</div>
			<div className="machine-learning__example">
				<div className="machine-learning__example__upper">
					<div className="machine-learning__example__upper__title__img">
						<img src={iconOpensea} alt="alt" />
						<h5>With Opensea</h5>
					</div>
					<div className="machine-learning__example__upper_icon">
						<IconDangerCross />
					</div>
				</div>
				<p className="machine-learning__example_desc">
					<span>No Price Analysis or Price Prediction.</span> Just real live price that is
					based on the opinion of the seller and the market only
				</p>
			</div>
			<div className="machine-learning__example">
				<div className="machine-learning__example__upper">
					<div className="machine-learning__example__upper__title__img">
						<img src={iconGem} alt="alt" />
						<h5>With Gem</h5>
					</div>
					<div className="machine-learning__example__upper_icon">
						<IconDangerCross />
					</div>
				</div>
				<p className="machine-learning__example_desc">
					<span>No Price Analysis or Price Prediction. </span> Just real live price that
					is based on the opinion of the seller and the market only
				</p>
			</div>
		</div>
	);
};
