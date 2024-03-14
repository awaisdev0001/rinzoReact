import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';
export const IconDiamond: FC<IIcon> = ({ width }) => {
    return (
        <svg
            width={width || 20}
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_2009_62020)">
                <path
                    d="M15.8621 2.56934H4.13793L0 6.70727L10 18.4314L20 6.70727L15.8621 2.56934Z"
                    fill="#00C3FF"
                />
                <path d="M15.8621 2.56934L10 18.4314L20 6.70727L15.8621 2.56934Z" fill="#87DAFF" />
                <path d="M4.13793 2.56934L5.66734 6.70727H0L4.13793 2.56934Z" fill="#00AAF0" />
                <path
                    d="M10.0006 2.56934L5.66797 6.70727H14.3333L10.0006 2.56934Z"
                    fill="#87DAFF"
                />
                <path d="M14.332 6.70727H19.9994L15.8614 2.56934L14.332 6.70727Z" fill="#A5E9FF" />
                <path d="M0 6.70703H5.66734L10 18.4311L0 6.70703Z" fill="#0096DC" />
            </g>
            <defs>
                <clipPath id="clip0_2009_62020">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    );
};
