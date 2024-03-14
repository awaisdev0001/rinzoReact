import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';
type tProps = IIcon;

export const IconArrowTopEmptyShort: FC<tProps> = ({ width, height }) => {
    return (
        <svg
            width={width || 40}
            height={height || 40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.33 23.6026C13.7205 23.9931 14.3537 23.9931 14.7442 23.6026L20.0371 18.3097L25.33 23.6026C25.7205 23.9931 26.3537 23.9931 26.7442 23.6026C27.1347 23.2121 27.1347 22.5789 26.7442 22.1884L20.7442 16.1884C20.3537 15.7979 19.7205 15.7979 19.33 16.1884L13.33 22.1884C12.9395 22.5789 12.9395 23.2121 13.33 23.6026Z"
            />
        </svg>
    );
};
