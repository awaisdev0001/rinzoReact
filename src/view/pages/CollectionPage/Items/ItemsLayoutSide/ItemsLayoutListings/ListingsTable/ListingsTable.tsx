import { FC, Fragment } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Collapse,
  Button,
} from '@mui/material';
import { TableHeader } from 'src/view/components';
import { ListingsRow } from '../ListingsRow';
import { tListingRow } from '../types';
import { tTableHeader } from 'src/typed/types';
import { IconEther } from 'src/assets/icons';
import { toLocaleUS } from 'src/helpers';

interface IProps {
  headerItems: tTableHeader[];
  sort: (args: any) => any | void;
  order: string;
  sortName: string;
  rowsItems: tListingRow[];
  onCheck: (args: { val: boolean; id: number | string }) => void;
  checked: boolean;
  cancelListing: (args: number | string) => void;
}

export const ListingsTable: FC<IProps> = ({
  headerItems,
  sort,
  order,
  sortName,
  rowsItems,
  onCheck,
  checked,
  cancelListing,
}) => {
 const setSorting = (val: string | number) => {};
  return (
    <TableContainer component={Paper} className="mui-table">
      <Table aria-label="collapsible table">
        <TableHeader
          items={headerItems}
          sort={sort}
          order={order}
          sortName={sortName}
          className="mui-table--small__th"
          checked={checked}
          onCheck={(val) => onCheck({ val, id: 'all' })}
          setSorting={setSorting}
        />
        <TableBody>
          {rowsItems.map((row) => (
            <Fragment key={`table-row-activity-${row.id}`}>
              <ListingsRow
                key={`table-row-sweeps-${row.id}`}
                data={row}
                sortName={sortName}
                onCheck={(val) => onCheck({ val, id: row.id })}
                cancelListing={() => {
                  cancelListing(row.id);
                }}
              />
              <TableRow
                key="table-row-part-2"
                className="table__row table__row--mobile"
              >
                <TableCell
                  style={{ padding: 0 }}
                  colSpan={8}
                  className="overflow-hidden"
                >
                  <Collapse
                    in={true}
                    timeout="auto"
                    unmountOnExit
                    className="mui-collapse"
                  >
                    <div className="table__row_addition table__row_addition--white">
                      <div className="table__row_addition-list">
                        <div className="table__row_addition-list__item table__row_addition-list__item-top">
                          <p className="table__row_addition-list__item-title">
                            Marketplace
                          </p>
                          <p className="table__row_addition-list-markets">
                            {row.markets.map((el, idx) => {
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
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Last Item Price
                          </p>
                          <p className="table__row_addition-list__item-flex">
                            <span className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                              <span className="table__row_content-icon--first">
                                <IconEther />
                              </span>
                              {row.last_item_price.eth}
                              <span className="subtitle">
                                ${row.last_item_price.usd}
                              </span>
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item-top">
                          <p
                            className="table__row_addition-list__item-title"
                            style={{ paddingTop: '5px' }}
                          >
                            List Price
                          </p>
                          <div className="table__row_addition-list__item-column">
                            <p className="table__row_content-cell-flex bold">
                              <span className="table__row_content-icon--first">
                                <IconEther />
                              </span>
                              {row.list_price.eth}
                            </p>
                            <p
                              className="big-size"
                              style={{ marginTop: '4px' }}
                            >
                              <span className="subtitle">Floor:</span>{' '}
                              {row.list_price.eth} ETH{' '}
                              <span className="subtitle">
                                ${toLocaleUS(row.list_price.usd)}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Floor Price
                          </p>
                          <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                            <span className="table__row_content-icon--first">
                              <IconEther />
                            </span>
                            {row.floor_price.eth}
                            <span className="subtitle">
                              ${row.floor_price.usd}
                            </span>
                            <span
                              className={`table__row_addition-list__item-percent table__row_addition-list__item-percent--small ${
                                row.floor_price.duration
                                  ? 'table__row_addition-list__item-percent--up'
                                  : 'table__row_addition-list__item-percent--down'
                              }`}
                            >
                              {row.floor_price.percent}%
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Projected Profit
                          </p>
                          <div className="table__row_addition-list__item-flex">
                            <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                              <span className="table__row_content-icon--first">
                                <IconEther />
                              </span>
                              {row.projected_profit.eth}
                              <span className="subtitle">
                                ${row.projected_profit.usd}
                              </span>
                              <span
                                className={`table__row_addition-list__item-percent table__row_addition-list__item-percent--small ${
                                  row.projected_profit.duration
                                    ? 'table__row_addition-list__item-percent--up'
                                    : 'table__row_addition-list__item-percent--down'
                                }`}
                              >
                                {row.projected_profit.percent}%
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="table__row_addition-list__item">
                          <Button
                            className="mui-button mui-button--xs mui-button--outline mui-button--outline-secondary"
                            onClick={() => {
                              cancelListing(row.id);
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
