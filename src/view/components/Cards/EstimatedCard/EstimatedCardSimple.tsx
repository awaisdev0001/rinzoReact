import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import openSea from 'src/assets/images/markets/market1.svg';
import pic from 'src/assets/images/NFT/nft.png';
import { IconArrowTopEmptyLong, IconDiamond, IconEther, IconRank } from 'src/assets/icons';
import { tCollectionItem } from 'src/typed/types';
import { useAppSelector } from 'src/hooks';
import './EstimatedCard.scss';
import { toLocaleUS } from 'src/helpers';
import { Grid } from '@mui/material';
import { PlaceholderImage } from 'src/view/components/PlaceholderImage';
import { MarketsIconList } from 'src/view/components/MarketsIconList';
import { removeDuplicatesFromArray } from 'src/helpers/array';
import { marketplaceList } from 'src/config';
interface IProps extends tCollectionItem {
	className?: string;
	//onClickItem: tCollectionItem;
}

export const EstimatedCardSimple: FC<IProps> = ({
	id,
	name,
	collection,
	imageUrl,
	rank,
	score,
	priceETH,
	priceUSD,
	estimatedPriceUSD,
	estimatedPriceETH,
	estimatePercent,
	checked,
	//onClickItem,
	className,
	listings
}) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const navigate = useNavigate();

	const urlBuilder = (base: string, path: string, params: any[]) => {
		return (`${base}/${params[0]}/${params[1]}/${path}`)
	}

	const cdnUrl = (path: string, params: any[]) => {
		return urlBuilder('https://cdn.rinzo.io', path, params);
	}

	return (
		<Grid item xs={1}>
			<div
				className={`estimated-card ${className}`}
			>
				<div className="estimated-card__image">
					{listings && (
						<MarketsIconList
							markets={removeDuplicatesFromArray(
								listings.map(
								(el) =>
									marketplaceList.find((m) => m.id === el.market)?.image ?? ""
								)
							)}
							className="estimated-card__image_icon"
						/>
					)}
					<PlaceholderImage
						src={cdnUrl('image', [collection?.contract_address, collection?.token_id.toString()])}
						// src="https://cdn.rinzo.io/0xfcad2859f3e602d4cfb9aca35465a618f9009f7b/1607/image"
						className="estimated-card__image_thumb"
						alt="estimated-card__image"
					/>
					{/* <img
						src={cdnUrl('/image', [collection?.contract_address, collection?.token_id.toString()])}
						className="estimated-card__image_thumb"
						onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = pic
						  }}
						alt="estimated-card__image"
					/> */}
				</div>
				<h6
					className="estimated-card__name"
					onClick={event => {
						event.stopPropagation();
						navigate(`/collection/${collection?.slug}/${collection?.token_id}`);
					}}
				>
					{name || `${collection?.name} #${collection?.token_id}`}
				</h6>
				<p
					className="estimated-card__collection"
					onClick={event => {
						event.stopPropagation();
						navigate(`/collection/${collection?.slug}`);
					}}
				>
					{collection?.name || "#" + collection?.token_id}
				</p>
				<div className="estimated-card__estimation">
					<div className="estimated-card__estimation_price">
						<div className="estimated-card__estimation_price-left">
							<div className="estimated-card__star">
								<span className="estimated-card__estimation_price-icon">
									<IconRank />
								</span>
								<p>{toLocaleUS(rank)}</p>
							</div>
							<div className="estimated-card__diamond">
								<span className="estimated-card__estimation_price-icon">
									<IconDiamond />
								</span>
								<p>{toLocaleUS(score)}</p>
							</div>
						</div>
						<div className="estimated-card__estimation_price-right">
							<div className="estimated-card__ether">
								<IconEther />
								<p>{toLocaleUS(priceETH)}</p>
							</div>
						</div>
					</div>

					{/**
					 * Commented out for now, will be enabled after ML has been implemented
					 */}
					{/* <div
						className={`estimated-card__estimation_info ${themeMode} estimated-card__estimation_info--${estimatePercent.duration ? 'up' : 'down'
							}`}
					>
						<p>
							Estimated
							<span className="estimated-card__estimation_info-eth">
								<IconEther className="black" />
							</span>
							{toLocaleUS(estimatedPriceETH)}
							<span
								className={`estimated-card__info_percent estimated-card__info_percent--${estimatePercent.duration ? 'up' : 'down'
									}`}
							>
								<IconArrowTopEmptyLong />
								{estimatePercent.value}%
							</span>
						</p>
					</div> */}

				</div>
			</div>
		</Grid>
	);
};
