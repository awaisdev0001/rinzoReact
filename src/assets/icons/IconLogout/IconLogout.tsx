import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';

type tProps = IIcon;

export const IconLogout: FC<tProps> = ({ className }) => {
    return (
        <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6.9778 12.5149H1.99438C1.68872 12.5149 1.44068 12.2668 1.44068 11.9612V1.9944C1.44068 1.68875 1.68875 1.4407 1.99438 1.4407H6.9778C7.284 1.4407 7.5315 1.1932 7.5315 0.887003C7.5315 0.580805 7.284 0.333252 6.9778 0.333252H1.99438C1.07854 0.333252 0.333252 1.07857 0.333252 1.9944V11.9612C0.333252 12.877 1.07854 13.6223 1.99438 13.6223H6.9778C7.284 13.6223 7.5315 13.3748 7.5315 13.0686C7.5315 12.7624 7.284 12.5149 6.9778 12.5149Z" />
            <path d="M12.1684 6.58373L8.80178 3.26146C8.58472 3.04662 8.23368 3.0494 8.01884 3.26701C7.80399 3.48461 7.80621 3.83511 8.02438 4.04995L10.4302 6.42425H3.98339C3.67719 6.42425 3.42969 6.67175 3.42969 6.97795C3.42969 7.28415 3.67719 7.53168 3.98339 7.53168H10.4302L8.02438 9.90598C7.80623 10.1208 7.80457 10.4713 8.01884 10.6889C8.12735 10.7986 8.27022 10.8539 8.41308 10.8539C8.55373 10.8539 8.69436 10.8008 8.80178 10.6944L12.1684 7.37217C12.2736 7.26808 12.3334 7.12631 12.3334 6.97793C12.3334 6.82959 12.2741 6.68839 12.1684 6.58373Z" />
        </svg>
    );
};