import { FC, forwardRef } from 'react';
import './BurgerMenu.scss';
import { IInput } from 'src/typed/interfaces';

type iBurgerMenu = IInput;

export const BurgerMenu: FC<iBurgerMenu> = forwardRef<HTMLInputElement, iBurgerMenu>(
	({ value, onChange, checked, onClick }, ref) => {
		return (
			<div className="burger-menu" onClick={onClick}>
				<input
					id="burger-menu__toggle"
					className="burger-menu__toggle"
					ref={ref}
					value={value}
					checked={checked}
					onChange={onChange}
					onClick={onClick}
					type="checkbox"
				/>
				<label className="burger-menu__btn" htmlFor="burger-menu__toggle">
					<span className="burger-menu__item" />
				</label>
			</div>
		);
	}
);

BurgerMenu.displayName = 'BurgerMenu';
