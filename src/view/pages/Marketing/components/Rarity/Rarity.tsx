import { ListCard, InfoCard } from './cards';

import { rarityInfo, rarityList } from '../../data';

import './Rarity.scss';
export const Rarity = () => {
	return (
		<div className="rarity">
			<div className="rarity__blocks">
				{rarityList.map((el, idx) => {
					return (
						<div key={`rarity-list-${idx}`} className="rarity__blocks_item">
							<ListCard el={el} />
						</div>
					);
				})}
			</div>
			<div className="rarity__blocks">
				{rarityInfo.map((el, idx) => {
					return (
						<div
							key={`rarity-list-${idx}`}
							className="rarity__blocks_item rarity__blocks_item--small"
						>
							<InfoCard el={el} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
