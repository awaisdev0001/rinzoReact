import { FC, ReactNode } from 'react';
import './MarketingCenterCard.scss';

interface IProps {
	icon: ReactNode;
	title: string;
	isGreenBorder: boolean;
}

export const MarketingCenterCard: FC<IProps> = ({ icon, title, isGreenBorder }) => {
	return (
		<div className={`marketing-center__card ${isGreenBorder ? '' : 'none__border'}`}>
			{icon}
			<h1>{title}</h1>
		</div>
	);
};
