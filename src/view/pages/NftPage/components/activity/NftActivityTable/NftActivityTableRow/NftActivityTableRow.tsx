import { FC } from 'react';

import { TableRow, TableCell } from '@mui/material';
import { EventType } from 'src/view/components';
import { IconEther } from 'src/assets/icons';
import { formatDate, splitAddress, toLocaleUS, weiToEther } from 'src/helpers';
import { tNFTResult } from 'src/typed/requests/NFT/tNFT';
import { useAppSelector } from 'src/hooks';

interface IProps {
  data: tNFTResult;
  sortName: string;
}

export const NftActivityTableRow: FC<IProps> = ({ data, sortName }) => {

	const { currency } = useAppSelector((state) => state.currencyReducer);

	return (
		<TableRow className="table__row">
			<TableCell>
				<div className="table__row_content-cell">
					<div className="table__row_content-cell table__row_content-cell-justify-center">
						<EventType type={data.type} text={data.type} />
					</div>
					<p
						className="table__row_content table__row_content--additional-mobile-visible table__row_content--small"
						style={{ margin: '8px 0 0' }}
					>
						<span className="table__row_content--tertiary table__row_content--tertiary-big">
							From
						</span>
						{splitAddress(data.seller)}
					</p>
				</div>
			</TableCell>
			<TableCell>
				<div
					className={`table__row_content  ${sortName === 'price' ? 'table__row_content--active' : ''
						}`}
				>
					<div className="table__row_content-cell">
						<div className="table__row_content-cell">
							<p className="table__row_content table__row_content--bold">
  								{currency === "usd" ? `$${toLocaleUS(data.priceUsd)}` :
  								  (
  								    <span className="table__row_content-icon--first">
  								      <IconEther />
  								      {weiToEther(data.priceWei)}
  								    </span>
  								  )
  								}
							</p>

						</div>
						<div className="table__row_content--additional-mobile-visible">
							{data.seller && (
								<p
									className="table__row_content table__row_content--small"
									style={{ margin: '8px 0 0' }}
								>
									<span className="table__row_content--tertiary table__row_content--tertiary-big">
										To
									</span>
									{splitAddress(data.seller)}
								</p>
							)}
						</div>
					</div>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden" />
			<TableCell>
				<div className="table__row_content-cell">
					<p
						className={`table__row_content table__row_content--secondary table__row_content--left ${sortName === 'date' ? 'table__row_content--active' : ''
							}`}
					>
						{formatDate(data.timestamp)}
					</p>
				</div>
			</TableCell>
			<TableCell className="mobile-hidden">
				<p className="table__row_content table__row_content--small">
					{splitAddress(data.seller)}
				</p>
			</TableCell>
			<TableCell className="mobile-hidden">
				<p className="table__row_content table__row_content--small">
					{data.buyer ? splitAddress(data.buyer) : '-'}
				</p>
			</TableCell>
		</TableRow>
	);
};
