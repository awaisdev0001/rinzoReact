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

import { TableHeader } from 'src/view/components';
import { RowAdditionInfo } from 'src/view/components';
import { TopTableRow } from '../TopTableRow';
import { IconArrowTopEmptyLong } from 'src/assets/icons';

import { tTopRows } from '../types';
import { tTableHeader } from 'src/typed/types';

interface IProps {
	headerItems: tTableHeader[];
	sort: (args: any) => any | void;
	order: string;
	sortName: string;
	rowsItems: tTopRows[];
	historyData: any[];
}

export const TopTable: FC<IProps> = ({
	headerItems,
	sort,
	order,
	sortName,
	rowsItems,
	historyData,
}) => {
	const [tableData, setTableData] = useState<tTopRows[]>([]);

	useEffect(() => {
		const data = rowsItems.map(el => {
			return { ...el, open: false };
		});
		setTableData(data);
	}, [rowsItems]);

	const setOpen = (val: string | number) => {
    const data = tableData.map((el) => {
      return {
        ...el,
        open: el.id === val ? !el.open : el.open,
      };
    });
	setTableData(data);
     };


	const setSorting = (val: string | number) => {
	if(order === 'asc'){
	 const sorted = tableData.slice().sort(function (a:any, b:any) {
     return a[val].value - b[val].value;
   });
	setTableData(sorted);
	}
	if(order === 'desc'){
	const sorted = tableData.slice().sort(function (a: any, b: any) {
      return b[val].value - a[val].value;
    });
	 setTableData(sorted);
	}
    
  };

		
	
	return (
    <TableContainer component={Paper} className="mui-table">
      <Table key={crypto.randomUUID()} aria-label="collapsible table">
        <TableHeader
          key={crypto.randomUUID()}
          items={headerItems}
          sort={sort}
          order={order}
          sortName={sortName}
          setSorting={setSorting}
        />
        <TableBody>
          {tableData.map((row) => (
            <Fragment key={`table-row-top-${row.id + crypto.randomUUID()}`}>
              <TopTableRow
                data={row}
                setOpen={setOpen}
                sortName={sortName}
                key={'table-row-part-1' + crypto.randomUUID()}
              />
              <TableRow
                key={'table-row-part-2' + crypto.randomUUID()}
                className="table__row"
              >
                <TableCell
                  style={{ padding: 0 }}
                  colSpan={8}
                  className="overflow-hidden"
                  key={'1'}
                >
                  <Collapse
                    in={row.open}
                    timeout="auto"
                    unmountOnExit
                    className="mui-collapse"
                    key={'2'}
                  >
                    <div
                      className={`table__row_addition ${
                        row.open ? 'table__row_addition--active' : ''
                      }`}
                      key={'3'}
                    >
                      <div key={'4'} className="table__row_addition-list">
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Owners
                          </p>
                          <p>
                            {row.owners.value}
                            <span
                              className={`table__row_addition-list__item-percent ${
                                row.owners.duration
                                  ? 'table__row_addition-list__item-percent--up'
                                  : 'table__row_addition-list__item-percent--down'
                              }`}
                            >
                              {row.owners.percent}
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Smart Wallets
                          </p>
                          <p>
                            {row.smart_wallets.value}
                            <span
                              className={`table__row_addition-list__item-percent ${
                                row.smart_wallets.duration
                                  ? 'table__row_addition-list__item-percent--up'
                                  : 'table__row_addition-list__item-percent--down'
                              }`}
                            >
                              {row.smart_wallets.percent}
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Sales
                          </p>
                          <p>
                            {row.sales?.value}
                            <span
                              className={`table__row_addition-list__item-percent ${
                                row.sales?.duration
                                  ? 'table__row_addition-list__item-percent--up'
                                  : 'table__row_addition-list__item-percent--down'
                              }`}
                            >
                              {row.sales?.percent}
                            </span>
                          </p>
                        </div>
                        <div className="table__row_addition-list__item table__row_addition-list__item--center">
                          <p className="table__row_addition-list__item-title">
                            Outlook
                          </p>
                          <p>
                            <span
                              style={{
                                display: 'inline-block',
                                transform: row.outlook
                                  ? 'none'
                                  : 'rotate(180deg)',
                              }}
                            >
                              <IconArrowTopEmptyLong
                                fill={row.outlook ? '#ADCA5C' : '#FF7676'}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      {historyData.map((el) => {
                        return (
                          <RowAdditionInfo
                            id={el.id}
                            key={`addition-${el.id}` + crypto.randomUUID()}
                            image={el.image}
                            title={el.title}
                            price={row.history[el.type]}
                          />
                        );
                      })}
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
