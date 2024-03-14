import { FC } from 'react';
import { feeArr } from '../../data';
import { FeesCard } from './FeesCard';
import './Fees.scss';

export const Fees: FC = () => {
	return (
		<div className="marketing-fees">
			{feeArr.map((item, index) => (
				<FeesCard
					images={item.images}
					icon={item.icon}
					title={item.title}
					avgCostPerItem={item.avgCostPerItem}
					gasAmount={item.gasAmount}
					usdPrice={item.usdPrice}
					key={index}
				/>
			))}
		</div>
	);
};
