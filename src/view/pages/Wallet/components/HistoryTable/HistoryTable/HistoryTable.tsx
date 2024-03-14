import { FC, Fragment, useEffect, useState } from 'react';

import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	TableContainer,
	Paper,
	Collapse,
} from '@mui/material';
import { TableHeader, BaseButton } from 'src/view/components';
import { HistoryRow } from '../HistoryRow';
import { IconEther, IconRedirect } from 'src/assets/icons';

import { tTableHeader } from 'src/typed/types';
import { tHistoryRows } from '../../../types';
import { splitAddress } from 'src/helpers';

interface IProps {
	headerItems: tTableHeader[];
	sort: (args: any) => any | void;
	order: string;
	sortName: string;
	rowsItems: tHistoryRows[];
}

export const HistoryTable: FC<IProps> = ({ headerItems, sort, order, sortName, rowsItems }) => {
	const [tableData, setTableData] = useState<tHistoryRows[]>([]);

	useEffect(() => {
		const data = rowsItems.map(el => {
			return { ...el, open: false };
		});
		setTableData(data);
	}, [rowsItems]);

	const setOpen = (val: string | number) => {
		const data = tableData.map(el => {
			return {
				...el,
				open: el.id === val ? !el.open : el.open,
			};
		});
		setTableData(data);
	};

	const setSorting = (val: string | number) => {};

	return (
    <TableContainer
      component={Paper}
      className="mui-table mui-table-without-margin"
    >
      <Table aria-label="collapsible table">
        <TableHeader
          items={headerItems}
          sort={sort}
          order={order}
          sortName={sortName}
          setSorting={setSorting}
        />
        <TableBody>
          {tableData.map((row) => (
            <Fragment key={`table-row-history-${row.id}`}>
              <HistoryRow
                key={`table-row-sweeps-${row.id}`}
                data={row}
                sortName={sortName}
                setOpen={setOpen}
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
                    in={row.open}
                    timeout="auto"
                    unmountOnExit
                    className="mui-collapse"
                  >
                    <div
                      className={`table__row_addition ${
                        row.open ? 'table__row_addition--active' : ''
                      }`}
                    >
                      <div className="table__row_addition-list">
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Gas Spent
                          </p>
                          <p className="table__row_addition-list__item-flex">
                            <span className="table__row_content-icon--first">
                              <IconEther />
                            </span>
                            {row.gas_spent}
                          </p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Lost/Gain (%)
                          </p>
                          <p
                            className={`table__row_addition-list__item-percent ${
                              row.lost_gain.duration
                                ? 'table__row_addition-list__item-percent--up'
                                : 'table__row_addition-list__item-percent--down'
                            }`}
                          >
                            {row.lost_gain.duration ? '+' : '-'}
                            {row.lost_gain.value}%
                          </p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Total Made
                          </p>
                          <p>{row.total_made}</p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Transaction ID
                          </p>
                          <BaseButton
                            className="button--icon button--outline button--outline-xxs button--outline-transparent button--outline-transparent-primary"
                            text={splitAddress(row.transaction_ID.address)}
                            icon={<IconRedirect />}
                            onClick={() => {
                              alert('View transaction');
                            }}
                          />
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Date
                          </p>
                          <p>{row.date}</p>
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
