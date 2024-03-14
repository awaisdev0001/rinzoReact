import { FC } from 'react';
import './InfoBlock.scss';

interface IProps {
	el: {
		title: string;
		desc?: string;
		list?: string[];
		icon: { url: string; color: string };
	};
}
export const InfoBlock: FC<IProps> = ({ el }) => {
	const { title, desc, list, icon } = el;
	return (
		<div className="hero-info">
			<div className={`hero-info__icon hero-info__icon--${icon.color}`}>
				<img src={icon.url} />
			</div>
			<h4 className="hero-info__title">{title}</h4>
			<h6 className="hero-info__desc">{desc}</h6>
			{list && (
				<ul className="hero-info__list">
					{list.map((item, idx) => {
						return (
							<li className="hero-info__list_item" key={`list-item-${idx}`}>
								{item}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
