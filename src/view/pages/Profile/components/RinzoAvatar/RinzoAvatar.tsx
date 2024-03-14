import { FC } from 'react';
import { tAvatar } from '../../types';
import './RinzoAvatar.scss';

interface IProps {
	item: tAvatar;
	onClick: (arg: any) => void;
}

export const RinzoAvatar: FC<IProps> = ({ item, onClick }) => {
	return (
		<div className="avatar">
			<div
				className="avatar__image"
				style={{ backgroundImage: `url(${item.imageUrl})` }}
				onClick={() => {
					onClick(item.imageUrl);
				}}
			/>
			<div
				className="avatar__title"
				onClick={() => {
					onClick(item.imageUrl);
				}}
			>
				{item.name}
			</div>
		</div>
	);
};
