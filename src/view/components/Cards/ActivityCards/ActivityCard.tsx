import { FC } from 'react';
import { IconBlueDiamond, IconEther, IconRedirect, IconStartActivity } from 'src/assets/icons';
import { EventType } from 'src/view/components/EventType';
import './ActivityCard.scss';
import { BaseButton } from 'src/view/components/buttons';
import { Link } from 'react-router-dom';
import { viewTransaction } from 'src/helpers/viewTransaction';
import { PlaceholderImage } from 'src/view/components/PlaceholderImage';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	saleType: string;
	cardNum: string;
	cardTime: string;
	cardDate: string;
	etherPrice: number | string;
	diamondPrice: number | string;
	starPrice: number | string;
	image: string;
	cardTitle: string;
	hash?: string;
	contractAddress?: string;
}

export const ActivityCard: FC<IProps> = ({
	saleType,
	cardNum,
	etherPrice,
	diamondPrice,
	starPrice,
	image,
	cardTitle,
	cardTime,
	cardDate,
	hash,
	contractAddress,
}) => {
	return (
		<div className="activity__card">
			<div className="activity__card-upper">
				<EventType type={saleType} text={saleType} />
				<div className="activity__card-upper-time">
					<p>{cardTime}</p>
					<p className="activity__card-upper-time--date">{cardDate}</p>
				</div>
			</div>
			<Link to={`/collection/${contractAddress}/${cardNum}`} className="activity__card-img">
				{/* <img src={openSea} className="activity__card-img-icon" alt="open sea" /> */}
				{/* <img src={image} className="activity__card-img-thumb" alt="sale type" /> */}
				<PlaceholderImage
					src={image}
					className="activity__card-img-thumb"
					alt="sale type"
				/>
			</Link>
			<div className="activity__card-mid">
				<h1>#{cardNum}</h1>
				<p>{cardTitle}&nbsp;</p>
			</div>
			<div className="activity__card-down">
				<div className="activity__card-down-star">
					<IconStartActivity />
					<p>{starPrice}</p>
				</div>
				<div className="activity__card-down-diamond">
					<IconBlueDiamond />
					<p>{diamondPrice}</p>
				</div>
				<div className="activity__card-down-ether">
					<IconEther />
					<p>{toLocaleUS(etherPrice)}</p>
				</div>
			</div>
			<div className="activity__card-lowest">
				{/* <BaseButton
					className="button--s button--outline button--outline-secondary"
					text="Individual Events"
					onClick={() => {
						alert('Individual Events');
					}}
				/> */}
				{hash && <BaseButton
					className="button--icon button--outline button--outline-xxs button--outline-transparent"
					text="View transaction"
					icon={<IconRedirect />}
					onClick={() => viewTransaction(hash ?? "")}
				/>}
			</div>
		</div>
	);
};
