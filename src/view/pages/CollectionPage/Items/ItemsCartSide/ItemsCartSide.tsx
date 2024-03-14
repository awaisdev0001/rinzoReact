import { FC } from 'react';
import { GlobalCart } from 'src/view/components';
import { SweepMode } from '../../components';

import { tCollectionItem, tTimeFilter } from 'src/typed/types';
import { useAppSelector } from 'src/hooks';
import { tCollectionReducer } from 'src/store/collections/reducer';
import { tCartOpenReducer } from 'src/store/layout/reducer';

interface IProps {
	sweepFilter: tTimeFilter[];
	filterPosition: string;
	changeFilter: (arg: string) => void;
	items: tCollectionItem[] | [];
}

export const ItemsCartSide: FC<IProps> = ({ sweepFilter, filterPosition, changeFilter }) => {
	const { selectedCards } = useAppSelector<tCollectionReducer>(state => state.collectionReducer);
	const { cartOpen, sweepOpen } = useAppSelector<tCartOpenReducer>(
		state => state.cartOpenReducer
	);

	return (
		<div className={`cart-block ${cartOpen && 'cart-block--open'}`}>
			{cartOpen && (
				<div className="cart-block__content">
					{sweepOpen && (
						<SweepMode
							items={sweepFilter}
							filterPosition={filterPosition}
							changeFilter={changeFilter}
						/>
					)}
					<GlobalCart items={selectedCards} />
				</div>
			)}
		</div>
	);
};
