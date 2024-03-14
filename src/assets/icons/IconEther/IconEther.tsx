import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';
type tProps = IIcon;

export const IconEther: FC<tProps> = ({ className, width, height }) => {
    return (
        <svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`eth ${className}`}
        >
            <g clipPath="url(#clip0_837_115227)">
                <g opacity="0.6">
                    <path d="M7.92273 5.91113L3.01465 8.14331L7.92273 11.043L12.8289 8.14331L7.92273 5.91113Z" />
                </g>
                <g opacity="0.45">
                    <path d="M3.01465 8.14348L7.92273 11.0432V0L3.01465 8.14348Z" />
                </g>
                <g opacity="0.8">
                    <path d="M7.92285 0V11.0432L12.829 8.14348L7.92285 0Z" />
                </g>
                <g opacity="0.45">
                    <path d="M3.01465 9.07324L7.92273 15.9878V11.9729L3.01465 9.07324Z" />
                </g>
                <g opacity="0.8">
                    <path d="M7.92285 11.9729V15.9878L12.8329 9.07324L7.92285 11.9729Z" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_837_115227">
                    <rect width="9.84384" height="16" fill="white" transform="translate(3)" />
                </clipPath>
            </defs>
        </svg>
    );
};
