import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';
import '../Icon.scss';
export const IconDiamondBig: FC<IIcon> = ({ className }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`diamond-circle ${className}`}
        >
            <path d="M8.00048 0L1.07227 4V12L8.00048 16L14.9287 12V4L8.00048 0Z" className="dark" />
            <path d="M8.00048 8V0L1.07227 4L8.00048 8Z" className="medium" />
            <path d="M1.07227 4V12L8.00048 8L1.07227 4Z" className="dark" />
            <path d="M14.9282 4L8 8L14.9282 12V4Z" className="medium" />
            <path d="M8.00048 8L1.07227 12L8.00048 16V8Z" className="medium" />
            <path d="M8 16L14.9282 12L8 8V16Z" className="dark" />
            <path
                d="M11.9099 10.2567V5.74184L7.99988 3.48438L4.08984 5.74184V10.2567L7.99988 12.5142L11.9099 10.2567Z"
                className="light"
            />
            <path d="M11.91 10.2567V5.74184L8 3.48438V12.5142L11.91 10.2567Z" className="light" />
        </svg>
    );
};
