import { FC, MouseEvent } from 'react';
import { BackButton } from '../buttons';
import './ReviewUpperInfo.scss';

interface IProps {
	title: string;
	descPar: string;
	defaultClick?: boolean;
	customClickAction?: (val?: MouseEvent) => void;
}

export const ReviewUpperInfo: FC<IProps> = ({
	title,
	descPar,
	customClickAction,
	defaultClick = true,
}) => {
	return (
		<div className="review__page__upper">
			<div className="review__page__upper__back">
				<BackButton
					defaultClick={defaultClick}
					customClickAction={() => {
						return customClickAction ? customClickAction() : () => { };
					}}
				/>
			</div>
			<div className="review__page__upper__desc">
				<h1 className="review__page__upper__desc-title">{title}</h1>
				<p className="review__page__upper__desc-par">{descPar}</p>
			</div>
		</div>
	);
};
