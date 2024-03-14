import { FC } from 'react';
import './SwitchToggleButton.scss';
import { IInput } from 'src/typed/interfaces';

type IProps = IInput;

export const SwitchToggleButton: FC<IProps> = () => {
	return (
		<label className="switch__toggle__button">
			<input className="switch__toggle__button_input" type="checkbox" />
			<span className="switch__toggle__button__slider round" />
		</label>
	);
};
