import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';

type IProps = IIcon;

export const IconGreenArrowUp: FC<IProps> = ({ fill }) => {
    return (
        <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.99968 0.666992C7.45991 0.666992 7.83301 1.11004 7.83301 1.65658L7.83301 15.5107C7.83301 16.0573 7.45991 16.5003 6.99967 16.5003C6.53944 16.5003 6.16634 16.0573 6.16634 15.5107L6.16634 1.65658C6.16634 1.11004 6.53944 0.666992 6.99968 0.666992Z"
                fill={fill || '#8EB136'}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4219 7.92291C13.0965 8.24835 12.5689 8.24835 12.2434 7.92291L6.99935 2.67884L1.75527 7.92291C1.42983 8.24835 0.902197 8.24835 0.57676 7.92291C0.251322 7.59748 0.251322 7.06984 0.57676 6.7444L6.41009 0.91107C6.73553 0.585633 7.26317 0.585633 7.5886 0.91107L13.4219 6.7444C13.7474 7.06984 13.7474 7.59748 13.4219 7.92291Z"
                fill={fill || '#8EB136'}
            />
        </svg>
    );
};
