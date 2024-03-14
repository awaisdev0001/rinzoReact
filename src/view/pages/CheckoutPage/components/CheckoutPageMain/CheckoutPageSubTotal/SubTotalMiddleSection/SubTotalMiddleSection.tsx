import { FC } from 'react';
import { IconBeatingHeart, IconEllips } from 'src/assets/icons';
import './SubTotalMiddleSection.scss';

export const SubTotalMiddleSection: FC = () => {
	return (
		<div className="subtotal__middle__section">
			<h3 className="subtotal__middle__section-main">
				You saving <span>$183.96</span> with Rinzo <IconBeatingHeart />
			</h3>
			<p className="subtotal__middle__section-par">
				Gas Saving <span className="subtotal__middle__span">$115.53</span>
				<span className="subtotal__icon__span">
					<IconEllips />
				</span>
				Exchange <span className="subtotal__middle__span">$25.34</span>
				<span className="subtotal__icon__span">
					<IconEllips />
				</span>
				Royalty Fees <span className="subtotal__middle__span">$43.09</span>
			</p>
		</div>
	);
};
