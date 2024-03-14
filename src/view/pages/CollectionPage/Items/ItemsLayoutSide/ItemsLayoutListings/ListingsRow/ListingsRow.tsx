import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { TableRow, TableCell, Button } from '@mui/material';
import { BaseTooltip, MainCheckbox, TooltipList } from 'src/view/components';
import { IconArrowTopEmptyLong, IconEther } from 'src/assets/icons';

import { tListingRow } from '../types';
import { toLocaleUS } from 'src/helpers';

interface IProps {
  data: tListingRow;
  sortName: string;
  onCheck: (args: boolean) => void;
  cancelListing: (args?: MouseEvent<any>) => void;
}

export const ListingsRow: FC<IProps> = ({
  data,
  sortName,
  onCheck,
  cancelListing,
}) => {
  const navigate = useNavigate();
  return (
    <TableRow className="table__row table__row--no-border-mobile table__row--big">
      <TableCell>
        <div
          className="table__row_content table__row_content--center"
          style={{ padding: '0 10px' }}
        >
          <MainCheckbox
            checked={data.checked}
            onChange={(e) => {
              onCheck(e.target.checked);
            }}
          />
        </div>
      </TableCell>
      <TableCell>
        <div className="table__row_content table__row_content--ultra-big">
          <img
            className="table__row_content-img"
            src={data.item.imageUrl}
            alt=""
          />
          <div className="table__row_content-cell table__row_content-cell-tablet-row">
            <div className="table__row_content--medium table__row_content--medium-m">
              <button
                onClick={() => {
                  navigate('/nft');
                }}
                className="link"
              >
                {data.item.name}
              </button>
              <button
                onClick={() => {
                  navigate(`/collection/${data.item.collection.slug}`);
                }}
                className="subtitle subtitle--hovered"
              >
                {data.item.collection.name}
              </button>
              <p className="table__row_addition-list-markets tablet-visible">
                {data?.markets.map((el, idx) => {
                  return (
                    <a
                      key={`market-${idx}`}
                      href={el.url}
                      target="_blank"
                      rel="noreferrer"
                      className="table__row_addition-list-markets-link"
                    >
                      <img src={el.image} alt={el.title} />
                      {el.title}
                    </a>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="tablet-hidden">
        <div className="table__row_content table__row_content--center">
          <BaseTooltip
            tooltipChildren={<TooltipList items={data.markets} />}
            width={'150px'}
          >
            <span className="table__row_content-markets">
              {data.markets.map((el, idx) => {
                return (
                  <img src={el.image} key={`market-${idx}`} alt="market" />
                );
              })}
            </span>
          </BaseTooltip>
        </div>
      </TableCell>
      <TableCell className="tablet-hidden" />
      <TableCell className="mobile-hidden">
        <div
          className={`table__row_content ${sortName === 'last_item_price' ? 'table__row_content--active' : ''
            }`}
        >
          <div className="table__row_content-cell">
            <p>
              <span className="table__row_content-icon--first">
                <IconEther />
              </span>
              {data.last_item_price.eth}
            </p>
            <span className="subtitle">${data.last_item_price.usd}</span>
          </div>
        </div>
      </TableCell>
      <TableCell className="mobile-hidden">
        <div className="table__row_content">
          <div className="table__row_content-cell">
            <p className="table__row_content-cell-flex bold">
              <span className="table__row_content-icon--first">
                <IconEther />
              </span>
              {data.list_price.eth}
            </p>
            <p className="big-size">
              <span className="subtitle">Floor:</span> {data.list_price.eth} ETH{' '}
              <span className="subtitle">
                ${toLocaleUS(data.list_price.usd)}
              </span>
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell className="tablet-visible mobile-hidden" />
      <TableCell className="mobile-hidden">
        <div
          className={`table__row_content ${sortName === 'floor_price' ? 'table__row_content--active' : ''
            }`}
        >
          <div className="table__row_content-cell">
            <p className="table__row_content-cell-flex">
              <span className="table__row_content-icon--first">
                <IconEther />
              </span>
              {data.floor_price.eth}
              <span
                className={`table__row_content-percent ${data.floor_price.duration
                  ? 'table__row_content-percent--up'
                  : 'table__row_content-percent--down'
                  }`}
              >
                <span className="icon">
                  <IconArrowTopEmptyLong />
                </span>
                {data.floor_price.percent}%
              </span>
            </p>
            <span className="subtitle">${data.floor_price.usd}</span>
          </div>
        </div>
      </TableCell>
      <TableCell className="tablet-visible mobile-hidden" />
      <TableCell className="mobile-hidden">
        <div
          className={`table__row_content  ${sortName === 'projected_profit' ? 'table__row_content--active' : ''
            }`}
        >
          <div className="table__row_content-cell">
            <p className="table__row_content-cell-flex">
              <span className="table__row_content-icon--first">
                <IconEther />
              </span>
              {data.projected_profit.eth}
              <span
                className={`table__row_content-percent ${data.projected_profit.duration
                  ? 'table__row_content-percent--up'
                  : 'table__row_content-percent--down'
                  }`}
              >
                <span className="icon">
                  <IconArrowTopEmptyLong />
                </span>
                {data.projected_profit.percent}%
              </span>
            </p>
            <span className="subtitle">${data.projected_profit.usd}</span>
          </div>
        </div>
      </TableCell>
      <TableCell className="mobile-hidden">
        <Button
          className="mui-button mui-button--xs mui-button--outline mui-button--outline-secondary"
          onClick={() => {
            cancelListing();
          }}
        >
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};
