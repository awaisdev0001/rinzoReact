import { FC, Fragment } from 'react';
import {
	Paper,
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Collapse,
	Button,
} from '@mui/material';
import { tTableHeader } from 'src/typed/types';
import { BaseButton, TableHeader, TimeLeft } from 'src/view/components';
import { OffersReceivedRow } from './OffersReceivedRow';
import { tableRows } from '../data';
import { IconEther, IconRedirect } from 'src/assets/icons';
import { tOffersTableRow } from '../types';
import { toLocaleUS } from 'src/helpers';

interface IProps {
	headerItems: tTableHeader[];
	rowsItems: tOffersTableRow[];
	onCheck: (args: { val: boolean; id: number | string }) => void;
	checked: boolean;
	sort: (args: any) => any | void;
	order: string;
	sortName: string;

	cancelListing: (args: number | string) => void;
}

export const OffersReceivedTable: FC<IProps> = ({
	headerItems,
	checked,
	rowsItems,
	sort,
	order,
	sortName,
	onCheck,
	cancelListing,
}) => {

	const setSorting = (val: string | number) => {};

	return (
    <TableContainer
      style={{ marginTop: 32 }}
      component={Paper}
      className="mui-table"
    >
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
          {rowsItems.map((item, index) => (
            <Fragment key={`table-row-activity-${item.id}`}>
              <OffersReceivedRow
                onCheck={(val: boolean) => onCheck({ val, id: item.id })}
                data={item}
                cancelListing={() => {
                  cancelListing(item.id);
                }}
              />

              <TableRow
                key="table-row-part-2"
                className="table__row table__row--tablet"
              >
                <TableCell
                  style={{ padding: '0' }}
                  colSpan={16}
                  className="overflow-hidden"
                >
                  <Collapse
                    in={true}
                    timeout="auto"
                    unmountOnExit
                    className="mui-collapse"
                  >
                    <div className="table__row_addition table__row_addition--white">
                      <div className="table__row_addition-list table__row_addition-list-tablet-visible">
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big table__row_addition-list__item-top">
                          <p className="table__row_addition-list__item-title ">
                            Price Purchased
                          </p>
                          <div className="table__row_addition-list__item-flex table__row_addition-list__item-flex">
                            <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                              {toLocaleUS(item.pricePurchased)}
                            </p>
                            <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                              <BaseButton
                                className="button--icon-right button--left button--outline  button--outline-transparent button--outline-transparent-primary"
                                text={'View Transaction'}
                                icon={<IconRedirect />}
                                onClick={() => {
                                  alert('View transaction');
                                }}
                              />
                            </p>
                          </div>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <p className="table__row_addition-list__item-title ">
                            Offer Amount
                          </p>
                          <p className="table__row_addition-list__item-flex">
                            <span className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                              <span className="table__row_content-icon--first">
                                <IconEther />
                              </span>
                              {toLocaleUS(item.offerAmount.eth)}
                              <span className="subtitle">
                                ${toLocaleUS(item.offerAmount.usd)}
                              </span>
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <p className="table__row_addition-list__item-title ">
                            PNL
                          </p>
                          <p
                            className={`table__row_addition-list__item-percent table__row_addition-list__item-percent--medium ${
                              item.pnl.duration
                                ? 'table__row_addition-list__item-percent--up'
                                : 'table__row_addition-list__item-percent--down'
                            }`}
                          >
                            {item.pnl.duration ? '+' : '-'}$
                            {toLocaleUS(item.pnl.price)}
                          </p>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <p className="table__row_addition-list__item-title ">
                            Date
                          </p>
                          <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                            {item.item.collection.date}
                          </p>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <p className="table__row_addition-list__item-title ">
                            Expiration Time
                          </p>
                          <div className="table__row_addition-list__item-flex time-left">
                            <TimeLeft date={item.date as string} />
                          </div>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <p className="table__row_addition-list__item-title ">
                            Floor Difference
                          </p>
                          <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                            <span className="table__row_content-icon--first">
                              <IconEther />
                            </span>
                            {item.floorDifference.eth}
                            <span className="subtitle">
                              ${toLocaleUS(item.floorDifference.usd)}
                            </span>
                            <span
                              className={`table__row_addition-list__item-percent table__row_addition-list__item-percent--small table__row_addition-list__item-percent--up`}
                            >
                              {item.floorDifference.percent}%
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <p className="table__row_addition-list__item-title ">
                            Estimation Difference
                          </p>
                          <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                            <span className="table__row_content-icon--first">
                              <IconEther />
                            </span>
                            {toLocaleUS(item.estimationDifference.eth)}
                            <span className="subtitle">
                              ${toLocaleUS(item.estimationDifference.usd)}
                            </span>
                            <span
                              className={`table__row_addition-list__item-percent table__row_addition-list__item-percent--small table__row_addition-list__item-percent--up`}
                            >
                              {item.estimationDifference.percent}%
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <p className="table__row_addition-list__item-title">
                            Marketplace
                          </p>
                          <p className="table__row_addition-list-markets">
                            {item.markets.map((el, idx) => {
                              return (
                                <a
                                  key={`market-${idx}`}
                                  href={el.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="table__row_addition-list-markets-link"
                                >
                                  <img src={el.image} alt={el.name} />
                                  {el.name}
                                </a>
                              );
                            })}
                          </p>
                        </div>

                        <div className="table__row_addition-list__item table__row_addition-list__item--first-big">
                          <Button
                            className="mui-button mui-button--xs mui-button--fulwidth mui-button--outline mui-button--outline-green"
                            onClick={() => cancelListing(item.id)}
                          >
                            Accept
                          </Button>
                          <Button
                            className="mui-button mui-button--xs mui-button--fulwidth mui-button--outline mui-button--outline-secondary"
                            onClick={() => cancelListing(item.id)}
                          >
                            Ignore
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
