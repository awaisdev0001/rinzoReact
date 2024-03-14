import { FC } from 'react';
import { TableHeader } from 'src/view/components';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { IconEther, IconRedirect } from 'src/assets/icons';
import pic from 'src/assets/images/markets/market1.svg';
import 'src/assets/styles/table.scss';
import './HomePageModalItemsTable.scss';

interface IProps {
	items: any[];
}

const collumns = [
	{
		key: 'market',
		name: 'Market',
		isSort: false,
		align: 'center',
	},
	{
		key: 'item',
		name: 'Item',
		isSort: false,
	},
	{
		key: 'lastPrice',
		name: 'Last Price',
		isSort: false,
		align: 'left',
	},
	{
		key: 'arrows',
		name: '',
		isSort: false,
		align: 'left',
	},
];

export const HomePageModalItemsTable: FC<IProps> = ({ items }) => {
	const setSorting = (val: string | number) => {}
	return (
    <div className="homepage__items__list__table">
      <TableContainer
        component={Paper}
        className="mui-table mui-table-without-margin"
      >
        <Table aria-label="sticky table">
          <TableHeader
            items={collumns}
            sort={() => ''}
            sortName={''}
            order={''}
            setSorting={setSorting}
          />
          <TableBody>
            {items?.map((row, index) => (
              <TableRow
                key={row.cardTitle + index}
                className="table__row table__row--clickable"
              >
                <TableCell>
                  <p className="table__row_content table__row_content--center table__row_content-markets">
                    <img src={pic} alt="alt" />
                  </p>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className="mobile-padding"
                >
                  <div className="table__row_content">
                    <img
                      className="table__row_content-img"
                      src={row.cardImg}
                      alt="table__row_content-img"
                    />
                    <div
                      style={{ display: 'flex' }}
                      className="table__row_content--medium"
                    >
                      <p className="modal__table-par">
                        <a href="#" className="link">
                          {row.cardTitle}
                        </a>
                      </p>
                      <p className="table__row_content--additional">
                        {/*{data.items} Items*/}
                        {/*<span className="table__row_content--additional-second">*/}
                        {/*    {data.date}*/}
                        {/*</span>*/}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="table__row_content table__row_content--left">
                    <IconEther /> 0.4
                  </p>
                </TableCell>
                <TableCell>
                  <IconRedirect className="modal__table__redirect" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
