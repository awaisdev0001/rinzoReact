import { FC, Fragment, useEffect, useState } from "react";

import { BaseButton, TableHeader } from "src/view/components";
import { ActivityTableRow } from "../ActivityTableRow";

import { IconRank, IconDiamond, IconRedirect } from "src/assets/icons";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Collapse,
} from "@mui/material";

import { tTableHeader, tActivityRow } from "src/typed/types";
import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import { cdnTokenImageUrl } from "src/helpers/cdnUrls/cdnTokenUrls";
import { ethers } from "ethers";
import { toDateString } from "src/helpers/dateFormatter";
import { viewTransaction } from "src/helpers/viewTransaction";
import { stringToHash } from "src/helpers/stringToHash";

interface IProps {
  headerItems: tTableHeader[];
  sort: (args: any) => any | void;
  order: string;
  sortName: string;
  rowsItems: tActivitiesResult[];
}

export const ActivityTable: FC<IProps> = ({
  headerItems,
  sort,
  order,
  sortName,
  rowsItems,
}) => {
  const [tableData, setTableData] = useState<tActivityRow[]>([]);

  useEffect(() => {
    const data = rowsItems.map((el) => {
      return { ...convertActivityResultToActivityRow(el), open: false };
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
    if (order === "asc") {
      const sorted = tableData.slice().sort(function (a: any, b: any) {
        return a[val] - b[val];
      });
      setTableData(sorted);
    }
    if (order === "desc") {
      const sorted = tableData.slice().sort(function (a: any, b: any) {
        return b[val] - a[val];
      });
      setTableData(sorted);
    }
  };

  const convertActivityResultToActivityRow = (el: tActivitiesResult) => {
    return {
      id: stringToHash(JSON.stringify(el)),
      item: {
        imageUrl: cdnTokenImageUrl(el.contractAddress, el.tokenID),
        name: el.name,
        collection: el.collectionName || el.contractAddress,
        contractAddress: el.contractAddress,
      },
      rank: el.rank,
      rarity_score: el.rarity,
      price: {
        eth: Number(ethers.utils.formatEther(el.priceWei)),
        usd: el.priceUsd,
      },
      event_type: el.type,
      day: toDateString(el.timestamp),
      hash: el.hash,
      tokenId: el.tokenID,
    } as tActivityRow;
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
            <Fragment key={`table-row-activity-fragment-${row.id}`}>
              <ActivityTableRow
                key={`table-row-activity-${row.id}`}
                data={row}
                setOpen={setOpen}
                sortName={sortName}
              />
              <TableRow
                key="table-row-part-2"
                className="table__row table__row--tablet"
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
                        row.open ? "table__row_addition--active" : ""
                      }`}
                    >
                      <div className="table__row_addition-list">
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Rarity Score
                          </p>
                          <p className="table__row_addition-list__item-flex">
                            <span className="table__row_content-icon--first">
                              <IconDiamond />
                            </span>
                            {row.rarity_score}
                          </p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Rank
                          </p>
                          <p className="table__row_addition-list__item-flex">
                            <span className="table__row_content-icon--first">
                              <IconRank />
                            </span>
                            {row.rank}
                          </p>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Date
                          </p>
                          <p>{row.day || row.date}</p>
                        </div>
                      </div>
                      <div className="table__row_addition-list table__row_addition-list-tablet-visible">
                        <div className="table__row_addition-list__item">
                          {row.hash && (
                            <>
                              <BaseButton
                                className="button--outline button--outline-m button--outline-secondary"
                                text="Individual Events"
                                onClick={() => viewTransaction(row.hash ?? "")}
                              />
                              <BaseButton
                                className="button--icon button--outline button--outline-left button--outline-m button--outline-transparent"
                                text="View transaction"
                                icon={<IconRedirect />}
                                onClick={() => viewTransaction(row.hash ?? "")}
                              />
                            </>
                          )}
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
