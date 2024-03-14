import { FC } from 'react';
import '../Rarity.scss';

interface IProps {
	el: {
		image: string;
		title: string;
		list: string[];
		sponsors?: { image: string; name: string }[];
		background?: string;
	};
}

export const ListCard: FC<IProps> = ({ el }) => {
	return (
		<div className={`rarity-block ${el.sponsors && 'rarity-block--sponsors'}`}>
			<div className="rarity-block__header">
				<span
					className="rarity-block__header_image"
					style={{ backgroundImage: `url(${el.image})` }}
				></span>
				<h4 className="rarity-block__header_title">{el.title}</h4>
			</div>
			<ul className="rarity-block__list">
				{el.list.map((el, idx) => {
					return (
						<li key={`rarity-info-${idx}`} className="rarity-block__list_item">
							{el}
						</li>
					);
				})}
			</ul>
			<div
				className={`rarity-block__footer`}
				style={{ backgroundImage: `url(${el.background})` }}
			>
				{el.sponsors?.map((item, idx) => {
					return (
						<div key={`rarity-sponsors-${idx}`} className="rarity-block__footer_item">
							<span
								className="rarity-block__footer_item-image"
								style={{ backgroundImage: `url(${item.image})` }}
							></span>
							<p className="rarity-block__footer_item-title">{item.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
