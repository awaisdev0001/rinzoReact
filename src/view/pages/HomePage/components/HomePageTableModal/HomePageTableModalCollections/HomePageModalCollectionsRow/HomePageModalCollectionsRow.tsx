import { FC } from 'react';
import './HomePageModalCollectionsRow.scss';

interface IProps {
	imageSrc: string;
	rowTitle: string;
	collectionNumber: string | number;
}

export const HomePageModalCollectionsRow: FC<IProps> = ({
	imageSrc,
	collectionNumber,
	rowTitle,
}) => {
	return (
		<div className="sweep__modal__collections__row">
			<div className="sweep__modal__collections__row-imageTitle">
				<img
					className="sweep__modal__collections__row-img"
					src={imageSrc}
					alt="modalCollectionimg"
				/>
				<p className="sweep__modal__collections__row-title">{rowTitle}</p>
			</div>

			<div className="sweep__modal__collections__row-collectionNumber">
				<p className="sweep__modal__collections__row-collectionNumber-par">
					{collectionNumber}
				</p>
			</div>
		</div>
	);
};
