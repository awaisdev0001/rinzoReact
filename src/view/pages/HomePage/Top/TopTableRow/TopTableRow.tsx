import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { TableRow, TableCell } from '@mui/material';
import { IconArrowTopEmptyLong, IconEther } from 'src/assets/icons';

import { tTopRows } from '../types';
import { CollapseButton } from 'src/view/components';
interface IProps {
  data: tTopRows;
  sortName: string;
  setOpen: (args: any) => any | void;
}

export const TopTableRow: FC<IProps> = ({ data, sortName, setOpen }) => {
  const navigate = useNavigate();
  const changePage = (path: string) => {
    navigate(`/collection/${path}`);
  };
  return (
    <TableRow
      className={`table__row table__row--with-click desktop ${
        data.open ? 'table__row--active' : ''
      }`}
      onClick={() => {
        setOpen(data.id);
      }}
    >
      <TableCell component="th" scope="row">
        <div
          className={`table__row_content ${
            sortName === 'name' ? 'table__row_content--active' : ''
          }`}
        >
          <img
            className="table__row_content-img"
            src={data.collection.imageUrl}
            alt="collection"
          />
          <button
            onClick={() => {
              changePage(data.collection.contract_address);
            }}
            className="link"
          >
            {data.collection.name}
          </button>
        </div>
      </TableCell>
      <TableCell>
        <p
          className={`table__row_content table__row_content-mobile-column table__row_content--left ${
            sortName === 'volume' ? 'table__row_content--active' : ''
          }`}
        >
          <span className="table__row_content-icon--first">
            <IconEther />
          </span>
          {data.volume.value}
          <span
            className={`table__row_content-percent ${
              data.volume.duration
                ? 'table__row_content-percent--up'
                : 'table__row_content-percent--down'
            }`}
          >
            {data.volume.percent}
          </span>
        </p>
      </TableCell>
      <TableCell>
        <p
          className={`table__row_content table__row_content-mobile-column table__row_content--left ${
            sortName === 'floor_price' ? 'table__row_content--active' : ''
          }`}
        >
          <span className="table__row_content-icon--first">
            <IconEther />
          </span>
          {data.floor_price.value}
          <span
            className={`table__row_content-percent ${
              data.floor_price.duration
                ? 'table__row_content-percent--up'
                : 'table__row_content-percent--down'
            }`}
          >
            {data.floor_price.percent}
          </span>
        </p>
      </TableCell>
      <TableCell className="mobile-hidden">
        <p
          className={`table__row_content table__row_content--center ${
            sortName === 'owners' ? 'table__row_content--active' : ''
          }`}
        >
          {data.owners.value}
          <span
            className={`table__row_content-percent ${
              data.owners.duration
                ? 'table__row_content-percent--up'
                : 'table__row_content-percent--down'
            }`}
          >
            {data.owners.percent}
          </span>
        </p>
      </TableCell>
      <TableCell className="mobile-hidden">
        <p
          className={`table__row_content table__row_content--center ${
            sortName === 'smart_wallets' ? 'table__row_content--active' : ''
          }`}
        >
          {data.smart_wallets.value}
          <span
            className={`table__row_content-percent ${
              data.smart_wallets.duration
                ? 'table__row_content-percent--up'
                : 'table__row_content-percent--down'
            }`}
          >
            {data.smart_wallets.percent}
          </span>
        </p>
      </TableCell>
      <TableCell className="mobile-hidden">
        <p
          className={`table__row_content table__row_content--center ${
            sortName === 'sales' ? 'table__row_content--active' : ''
          }`}
        >
          {data.sales?.value}
          <span
            className={`table__row_content-percent ${
              data.sales?.duration
                ? 'table__row_content-percent--up'
                : 'table__row_content-percent--down'
            }`}
          >
            {data.sales?.percent}
          </span>
        </p>
      </TableCell>
      <TableCell className="mobile-hidden">
        <p className="table__row_content table__row_content--center">
          <span style={{ transform: data.outlook ? 'none' : 'rotate(180deg)' }}>
            <IconArrowTopEmptyLong
              fill={data.outlook ? '#ADCA5C' : '#FF7676'}
            />
          </span>
        </p>
      </TableCell>
      <TableCell align="center" className="same-padding">
        <div className="table__row_content table__row_content--center">
          <CollapseButton
            color="white"
            isCollapse={data.open}
            onClick={() => {
              setOpen(data.id);
            }}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};
