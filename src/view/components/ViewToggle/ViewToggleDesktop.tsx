import { FC } from 'react';
import { IconAnalytics, IconGrid, IconList } from 'src/assets/icons';

interface IProps {
	type: string;
	changeView: (arg: string) => void;
	charts?: boolean;
}
export const ViewToggleDesktop: FC<IProps> = ({ type, changeView, charts }) => {
	return (
		<div className={`view-toggle ${charts && 'view-toggle--mobile'}`}>
			<button
				className={`view-toggle__icon ${type === 'grid' ? 'view-toggle__icon--active' : ''
					}`}
				onClick={() => {
					changeView('grid');
				}}
			>
				<IconGrid />
			</button>
			<button
				className={`view-toggle__icon ${type === 'list' ? 'view-toggle__icon--active' : ''
					}`}
				onClick={() => {
					changeView('list');
				}}
			>
				<IconList />
			</button>
			{charts && (
				<button
					className={`view-toggle__icon ${type === 'chart' ? 'view-toggle__icon--active' : ''
						}`}
					onClick={() => {
						changeView('chart');
					}}
				>
					<IconAnalytics />
				</button>
			)}
		</div>
	);
};
