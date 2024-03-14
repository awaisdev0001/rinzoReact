import { FC, ChangeEventHandler } from 'react';
import { IconSun, IconMoon } from 'src/assets/icons';
import './BackgroundMode.scss';
interface IProps {
	id: string;
	defaultMode: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const BackgroundMode: FC<IProps> = ({ id, defaultMode, onChange }) => {
	return (
		<div className="background-mode">
			<input
				type="checkbox"
				id={id}
				checked={defaultMode}
				onChange={e => {
					onChange(e);
				}}
			/>
			<label className="background-mode__toggle" htmlFor={id}>
				<span className="background-mode__pic">
					<IconSun />
				</span>
				<span className="background-mode__pic">
					<IconMoon />
				</span>
			</label>
		</div>
	);
};

BackgroundMode.displayName = 'BackgroundMode';
