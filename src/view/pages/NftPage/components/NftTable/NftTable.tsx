import { FC, useEffect, useState } from "react";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { TableHeader } from "src/view/components";
import { NftTableRow } from "../NftTableRow";
import { tTraitsRows } from "../../types";
import { tTableHeader } from "src/typed/types";
import { INFTTraits } from "src/typed/requests/NFT";

interface IProps {
  headerItems: tTableHeader[];
  sort: (args: any) => any | void;
  order: string;
  sortName: string;
  rowsItems: INFTTraits[];
  collection: string;
}

export const NftTable: FC<IProps> = ({
  headerItems,
  sort,
  order,
  sortName,
  rowsItems,
  collection,
}) => {
  const [tableData, setTableData] = useState<INFTTraits[]>([]);

  useEffect(() => {
    const data = rowsItems?.map((el) => {
      return { ...el, open: false };
    });
    setTableData(data);
  }, [rowsItems]);

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
          className="mui-table--small__th"
          setSorting={setSorting}
        />
        <TableBody>
          {tableData.map((row, id) => (
            <NftTableRow
              key={`table-row-sweeps-${id}`}
              data={row}
              collection={collection}
              sortName={sortName}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
