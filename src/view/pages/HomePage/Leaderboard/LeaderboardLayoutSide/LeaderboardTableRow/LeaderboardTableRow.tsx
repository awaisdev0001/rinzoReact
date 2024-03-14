import { FC } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { IconEther } from 'src/assets/icons';
import { splitAddress } from 'src/helpers';
import { tTopRows } from '../../types';

import { IconRedirect } from 'src/assets/icons/IconRedirect';
import { useNavigate } from 'react-router-dom';

interface IProps {
    data: tTopRows;
    idx: number;
    sortName: string;
}

export const LeaderboardTableRow: FC<IProps> = ({ data, idx, sortName }) => {
    const navigate = useNavigate();
    return (
        <TableRow className="table__row">
            <TableCell component="th" scope="row">
                <div className="table__row_content">
                    <span className="table__row_content-number">{idx + 1}</span>
                    <img
                        className="table__row_content-img"
                        src={data.collection.imageUrl}
                        alt="collection"
                    />
                    <div className="table__row_content--medium">
                        <div>
                            <div className="link" onClick={() => {
                                navigate(`/wallet/${data.wallet_address}`)
                            }}>
                                {splitAddress(data.wallet_address)}
                            </div>
                            <a
                                href="https://etherscan.io/"
                                target="_blank"
                                rel="noreferrer"
                                className="table__row_content-icon"
                            >
                                <IconRedirect className="redirect" />
                            </a>
                        </div>
                        <p className="table__row_content--additional table__row_content--additional-mobile-hidden">
                            <span>Spend</span>
                            {data.spent}
                        </p>
                        <p className="table__row_content--additional table__row_content--additional-mobile-hidden">
                            <span>Mints</span>
                            {data.mints}
                        </p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="tablet-hidden" />
            <TableCell>
                <p
                    className={`table__row_content table__row_content--left  table__row_content-mobile-center ${sortName === 'portfolio_value' ? 'table__row_content--active' : ''
                        }`}
                >
                    <span className="table__row_content-icon--first">
                        <IconEther />
                    </span>
                    {data.portfolio_value}
                </p>
            </TableCell>
            <TableCell className="mobile-hidden">
                <p
                    className={`table__row_content table__row_content--left ${sortName === 'pnl' ? 'table__row_content--active' : ''
                        }`}
                >
                    <span className="table__row_content-icon--first">
                        <IconEther />
                    </span>
                    {data.pnl}
                </p>
            </TableCell>
            <TableCell className="mobile-hidden">
                <p
                    className={`table__row_content table__row_content--center ${sortName === 'winning_trades' ? 'table__row_content--active' : ''
                        }`}
                >
                    {data.winning_trades}
                </p>
            </TableCell>
            <TableCell className="mobile-hidden">
                <p
                    className={`table__row_content table__row_content--center ${sortName === 'losing_trades' ? 'table__row_content--active' : ''
                        }`}
                >
                    {data.losing_trades}
                </p>
            </TableCell>
            <TableCell className="tablet-hidden">
                <p className="table__row_content table__row_content--left">{data.spent}</p>
            </TableCell>
            <TableCell className="tablet-hidden" />
            <TableCell className="tablet-hidden">
                <p className="table__row_content table__row_content--left">{data.mints}</p>
            </TableCell>
        </TableRow>
    );
};
