import { FC } from 'react';

import image from 'src/assets/images/errors/emptyData.svg';
import '../AdditionInfo.scss';

interface IProps {
	title?: string;
	description?: string;
}

export const EmptyData: FC<IProps> = ({
	title = 'Not Found',
	description = 'Please, change search criteria',
}) => {
	return (
		<div className="additon-info">
			<div className="additon-info__image" style={{ backgroundImage: `url(${image})` }} />
			<h2 className="additon-info__title">{title}</h2>
			<p className="additon-info__description">{description}</p>
		</div>
	);
};
