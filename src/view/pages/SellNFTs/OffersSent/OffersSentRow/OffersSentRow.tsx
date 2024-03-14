import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { TableRow, TableCell, Button } from '@mui/material';
import { MainCheckbox, TimeLeft } from 'src/view/components';
import { IconEther } from 'src/assets/icons';

import { tOffersSentRow } from '../types';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	data: tOffersSentRow;
	sortName: string;
	onCheck: (args: boolean) => void;
	cancelListing: (args?: MouseEvent<any>) => void;
}

export const OffersSentRow: FC<IProps> = ({ data, sortName, onCheck, cancelListing }) => {
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
				<div className="table__row_content table__row_content--ultra-big">
					<img className="table__row_content-img" src={data.item.imageUrl} />
					<div className="table__row_content-cell table__row_content-cell-tablet-row">
						<div className="table__row_content--medium table__row_content--medium-m">
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
							<p className="table__row_addition-list-markets tablet-visible">
								{data.markets.map((el, idx) => {
									return (
										<a
											key={`market-${idx}`}
											href={el.url}
											target="_blank"
											rel="noreferrer"
											className="table__row_addition-list-markets-link"
										>
											<img src={el.image} alt={el.title} />
											{el.title}
										</a>
									);
								})}
							</p>
						</div>
					</div>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden">
				<div
					className={`table__row_content ${sortName === 'expiration_time' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<TimeLeft date={data.expiration_time} />
					</div>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden">
				<div
					className={`table__row_content ${sortName === 'floor_difference' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<p
							className={`table__row_content-percent ${data.floor_difference.duration
									? 'table__row_content-percent--up'
									: 'table__row_content-percent--down'
								}`}
						>
							{data.floor_difference.percent}%
						</p>
						<p className="table__row_content-cell-flex">
							<span className="table__row_content-icon--first">
								<IconEther />
							</span>
							{data.floor_difference.eth}
							<span className="subtitle" style={{ marginLeft: '8px' }}>
								${data.floor_difference.usd}
							</span>
						</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden">
				<div
					className={`table__row_content  ${sortName === 'price_difference' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<p
							className={`table__row_content-percent ${data.price_difference.duration
									? 'table__row_content-percent--up'
									: 'table__row_content-percent--down'
								}`}
						>
							{data.price_difference.percent}%
						</p>
						<p className="table__row_content-cell-flex">
							<span className="table__row_content-icon--first">
								<IconEther />
							</span>
							{data.price_difference.eth}
							<span className="subtitle" style={{ marginLeft: '8px' }}>
								${data.price_difference.usd}
							</span>
						</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				<div className="table__row_content table__row_content--center">
					<span className="table__row_content-markets">
						{data.markets.map((el, idx) => {
							return <img src={el.image} key={`market-${idx}`} alt="market" />;
						})}
					</span>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden">
				<Button
					className="mui-button mui-button--xs mui-button--outline mui-button--outline-secondary"
					onClick={() => {
						cancelListing();
					}}
				>
					Сancel Offer
				</Button>
			</TableCell>
		</TableRow>
	);
};
