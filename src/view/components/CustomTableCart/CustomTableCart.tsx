import { FC } from 'react';
import { BaseTooltip } from '../BaseTooltip';
import { IconInfo } from 'src/assets/icons';
import { useAppSelector, useWindowSize } from 'src/hooks';
import { CustomTableRow } from './CustomTableRow';
import './CustomTableCart.scss';

export const CustomTableCart: FC = () => {
	const { width } = useWindowSize();
	const { selectedCards } = useAppSelector(state => state.sellNFTsReducerReducer);
	return (
		<div className="custom__table__cart">
			<table className="custom__table__cart__table">
				<thead className="custom__table__cart__table-head">
					<tr className="custom__table__cart__table-head-tr">
						<th>My Cart</th>
						<th className="my__cart__middle__head">
							Token Number
							<BaseTooltip
								text={`We don’t pay collection royalties - you have 100% ownership of the NFT. If you want to support the collection out of generosity you can set a royalty fee!`}
								width={'20.6rem'}
								biggerText
							>
								<IconInfo
									height={16}
									width={16}
									fill={'#667085'}
									className="my__cart__middle__head-icon"
								/>
							</BaseTooltip>
						</th>
						<th />
						<th />
						{width < 1200 && width > 767 && <th />}
						<th>{selectedCards.length} NFTs</th>
					</tr>
				</thead>
				<tbody className="custom__table__cart__table-body">
					{selectedCards.map((item, index) => (
						<CustomTableRow key={index + '' + item.id} item={item} index={index} />
					))}
				</tbody>
			</table>
		</div>
	);
};
