import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';
type tProps = IIcon;

export const IconArrowTopEmptyLong: FC<tProps> = ({ fill }) => {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill={fill}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4997 2.16699C10.9599 2.16699 11.333 2.61004 11.333 3.15658L11.333 17.0107C11.333 17.5573 10.9599 18.0003 10.4997 18.0003C10.0394 18.0003 9.66634 17.5573 9.66634 17.0107L9.66634 3.15658C9.66634 2.61004 10.0394 2.16699 10.4997 2.16699Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9219 9.42291C16.5965 9.74835 16.0689 9.74835 15.7434 9.42291L10.4993 4.17884L5.25527 9.42291C4.92983 9.74835 4.4022 9.74835 4.07676 9.42291C3.75132 9.09748 3.75132 8.56984 4.07676 8.2444L9.91009 2.41107C10.2355 2.08563 10.7632 2.08563 11.0886 2.41107L16.9219 8.2444C17.2474 8.56984 17.2474 9.09748 16.9219 9.42291Z"
                />
            </g>
        </svg>
    );
};
