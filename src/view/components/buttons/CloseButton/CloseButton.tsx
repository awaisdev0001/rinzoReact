import { FC, MouseEvent } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './CloseButton.scss';

interface IProps {
	onClick: (args?: MouseEvent<any>) => any | void;
	className?: string;
}

export const CloseButton: FC<IProps> = ({ onClick, className }) => {
	return (
		<IconButton onClick={onClick} className={`icon-close ${className}`}>
			<CloseIcon />
		</IconButton>
	);
};
