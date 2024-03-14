import { FC } from 'react';
import { HomePageModalCollectionsRow } from './HomePageModalCollectionsRow';
import { useAppSelector } from 'src/hooks';
import './HomePageTableModalCollections.scss';
import { tPopupCollectionState } from 'src/store';

export const HomePageTableModalCollections: FC = () => {
	const { selectedCollection } = useAppSelector<tPopupCollectionState>(
		state => state.tableCollectionReducer
	);
	return (
		<div className="sweep__table__modal__collections">
			<div className="sweep__table__modal__collections-rowsTitle">
				<h2 className="collections-rowsTitle_font">Collection</h2>
			</div>
			<div className="sweep__table__modal__collections-rows">
				<HomePageModalCollectionsRow
					collectionNumber={selectedCollection.collectionNumber}
					imageSrc={selectedCollection.thumb}
					rowTitle={selectedCollection.title}
				/>
			</div>
		</div>
	);
};
