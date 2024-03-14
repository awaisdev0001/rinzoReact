import { FC, forwardRef } from 'react';
import { IInput } from 'src/typed/interfaces';
import './MainCheckbox.scss';

interface iMainCheckbox extends IInput {
	labelText?: string;
}

export const MainCheckbox: FC<iMainCheckbox> = forwardRef<HTMLInputElement, iMainCheckbox>(
	({ value, onChange, checked, onClick, labelText }, ref) => {
		return (
			<div className="main__checkbox">
				<label className="main__checkbox__label">
					<input
						ref={ref}
						value={value}
						checked={checked}
						onChange={e => {
							if (onChange) {
								onChange(e);
							}
						}}
						onClick={onClick}
						type="checkbox"
					/>
					<span className="main__checkbox-material">
						<span
							className={
								checked ? 'main__checkbox-check' : 'main__checkbox-unchecked'
							}
						/>
					</span>
					{labelText && <span className="main__checkbox__label_text">{labelText}</span>}
				</label>
			</div>
		);
	}
);

MainCheckbox.displayName = 'CostumeCheckbox';
