import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { TableRow, TableCell } from '@mui/material';
import { BaseTooltip } from 'src/view/components';
import { IconDiamond, IconDiamondBig } from 'src/assets/icons';

import { tTraitsRows } from '../../types';
import { INFTTraits } from 'src/typed/requests/NFT';

interface IProps {
  data: INFTTraits;
  collection: string;
  sortName: string;
}

export const NftTableRow: FC<IProps> = ({ data, collection, sortName }) => {
	const navigate = useNavigate();
	return (
		<TableRow className="table__row table__row--big">
			<TableCell>
				<div className="table__row_content table__row_content-cell">
					<p
						className={`table__row_content table__row_content--secondary table__row_content--secondary-big ${sortName === 'trait_type' ? 'table__row_content--active' : ''
							}`}
					>
						{data.type}
					</p>
					<div className="table__row_content--additional--row table__row_content--additional-mobile-visible">
						<button
							className="big-size link link--bold link--mobile"
							onClick={event => {
								event.stopPropagation();
								navigate(`/collection/${collection}`);
							}}
						>
							{data.value}
						</button>
						{data.type && (
							<div style={{ marginLeft: '10px' }}>
								<BaseTooltip
									textClassName="capitalize"
									text={`${data.type} Rare`}
								>
									<IconDiamondBig
										className={`spinning diamond-circle--${data.type}`}
									/>
								</BaseTooltip>
							</div>
						)}
					</div>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden" />
			<TableCell className="tablet-hidden" />
			<TableCell className="mobile-hidden">
				<div className="table__row_content table__row_content--left">
					<button
						className="big-size link link--bold"
						onClick={event => {
							event.stopPropagation();
							navigate(`/collection/${collection}`);
						}}
					>
						{data.value}
					</button>
					{data.type && (
						<div style={{ marginLeft: '10px' }}>
							<BaseTooltip
								textClassName="capitalize"
								text={`${data.type} Rare`}
							>
								<IconDiamondBig
									className={`spinning diamond-circle--${data.type}`}
								/>
							</BaseTooltip>
						</div>
					)}
				</div>
			</TableCell>
			<TableCell>
				<p
					className={`table__row_content table__row_content--secondary table__row_content--left ${sortName === 'occurrences' ? 'table__row_content--active' : ''
						}`}
				>
					{data.occurrences}
				</p>
			</TableCell>
			<TableCell className="mobile-hidden" />
			<TableCell className="tablet-hidden" />
			<TableCell>
				<div
					className={`table__row_content table__row_content--secondary table__row_content--left ${sortName === 'rarity_score' ? 'table__row_content--active' : ''
						}`}
				>
					<span className="icon icon--left">
						<IconDiamond width={17} />
					</span>
					{data.rarity}
				</div>
			</TableCell>
			<TableCell className="tablet-hidden" />
		</TableRow>
	);
};
