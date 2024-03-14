import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { TableRow, TableCell } from '@mui/material';
import { EventType, BaseButton, CollapseButton } from 'src/view/components';
import { IconEther, IconRedirect } from 'src/assets/icons';

import { splitAddress } from 'src/helpers';
import { tHistoryRows } from '../../../types';

interface IProps {
	data: tHistoryRows;
	sortName: string;
	setOpen: (args: any) => any | void;
}

export const HistoryRow: FC<IProps> = ({ data, sortName, setOpen }) => {
	const navigate = useNavigate();
	return (
		<TableRow
			onClick={() => {
				setOpen(data.id);
			}}
			className={`table__row table__row--with-click mobile ${data.open && 'table__row--with-click--active'
				} ${data.className ? 'table__row--' + data.className : ''} `}
		>
			<TableCell className="tablet-hidden">
				<p className="table__row_content table__row_content--center">
					<EventType type={data.event} text={data.event} />
				</p>
			</TableCell>
			<TableCell>
				<p className="table__row_content table__row_content--center table__row_content-markets">
					{data.market.map((el, idx) => {
						return <img src={el} key={`market-${idx}`} alt="market" />;
					})}
				</p>
			</TableCell>
			<TableCell>
				<div className="table__row_content table__row_content-cell">
					<div className="table__row_content">
						<img
							className="table__row_content-img"
							src={data.nft.imageUrl}
							alt="collection"
						/>
						<div className="table__row_content--medium table__row_content--medium-small">
							<p>
								<button
									onClick={event => {
										event.stopPropagation();
										navigate('/nft');
									}}
									className="link"
								>
									{data.nft.name}
								</button>
							</p>
							<p
								onClick={event => {
									event.stopPropagation();
									navigate(`/collection/${data.collection.slug}`);
								}}
								className="subtitle subtitle--hovered"
							>
								{data.collection.name}
							</p>
						</div>
					</div>
					<p className="table__row_content--additional-tablet-visible">
						<EventType type={data.event} text={data.event} />
					</p>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden" />
			<TableCell>
				<div
					className={`table__row_content table__row_content--bold table__row_content--left ${sortName === 'profitability' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<p>
							<span className="icon icon--small icon--left">
								<IconEther />
							</span>
							{data.profitability}
						</p>
						<p
							style={{ marginBottom: '30px', paddingTop: '2px' }}
							className={`table__row_content--additional-mobile-visible table__row_content-percent ${data.lost_gain.duration
								? 'table__row_content-percent--up'
								: 'table__row_content-percent--down'
								}`}
						>
							{data.lost_gain.duration ? '+' : '-'}
							{data.lost_gain.value}%
						</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden">
				<div
					className={`table__row_content table__row_content--left ${sortName === 'gas_spent' ? 'table__row_content--active' : ''
						}`}
				>
					<span className="icon icon--small icon--left">
						<IconEther />
					</span>
					{data.gas_spent}
				</div>
			</TableCell>
			<TableCell className="mobile-hidden">
				<p
					className={`table__row_content table__row_content-mobile-column table__row_content--left ${sortName === 'lost_gain' ? 'table__row_content--active' : ''
						} table__row_content-percent ${data.lost_gain.duration
							? 'table__row_content-percent--up'
							: 'table__row_content-percent--down'
						}`}
				>
					{data.lost_gain.duration ? '+' : '-'}
					{data.lost_gain.value}%
				</p>
			</TableCell>
			<TableCell className="mobile-hidden">
				<p
					className={`table__row_content table__row_content-mobile-column table__row_content--left ${sortName === 'lost_gain' ? 'table__row_content--active' : ''
						}`}
				>
					{data.total_made}
				</p>
			</TableCell>
			<TableCell className="mobile-hidden">
				<p className="table__row_content table__row_content--center">
					<BaseButton
						className="button--icon button--outline button--outline-xxs button--outline-transparent button--outline-transparent-primary"
						text={splitAddress(data.transaction_ID.address)}
						icon={<IconRedirect />}
						onClick={() => {
							alert('View transaction');
						}}
					/>
				</p>
			</TableCell>
			<TableCell className="tablet-hidden">
				<p className="table__row_content table__row_content--tertiary table__row_content--left">
					{data.date}
				</p>
			</TableCell>
			<TableCell align="center" className="mobile-visible">
				<div className="table__row_content table__row_content--center">
					<CollapseButton
						color="white"
						isCollapse={data.open}
						onClick={() => {
							setOpen(data.id);
						}}
					/>
				</div>
			</TableCell>
		</TableRow>
	);
};
