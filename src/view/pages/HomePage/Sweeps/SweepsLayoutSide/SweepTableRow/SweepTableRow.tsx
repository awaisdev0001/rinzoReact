import { FC } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { IconEther, IconAddressCheck } from 'src/assets/icons';
import { splitAddress } from 'src/helpers';
import { tTopRows } from '../../types';

import { BaseTooltip } from 'src/view/components';

interface IProps {
	data: tTopRows;
	sortName: string;
	openPopUp: (arg: string | number) => void;
	onItemClick?: (arg: tTopRows) => void;
}

export const SweepTableRow: FC<IProps> = ({ data, sortName, openPopUp, onItemClick }) => {
	return (
		<TableRow
			className="table__row table__row--clickable"
			onClick={() => {
				openPopUp(data.id);
				if (onItemClick) {
					onItemClick(data);
				}
			}}
		>
			<TableCell>
				<p className="table__row_content table__row_content--center table__row_content-markets">
					{data.market.map((el, idx) => {
						return <img src={el} key={`market-${idx}`} alt={el} />;
					})}
				</p>
			</TableCell>
			<TableCell component="th" scope="row" className="mobile-padding">
				<div className="table__row_content">
					<img
						className="table__row_content-img"
						src={data.collection.imageUrl}
						alt="table__row_content-img"
					/>
					<div className="table__row_content--medium">
						<p>
							<a href="#" className="link">
								{data.collection.name}
							</a>
						</p>
						<p className="table__row_content--additional">
							{data.items} Items
							<span className="table__row_content--additional-second">
								{data.date}
							</span>
						</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<p
					className={`table__row_content table__row_content--left ${sortName === 'items' ? 'table__row_content--active' : ''
						}`}
				>
					{data.items}
				</p>
			</TableCell>
			<TableCell />
			<TableCell>
				<p
					className={`table__row_content table__row_content--left ${sortName === 'value' ? 'table__row_content--active' : ''
						}`}
				>
					<span className="table__row_content-icon--first">
						<IconEther />
					</span>
					{data.value}
				</p>
			</TableCell>
			<TableCell className="mobile-hidden" />
			<TableCell className="mobile-hidden">
				<div className="table__row_content table__row_content--secondary table__row_content--left">
					{splitAddress(data.sweeper.address)}
					{data.sweeper.check && (
						<span style={{ marginLeft: '6px' }}>
							<BaseTooltip text="Verified on Rinzo">
								<IconAddressCheck />
							</BaseTooltip>
						</span>
					)}
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<p className="table__row_content table__row_content--tertiary table__row_content--left">
					{data.date}
				</p>
			</TableCell>
			<TableCell className="mobile-hidden" />
		</TableRow>
	);
};
