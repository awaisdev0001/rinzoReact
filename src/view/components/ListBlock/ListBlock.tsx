import { FC } from 'react';
import './ListBlock.scss';
interface IProps {
	items: string[];
	title: string;
	className?: string;
}
export const ListBlock: FC<IProps> = ({ items, title, className }) => {
	return (
		<div className={`list-block ${className}`}>
			<h4 className="list-block__title">{title}</h4>
			<ul className={`list-block__list ${items.length > 2 && 'list-block__list-collumn'}`}>
				{items.map((el, idx) => {
					return (
						<li key={`list-${idx}`} className="list-block__list_item">
							<span className="list-block__list_item-count">{idx + 1}</span>
							<p className="list-block__list_item-text">{el}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
