import { FC, MouseEvent } from 'react';
import { IconArrowTopEmptyShort } from 'src/assets/icons';

import './CollapseButton.scss';
interface IProps {
	size?: string;
	color?: string;
	isCollapse: boolean | undefined;
	onClick: (args?: MouseEvent<any>) => any | void;
}
export const CollapseButton: FC<IProps> = ({ color, isCollapse, onClick }) => {
	return (
		<button
			className={`collapse-button collapse-button--${color}
                collapse-button--${color}-${isCollapse ? 'open' : 'close'}
            `}
			onClick={() => onClick()}
		>
			<IconArrowTopEmptyShort />
		</button>
	);
};
