import { FC, useEffect, useState } from "react";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";

import { TableHeader } from "src/view/components";
import { NftActivityTableRow } from "./NftActivityTableRow";
import { tActivity } from "../../../types";
import { tTableHeader } from "src/typed/types";
import { tNFTResult } from "src/typed/requests/NFT/tNFT";

interface IProps {
  headerItems: tTableHeader[];
  sort: (args: any) => any | void;
  order: string;
  sortName: string;
  rowsItems: tNFTResult[];
}

export const NftActivityTable: FC<IProps> = ({
  headerItems,
  sort,
  order,
  sortName,
  rowsItems,
}) => {
  const [tableData, setTableData] = useState<tNFTResult[]>([]);

  useEffect(() => {
    const data = rowsItems.map((el) => {
      return { ...el, open: false };
    });
    setTableData(data);
  }, [rowsItems]);

  const setSorting = (val: string | number) => {
    const data = tableData;

    if (order === "asc") {
      const sorted = data.sort((a, b) => (a < b ? -1 : 1));
      setTableData(sorted);
    }
    if (order === "desc") {
      const sorted = data.sort((a, b) => (a > b ? 1 : -1));
      setTableData(sorted);
    }
  };

  return (
    <TableContainer
      component={Paper}
      className="mui-table mui-table-small-margin"
    >
      <Table aria-label="collapsible table">
        <TableHeader
          items={headerItems}
          sort={sort}
          order={order}
          sortName={sortName}
          setSorting={setSorting}
          className="mui-table--small__th"
        />
        <TableBody>
          {tableData.map((row, id) => (
            <NftActivityTableRow
              key={`table-row-nft-activity-${id}`}
              data={row}
              sortName={sortName}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
