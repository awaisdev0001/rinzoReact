import { IconEther } from 'src/assets/icons';
import { Benefits } from '../Benefits';

import { feeStructureData } from '../../data';

import star from 'src/assets/images/marketingPage/star.svg';
import './FeeStructure.scss';

export const FeeStructure = () => {
	return (
		<div className="fee-structure">
			<div className="fee-structure__info">
				{feeStructureData.map((el, idx) => {
					return (
						<div key={`fee-${idx}`} className="fee-structure__info_item">
							<h4 className="fee-structure__info_item-header">{el.title}</h4>
							<ul className="fee-structure__info_item-list">
								<li className="fee-structure__info_item-list-item">
									<p>Transactions</p>
									<span>{el.transactions}</span>
								</li>
								<li className="fee-structure__info_item-list-item">
									<p>ETH</p>
									<span>
										<span className="icon">
											<IconEther className="eth--only-black" />
										</span>
										{el.eth}
									</span>
								</li>
								<li className="fee-structure__info_item-list-item">
									<p>USD</p>
									<span>${el.usd}</span>
								</li>
							</ul>
						</div>
					);
				})}
			</div>
			<div className="fee-structure__notice">
				<img src={star} alt="star" /> Across 543 953 Transactions from 325 523 Exchanges
				with OpenSea, LooksRare, X2Y2 and more
			</div>
			<Benefits />
		</div>
	);
};
