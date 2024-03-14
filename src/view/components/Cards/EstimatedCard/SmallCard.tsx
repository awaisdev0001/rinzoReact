import { FC, useCallback, useState } from 'react';
import openSea from 'src/assets/images/markets/market1.svg';
import { IconRedirect } from 'src/assets/icons';

import './EstimatedCard.scss';

interface IProps {
	name: string;
	collection?: {
		name: string;
		slug: string;
	};
	imageUrl: string;
	className?: string;
	onClick: (arg: any) => void;
}

export const SmallCard: FC<IProps> = ({ name, collection, imageUrl, onClick, className }) => {
	const [, updateState] = useState<boolean>();
	const forceUpdate = useCallback(() => updateState(prevState => !prevState), []);
	return (
		<div
			className={`estimated-card estimated-card--simple-version ${className}`}
			onClick={() => {
				onClick(imageUrl);
				forceUpdate();
			}}
		>
			<div className="estimated-card__image">
				<img src={openSea} className="estimated-card__image_icon" alt="open sea" />
				<img
					src={imageUrl}
					className="estimated-card__image_thumb"
					alt="estimated-card__image"
				/>
			</div>
			<div className="estimated-card__content">
				<div className="estimated-card__name-header">
					<h6 className="estimated-card__name-header_text">{name}</h6>
					<button className="estimated-card__name-header_redirect">
						<IconRedirect />
					</button>
				</div>

				{collection && <p className="estimated-card__collection">{collection.name}</p>}
			</div>
		</div>
	);
};
