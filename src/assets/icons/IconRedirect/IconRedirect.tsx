import { FC } from 'react';
import { IIcon } from 'src/typed/interfaces';

type tProps = IIcon;
export const IconRedirect: FC<tProps> = ({ className }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M10.6667 16C12.6302 16 14.2222 14.408 14.2222 12.4444V9.77778C14.2222 9.28711 13.824 8.88889 13.3333 8.88889C12.8427 8.88889 12.4444 9.28711 12.4444 9.77778V12.4444C12.4444 13.4267 11.6489 14.2222 10.6667 14.2222H3.55556C2.57333 14.2222 1.77778 13.4267 1.77778 12.4444V5.33333C1.77778 4.35111 2.57333 3.55556 3.55556 3.55556H6.22222C6.71289 3.55556 7.11111 3.15733 7.11111 2.66667C7.11111 2.176 6.71289 1.77778 6.22222 1.77778H3.55556C1.592 1.77778 0 3.36978 0 5.33333V12.4444C0 14.408 1.592 16 3.55556 16H10.6667ZM7.11111 9.77778C7.33867 9.77778 7.57599 9.70133 7.75022 9.528L14.2222 3.05512V6.22222H16V0.888889C16 0.398222 15.6018 0 15.1111 0H9.77778V1.77778H12.944L6.47201 8.24978C6.12534 8.59734 6.12534 9.18044 6.47201 9.528C6.64623 9.70133 6.88356 9.77778 7.11111 9.77778Z" />
        </svg>
    );
};
