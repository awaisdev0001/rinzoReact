import { FC, ReactNode, useState, MouseEvent } from 'react';
import { tPercentages } from '../utils';
import './SubtotalCartPercentageButton.scss';

interface IProps {
    isActive: tPercentages;
    children: tPercentages;
    selectPercentage: (arg: tPercentages) => void;
}

export const SubtotalCartPercentageButton: FC<IProps> = ({
    isActive,
    children,
    selectPercentage,
}) => {
    const percentBtnClickHandler = (e: MouseEvent<HTMLInputElement>) => {
        const result = (e.target as HTMLInputElement).value as tPercentages;
        selectPercentage(result);
    };

    return (
        <input
            onClick={e => percentBtnClickHandler(e)}
            className={`subtotal__cart__percentage${
                isActive === children ? ' clicked-active' : ''
            }`}
            type="button"
            value={children}
        />
    );
};
