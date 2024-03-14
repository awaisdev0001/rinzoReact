import { FC, ReactNode } from 'react';

interface IProps {
	items: {
		url?: string;
		image: string;
		title: string;
		duration?: string;
		additionData?: ReactNode;
		data?: string | number;
	}[];
	title?: string;
}

export const TooltipList: FC<IProps> = ({ items, title }) => {
	return (
		<div className="tooltip-list">
			{title && <p className="tooltip-list__title">{title}</p>}
			{items.map(el => {
				return (
					<div key={el.title} className="tooltip-list__item">
						<a
							href={el.url}
							target="_blank"
							rel="noreferrer"
							className="tooltip-list__item_link"
						>
							<img src={el.image} alt={el.title} />
							{el.title}
						</a>
						<span className="tooltip-list__item_right">
							{el.additionData && (
								<span className="tooltip-list__item_addition">
									{el.additionData}
								</span>
							)}
							<span className="tooltip-list__item_data">{el.data}</span>
						</span>
					</div>
				);
			})}
		</div>
	);
};
