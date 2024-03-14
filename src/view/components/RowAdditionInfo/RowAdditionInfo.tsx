import { FC } from 'react';
import { IconArrowTopEmptyLong, IconEther } from 'src/assets/icons';
import { tAdditionData } from 'src/typed/types';
import { useAppSelector } from 'src/hooks';
import './RowAdditionInfo.scss';

export const RowAdditionInfo: FC<tAdditionData> = ({ image, title, price, className }) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	return (
		<div className={`addition-item ${className} addition-item--${themeMode}`}>
			<span className="addition-item__image">{image}</span>
			<div className="addition-item__info">
				<span className="addition-item__info_title">{title}</span>
				{price.percent ? (
					<p className="addition-item__info_percent">
						<IconEther /> {price.value}
						<span className={`percent percent--${price.duration ? 'up' : 'down'}`}>
							<IconArrowTopEmptyLong fill={price.duration ? '#ADCA5C' : '#FF7676'} />
							{price.percent}
						</span>
					</p>
				) : (
					<p className="addition-item__info_price">
						<span>{price.value}</span>
						<span
							className={`addition-price addition-price--${price.duration ? 'up' : 'down'
								}`}
						>
							{price.addition_value}
						</span>
					</p>
				)}
			</div>
		</div>
	);
};
