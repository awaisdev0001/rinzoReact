import { FC, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';

import { TableHeader } from 'src/view/components';
import { LeaderboardTableRow } from '../LeaderboardTableRow';
import { tTopRows } from '../../types';
import { tTableHeader } from 'src/typed/types';
import { IconLoader } from 'src/assets/icons';

interface IProps {
    headerItems: tTableHeader[];
    sort: (args: any) => any | void;
    order: string;
    sortName: string;
    rowsItems: tTopRows[];
    fetchMoreData: () => void;
}

export const LeaderboardTable: FC<IProps> = ({
    headerItems,
    sort,
    order,
    sortName,
    rowsItems,
    fetchMoreData,
}) => {
    const [tableData, setTableData] = useState<tTopRows[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const maxItems = 20;

    useEffect(() => {
        const data = rowsItems.map(el => {
            return { ...el, open: false };
        });
        setTableData(data);
    }, [rowsItems]);

    useEffect(() => {
        if (tableData.length === maxItems) {
            setHasMore(false);
        }
    }, [tableData]);

   const setSorting = (val: string | number) => {
     if (order === 'asc') {
       const sorted = tableData.slice().sort(function (a: any, b: any) {
         return a[val] - b[val];
       });
       setTableData(sorted);
     }
     if (order === 'desc') {
       const sorted = tableData.slice().sort(function (a: any, b: any) {
         return b[val]- a[val];
       });
       setTableData(sorted);
     }
   };

    return (
      <InfiniteScroll
        dataLength={tableData.length}
        next={() => fetchMoreData()}
        hasMore={hasMore}
        loader={
          <div className="table__loader-icon">
            <IconLoader />
          </div>
        }
      >
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
              {tableData.map((row, idx) => (
                <LeaderboardTableRow
                  key={`table-row-leaderboard-${row.id}`}
                  idx={idx}
                  data={row}
                  sortName={sortName}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InfiniteScroll>
    );
};
