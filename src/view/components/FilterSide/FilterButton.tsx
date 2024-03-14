import { FC, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import { IconFilter } from 'src/assets/icons';
interface IProps {
	onClick: (args?: MouseEvent<any>) => any | void;
}
export const FilterButton: FC<IProps> = ({ onClick }) => {
	return (
		<Button
			className="mui-button mui-button--s mui-button--fulwidth mui-button--outline mui-button--outline-primary"
			onClick={onClick}
			startIcon={<IconFilter />}
		>
			Filter
		</Button>
	);
};
