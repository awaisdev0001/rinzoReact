import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TableCell, TableRow } from '@mui/material';
import { BaseButton, MainCheckbox, TimeLeft } from 'src/view/components';
import { tOffersTableRow } from '../../types';
import { IconEther, IconRedirect } from 'src/assets/icons';
import './OffersReceivedRow.scss';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	data: tOffersTableRow;
	onCheck: (args: boolean) => void;
	cancelListing: (args?: MouseEvent<any>) => void;
}

export const OffersReceivedRow: FC<IProps> = ({ data, onCheck, cancelListing }) => {
	const condition = 'offer_amount';
	const navigate = useNavigate();

	return (
		<TableRow className="table__row table__row--no-border-mobile table__row--big">
			<TableCell>
				<div
					className="table__row_content table__row_content--center"
					style={{ padding: '0 10px' }}
				>
					<MainCheckbox
						checked={data.checked}
						onChange={e => {
							onCheck(e.target.checked);
						}}
					/>
				</div>
			</TableCell>
			<TableCell>
				<div className="table__row_content">
					<img className="table__row_content-img" src={data.item.imageUrl} alt="" />
					<div className="table__row_content-cell table__row_content-cell-tablet-row">
						<div className="table__row_content--medium table__row_content--medium-tablet-full">
							<button
								onClick={() => {
									navigate('/nft');
								}}
								className="link"
							>
								{data.item.name}
							</button>
							<button
								onClick={() => {
									navigate(`/collection/${data.item.collection.slug}`);
								}}
								className="subtitle subtitle--hovered"
							>
								{data.item.collection.name}
							</button>
							<span className="subtitle tablet-hidden">
								{data.item.collection.date}
							</span>
						</div>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div className="table__row_content table__row_content--center">
					<div className="table__row_content-cell table__row_content-cell-tablet-row">
						<div className="table__row_content--medium table__row_content--medium-m">
							<p className="semi-bold">{toLocaleUS(data.pricePurchased)}</p>
							<p style={{ marginTop: '2px' }}>
								<BaseButton
									className="button--icon-right button--outline  button--outline-transparent button--outline-transparent-primary"
									text={'View Transaction'}
									icon={<IconRedirect />}
									onClick={() => {
										alert('View transaction');
									}}
								/>
							</p>
						</div>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div
					// className={`table__row_content table__row_content--left${
					//     condition === 'offer_amount' ? 'table__row_content--active' : ''
					// }`}
					className="table__row_content table__row_content--center"
				>
					<div className="table__row_content-cell">
						<p className="semi-bold">
							<span className="table__row_content-icon--first">
								<IconEther />
							</span>
							{toLocaleUS(data.offerAmount.eth)}
						</p>
						<span className="subtitle">${toLocaleUS(data.offerAmount.usd)}</span>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div className="table__row_content-cell">
					<div className="table__row_content-cell-flex">
						<p
							style={{ marginLeft: '0px' }}
							className={`table__row_content-percent ${data.pnl.duration
									? 'table__row_content-percent--up'
									: 'table__row_content-percent--down'
								}`}
						>
							{data.pnl.duration ? '+' : '-'}${toLocaleUS(data.pnl.price)}
						</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div
					// className={`table__row_content ${
					//   sortName === 'expiration_time' ? 'table__row_content--active' : ''
					// }`}
					className="table__row_content table__row_content--center"
				>
					<TimeLeft date={data.date as string} />
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div className={`table__row_content table__row_content--center`}>
					<div className="table__row_content-cell">
						<p
							className={`table__row_content-percent ${data?.floorDifference?.duration
									? 'table__row_content-percent--up'
									: 'table__row_content-percent--down'
								}`}
						>
							{data?.floorDifference?.percent}%
						</p>
						<p className="table__row_content-cell-flex">
							<span className="table__row_content-icon--first">
								<IconEther />
							</span>
							{toLocaleUS(data.floorDifference.eth)}
							<span className="subtitle" style={{ marginLeft: '8px' }}>
								${toLocaleUS(data.floorDifference.usd)}
							</span>
						</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div className={`table__row_content table__row_content--center`}>
					<div className="table__row_content-cell">
						<p
							className={`table__row_content-percent ${data.estimationDifference.duration
									? 'table__row_content-percent--up'
									: 'table__row_content-percent--down'
								}`}
						>
							{data.estimationDifference.percent}%
						</p>
						<p className="table__row_content-cell-flex">
							<span className="table__row_content-icon--first">
								<IconEther />
							</span>
							{toLocaleUS(data.estimationDifference.eth)}
							<span className="subtitle" style={{ marginLeft: '8px' }}>
								${toLocaleUS(data.estimationDifference.usd)}
							</span>
						</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div className="table__row_content table__row_content--center">
					{data.markets.map((el, idx) => {
						return <img src={el.image} alt="" key={`market-${idx}`} />;
					})}
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div className="offers__table-buttons">
					<Button
						className="mui-button mui-button--xs mui-button--outline mui-button--outline-green"
						onClick={() => cancelListing()}
					>
						Accept
					</Button>
					<Button
						className="mui-button mui-button--xs mui-button--outline mui-button--outline-secondary"
						onClick={() => cancelListing()}
					>
						Ignore
					</Button>
				</div>
			</TableCell>
		</TableRow>
	);
};
