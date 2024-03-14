import { FC } from 'react';
import { IconRedirect } from 'src/assets/icons';

import { splitAddress } from 'src/helpers';
import { tInfo } from '../../types';

import './NftInfo.scss';

export const NftInfo: FC<tInfo> = ({
	contract_address,
	token_id,
	token_standard,
	blockchain,
	creator_fees,
}) => {
	return (
		<div className="nft-info">
			<h4 className="nft-info__title">NFT Info</h4>
			<ul className="nft-info__list">
				<li className="nft-info__list_item">
					<p>Contract Address</p>
					<h6 className="bold">
						{splitAddress(contract_address.address)}
						<a
							className="icon"
							href={contract_address.etherscan}
							target="_blank"
							rel="noreferrer"
						>
							<IconRedirect />
						</a>
					</h6>
				</li>
				<li className="nft-info__list_item">
					<p>Token ID</p>
					<h6>{token_id}</h6>
				</li>
				<li className="nft-info__list_item">
					<p>Token Standard</p>
					<h6>{token_standard}</h6>
				</li>
				<li className="nft-info__list_item">
					<p>Blockchain</p>
					<h6>{blockchain}</h6>
				</li>
				<li className="nft-info__list_item">
					<p>Creator Fees</p>
					<h6>{creator_fees}</h6>
				</li>
			</ul>
		</div>
	);
};
