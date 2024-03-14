import { FC, MouseEvent } from 'react';

import { TableRow, TableCell } from '@mui/material';
import {
	BaseTooltip,
	CloseButton,
	InputWithOptions,
	MainCheckbox,
	TooltipList,
	MarketsIconList,
} from 'src/view/components';
import { IconArrowTopEmptyLong, IconEther } from 'src/assets/icons';

import { tCollectionItemExtend } from 'src/typed/types';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	data: tCollectionItemExtend;
	sortName: string;
	onCheck: (args: boolean) => void;
	changeNftPriceCurrency: (args: string) => void;
	changePriceValue: (args: number | string) => void;
	cancelListing: (args?: MouseEvent<any>) => void;
}

export const ListingRow: FC<IProps> = ({
	data,
	sortName,
	onCheck,
	changeNftPriceCurrency,
	changePriceValue,
	cancelListing,
}) => {
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
					<img className="table__row_content-img" src={data.imageUrl} />
					<div className="table__row_content-cell table__row_content-cell-tablet-row">
						<div className="table__row_content--medium table__row_content--medium-m">
							<a href="#" className="link">
								{data.name}
							</a>
							{data.collection && (
								<span className="subtitle">{data.collection.name}</span>
							)}
							{data.markets && data.markets.length > 0 && (
								<BaseTooltip
									tooltipChildren={
										<TooltipList items={data.markets} title="Marketplace Fee" />
									}
									width={'160px'}
									biggerText
								>
									<div
										style={{ marginTop: '4px' }}
										className="table__row_addition-list-markets tablet-visible"
									>
										<MarketsIconList
											markets={data.markets.map(el => {
												return el.image;
											})}
											className="markets-icons--small"
										/>
									</div>
								</BaseTooltip>
							)}
						</div>
					</div>
				</div>
			</TableCell>
			<TableCell className="tablet-hidden">
				{data.markets && data.markets.length > 0 && (
					<div className="table__row_content table__row_content--center">
						<BaseTooltip
							tooltipChildren={
								<TooltipList items={data.markets} title="Marketplace Fee" />
							}
							width={'160px'}
							biggerText
						>
							<span className="table__row_content-markets">
								{data.markets.map((el, idx) => {
									return (
										<img src={el.image} key={`market-${idx}`} alt="market" />
									);
								})}
							</span>
						</BaseTooltip>
					</div>
				)}
			</TableCell>
			{/* <TableCell className="mobile-hidden">
				<div
					className={`table__row_content ${sortName === 'purchase_price' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<p>
							<span className="table__row_content-icon--first">
								<IconEther />
							</span>
							{data.purchase_price.eth}
						</p>
						<span className="subtitle">${data.purchase_price.usd}</span>
					</div>
				</div>
			</TableCell> */}
			<TableCell className="mobile-hidden">
				<div className="table__row_content">
					<div className="table__row_content-cell">
						<InputWithOptions
							maxWidth="145px"
							items={[
								{ key: 'eth', title: 'ETH' },
								{ key: 'usd', title: 'USD' },
							]}
							selectedValue={data.list_price.priceCurrency}
							onClick={key => {
								changeNftPriceCurrency(key);
							}}
							changePriceValue={key => {
								changePriceValue(key);
							}}
							inputValue={data.list_price.price}
							placeholder="0"
							disabled={!data.checked}
						/>
						<p className="big-size" style={{ marginTop: '4px' }}>
							<span className="subtitle">Floor:</span> {data.list_price.floor.eth} ETH{' '}
							<span className="subtitle">
								${toLocaleUS(data.list_price.floor.usd)}
							</span>
						</p>
					</div>
				</div>
			</TableCell>
			{/* <TableCell className="mobile-hidden">
				<div
					className={`table__row_content ${sortName === 'pnl' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<p className="table__row_content-cell-flex">
							<span
								style={{ marginLeft: '0px' }}
								className={`table__row_content-percent ${data.pnl.duration
										? 'table__row_content-percent--up'
										: 'table__row_content-percent--down'
									}`}
							>
								{data.pnl.duration ? '+' : '-'}${data.pnl.percent}
							</span>
						</p>
					</div>
				</div>
			</TableCell> */}
			{/* <TableCell className="mobile-hidden">
				<div
					className={`table__row_content  ${sortName === 'royalties' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<p className="table__row_content-cell-flex">
							<span className="table__row_content-icon--first">
								<IconEther />
							</span>
							{data.royalties.eth}
							<span
								className={`table__row_content-percent ${data.royalties.duration
										? 'table__row_content-percent--up'
										: 'table__row_content-percent--down'
									}`}
							>
								<span className="icon">
									<IconArrowTopEmptyLong />
								</span>
								{data.royalties.percent}%
							</span>
						</p>
						<span className="subtitle">${data.royalties.usd}</span>
					</div>
				</div>
			</TableCell> */}
			<TableCell>
				<CloseButton
					onClick={() => {
						cancelListing();
					}}
				/>
			</TableCell>
		</TableRow>
	);
};
