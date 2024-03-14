import { FC } from 'react';
import './MarketsIconList.scss';
interface IProps {
	markets: string[];
	className?: string;
}

export const MarketsIconList: FC<IProps> = ({ markets, className }) => {
	return (
		<p className={`markets-icons ${className}`}>
			{markets.map((el, idx) => {
				return <img src={el} key={`market-${idx}`} alt="market" />;
			})}
		</p>
	);
};
