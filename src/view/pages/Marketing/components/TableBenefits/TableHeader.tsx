import { FC } from 'react';

import './TableBenefits.scss';
interface IProps {
	items: { logo: string; title: string }[];
}

export const TableHeader: FC<IProps> = ({ items }) => {
	return (
		<div className="benefits-table__header">
			{items.map((el, idx) => {
				return (
					<div className="benefits-table__header_item" key={`header-${idx}`}>
						<div
							className="benefits-table__header_item-image"
							style={{ backgroundImage: `url(${el.logo})` }}
						></div>
						<h3 className="benefits-table__header_item-name">{el.title}</h3>
					</div>
				);
			})}
		</div>
	);
};
