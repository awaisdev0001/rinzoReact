import { FC } from 'react';
import { EventType } from 'src/view/components';
import { formatDate, splitAddress, toLocaleUS, weiToEther } from "src/helpers";
import { IconEther } from 'src/assets/icons';
import { tActivity } from '../../../types';

import './ActivityCarts.scss';
import { tNFTResult } from 'src/typed/requests/NFT/tNFT';
import { useAppSelector } from 'src/hooks';

interface IProps {
  items: tNFTResult[];
}

export const ActivityCarts: FC<IProps> = ({ items }) => {
	const { currency } = useAppSelector((state) => state.currencyReducer);

	return (
		<div className="nft-activity__cards">
			{items.map((el, id) => {
				return (
					<div className="nft-activity__cards_item" key={`card-${id}`}>
						<div className="nft-activity__cards_item-header">
							<EventType type={el?.type} text={el?.type} />
						<p>
						  {currency === "usd" ? `$${toLocaleUS(el?.priceUsd)}` :
						    (<span className="icon">
						      <IconEther />
						      {weiToEther(el?.priceWei)}
						    </span>)
						  }
						</p>
						</div>
						<p className="nft-activity__cards_item-date">{formatDate(el?.timestamp)}</p>
						<div className="nft-activity__cards_item-bottom">
							<div className="nft-activity__cards_item-bottom-block">
								<span>FROM</span>
								<p>{splitAddress(el?.seller)}</p>
							</div>
							{el?.buyer && (
								<div className="nft-activity__cards_item-bottom-block">
									<span>TO</span>
									<p>{splitAddress(el?.buyer)}</p>
								</div>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};
