import { FC } from 'react';

import iconSuccess from 'src/assets/images/marketingPage/success.svg';
import iconError from 'src/assets/images/marketingPage/error.svg';

import './TableBenefits.scss';
interface IProps {
	items: { title: string; data?: boolean[]; text?: string[] }[];
}
export const TableBenefits: FC<IProps> = ({ items }) => {
	return (
		<div className="benefits-table__table">
			{items.map((el, idx) => {
				return (
					<div className="benefits-table__table_item" key={`row-${idx}`}>
						<div className="benefits-table__table_item_left">
							<p>{el.title}</p>
						</div>
						<div className="benefits-table__table_item_right">
							{el.data?.map((item, idx) => {
								return (
									<div
										key={`data-${idx}`}
										className="benefits-table__table_item_right-icon"
									>
										{item ? (
											<img src={iconSuccess} alt="success" />
										) : (
											<img src={iconError} alt="error" />
										)}
									</div>
								);
							})}
							{el.text?.map((item, idx) => {
								return (
									<div
										key={`data-${idx}`}
										className="benefits-table__table_item_right-text"
									>
										{item}
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};
