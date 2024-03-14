import { FC } from 'react';
import { IconGrid, IconList } from 'src/assets/icons';

interface IProps {
	type: string;
	changeView: (arg: string) => void;
	charts?: boolean;
}
export const ViewToggleMobile: FC<IProps> = ({ type, changeView, charts }) => {
	return (
		<div className={`view-toggle-mobile ${charts && 'view-toggle-mobile--hidden'}`}>
			<button
				className={`view-toggle-mobile__icon ${type === 'list' ? 'view-toggle-mobile__icon--active' : ''
					}`}
				onClick={() => {
					changeView('grid');
				}}
			>
				<IconGrid />
			</button>
			<button
				className={`view-toggle-mobile__icon ${type === 'grid' ? 'view-toggle-mobile__icon--active' : ''
					}`}
				onClick={() => {
					changeView('list');
				}}
			>
				<IconList />
			</button>
		</div>
	);
};
