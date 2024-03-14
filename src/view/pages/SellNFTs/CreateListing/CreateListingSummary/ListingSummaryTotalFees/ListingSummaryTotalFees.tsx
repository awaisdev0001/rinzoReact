import { FC, useRef } from 'react';
import { IconEther, IconInfo } from 'src/assets/icons';
import { toLocaleUS } from 'src/helpers';
import { BaseTooltip } from 'src/view/components';
import { tCollectionItemExtend } from 'src/typed/types';
import './ListingSummaryTotalFees.scss';

interface IProps {
	isActive: boolean;
	submitButtonHandler: (arg: boolean) => void;
	className: string;
	summaryData: tCollectionItemExtend[];
}

type tSum = {
	sumEth: number;
	sumUsd: number;
};

export const ListingSummaryTotalFees: FC<IProps> = ({
	isActive,
	submitButtonHandler,
	className,
	summaryData,
}) => {
	const feesRef = useRef<number | string>();
	const marketPlaceFees = (arr: tCollectionItemExtend[]) => {
		const markets = arr.map(item => item.markets);
		const marketsFees = markets.flatMap(item => item).map(item => item.data);
		return marketsFees.reduce((aggr: number | string, item, index): number | string => {
			if (item === '-') return '-';
			if (item === undefined) return '-';
			return +aggr + +item;
		}, 0);
	};

	const marketPlacePnl = (arr: tCollectionItemExtend[]): number => {
		return arr.reduce((aggr: number, item): number => {
			return aggr + item.pnl.percent;
		}, 0);
	};

	const totalSummary = (arr: tCollectionItemExtend[]): tSum => {
		let num: number;
		return arr.reduce(
			(aggr: tSum, item): tSum => {
				if (typeof item.priceUSD !== 'number') {
					num = parseFloat(item.priceUSD.replace(/,/g, ''));
				}
				aggr.sumEth += +item.priceETH;
				aggr.sumUsd += num;
				return aggr;
			},
			{
				sumEth: 0,
				sumUsd: 0,
			}
		) as tSum;
	};

	feesRef.current = marketPlaceFees(summaryData) === '-' ? 0 : marketPlaceFees(summaryData);

	return (
		<div className={`listing-summary-fees ${className}`}>
			{/* <div className="listing-summary-fees_fee">
				<h2>Total gas fees</h2>

				<div className="cart-overlay__body_item-info cart-overlay__body_item-info--end">
					<p className="price price--small">
						<span>
							<IconEther />
						</span>
						{toLocaleUS(0.034)}
					</p>
					<p className="tertiary">${toLocaleUS(68.86)}</p>
				</div>
			</div>
			<div className="listing-summary-fees_fee">
				<h2>Marketplace fees</h2>

				<div className="cart-overlay__body_item-info cart-overlay__body_item-info--end">
					<p className="price price--small">
						<span>
							<IconEther />
						</span>
						{toLocaleUS(marketPlaceFees(summaryData))}
					</p>
					<p className="tertiary">${toLocaleUS(68.86)}</p>
				</div>
			</div>
			<div className="listing-summary-fees_fee">
				<h2>Creator royalties</h2>

				<div className="cart-overlay__body_item-info cart-overlay__body_item-info--end">
					<p className="price price--small">
						<span>
							<IconEther />
						</span>
						{toLocaleUS(0.034)}
					</p>
					<p className="tertiary">${toLocaleUS(68.86)}</p>
				</div>
			</div>
			<div className="listing-summary-fees_fee">
				<h2>
					Estimated PNL{' '}
					<BaseTooltip
						width={'177px'}
						biggerText
						text={
							"Crypto prices are volatile and may change, while you're in profit now, if the price of crypto crashes, this will affect the estimated USD PNL"
						}
					>
						<IconInfo />
					</BaseTooltip>
				</h2>

				<div className="cart-overlay__body_item-info cart-overlay__body_item-info--end">
					<p className="price price--small">${toLocaleUS(marketPlacePnl(summaryData))}</p>
				</div>
			</div> */}

			<div className="listing-summary-fees_total">
				<div className="listing-summary-fees_total-eth">
					<h2>Total Profits</h2>
					<p className="price">
						<span>
							<IconEther />
						</span>
						{toLocaleUS(totalSummary(summaryData).sumEth)}
					</p>
				</div>
				<div className="listing-summary-fees_total-usd">
					<p>Estimate minus all fees</p>
					<div className="cart-overlay__body_item-info cart-overlay__body_item-info--end">
						<p className="tertiary">
							${toLocaleUS(totalSummary(summaryData).sumUsd - +feesRef.current)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
