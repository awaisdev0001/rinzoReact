import { FC } from 'react';

import { PopupCardItem, CustomPagination } from 'src/view/components';

import { HomePageModalItemsTable } from './HomePageModalItemsTable';

import { sweepModalItemsArr } from './data';
import './SweepTableModalItems.scss';

export const HomePageTableModalItems: FC = () => {
	return (
		<div className="sweep__table__modal__items-overlay">
			<div
				style={sweepModalItemsArr.length >= 30 ? { marginTop: 0 } : {}}
				className="sweep__table__modal__items"
			>
				{sweepModalItemsArr.length < 30 && (
					<h2 className="sweep__table__modal__items-title">Items</h2>
				)}
				{sweepModalItemsArr.length <= 30 ? (
					<div className="sweep__table__modal__items-wrap">
						{sweepModalItemsArr.map((item, index) => (
							<PopupCardItem
								key={index + item.cardNumber}
								cardImage={item.cardImg}
								cardNumber={item.cardNumber}
								cardTitle={item.cardTitle}
							/>
						))}
					</div>
				) : (
					<>
						<HomePageModalItemsTable items={sweepModalItemsArr} />
					</>
				)}
			</div>
			<div className="sweep__table__modal__pagination_wrap">
				{sweepModalItemsArr.length > 6 && <CustomPagination pageCount={3} />}
			</div>
		</div>
	);
};
