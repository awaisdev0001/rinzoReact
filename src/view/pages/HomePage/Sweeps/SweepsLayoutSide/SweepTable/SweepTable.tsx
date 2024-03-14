import { FC, useEffect, useState } from 'react';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';

import { TableHeader } from 'src/view/components';
import { SweepTableRow } from '../SweepTableRow';
import { tTopRows } from '../../types';
import { tTableHeader } from 'src/typed/types';
import { selectClickedCollection } from 'src/store';
import { useAppDispatch } from 'src/hooks';

interface IProps {
	headerItems: tTableHeader[];
	sort: (args: any) => any | void;
	order: string;
	sortName: string;
	rowsItems: tTopRows[];
	openPopUp: (arg: string | number) => void;
}

export const SweepTable: FC<IProps> = ({
	headerItems,
	sort,
	order,
	sortName,
	rowsItems,
	openPopUp,
}) => {
	const [tableData, setTableData] = useState<tTopRows[]>([]);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const data = rowsItems.map(el => {
			return { ...el, open: false };
		});
		setTableData(data);
	}, [rowsItems]);

	const itemClickHandler = (item: tTopRows) => {
		const obj = {
			title: item.collection.name,
			thumb: item.collection.imageUrl,
			collectionNumber: item.items,
		};
		dispatch(selectClickedCollection(obj));
	};

	 const setSorting = (val: string | number) => {
     if (order === 'asc') {
       const sorted = tableData.slice().sort(function (a: any, b: any) {
         return a[val] - b[val];
       });
       setTableData(sorted);
     }
     if (order === 'desc') {
       const sorted = tableData.slice().sort(function (a: any, b: any) {
         return b[val] - a[val];
       });
       setTableData(sorted);
     }
   };

	return (
    <TableContainer component={Paper} className="mui-table">
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
            <SweepTableRow
              key={`table-row-sweeps-${row.id}`}
              data={row}
              sortName={sortName}
              openPopUp={openPopUp}
              onItemClick={itemClickHandler}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
