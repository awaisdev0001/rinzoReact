import { FC } from 'react';
import { MainCheckbox } from 'src/view/components';
import { tMarketplacesExtend } from '../types';
import { useAppSelector } from 'src/hooks';
import './MarketPlaces.scss';
interface IProps {
  items: tMarketplacesExtend[];
  selectMarketPlaces: (
    item: tMarketplacesExtend,
	checked: boolean,
  ) => void;
}
export const MarketPlaces: FC<IProps> = ({ items, selectMarketPlaces }) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	return (
		<div className="marketplaces-block">
			{items.map((el, idx) => {
				return (
					<div
						className={`marketplaces-block__item marketplaces-block__item_${themeMode} ${el.checked && 'marketplaces-block__item--checked'
							}`}
						key={`marketplaces-item--${idx}`}
					>
						<div className="marketplaces-block__item_left">
							<MainCheckbox
								checked={el.checked}
								onChange={e => {
									selectMarketPlaces(el, e.target.checked);
								}}
							/>
							<img src={el.image} alt={el.title} />
							<p className="marketplaces-block__item_title">{el.title}</p>
						</div>
						<p className="marketplaces-block__item_percent">{el.percent}% Fee</p>
					</div>
				);
			})}
		</div>
	);
};
