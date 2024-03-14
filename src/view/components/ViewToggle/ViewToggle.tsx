import { FC } from 'react';
import { ViewToggleDesktop } from './ViewToggleDesktop';
import { ViewToggleMobile } from './ViewToggleMobile';

import './ViewToggle.scss';

interface IProps {
	type: string;
	changeView: (arg: string) => void;
	charts?: boolean;
}

export const ViewToggle: FC<IProps> = ({ type, changeView, charts }) => {
	return (
		<>
			<ViewToggleDesktop type={type} changeView={changeView} charts={charts} />
			<ViewToggleMobile type={type} changeView={changeView} charts={charts} />
		</>
	);
};
