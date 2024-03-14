import { FC, Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Collapse,
} from "@mui/material";
import {
  TableHeader,
  MarketsIconList,
  InputWithOptions,
  BaseTooltip,
  TooltipList,
} from "src/view/components";
import { ListingRow } from "../ListingRow";
import { tTableHeader, tCollectionItemExtend } from "src/typed/types";
import { IconEther } from "src/assets/icons";
import { toLocaleUS } from "src/helpers";

interface IProps {
  headerItems: tTableHeader[];
  sort: (args: any) => any | void;
  order: string;
  sortName: string;
  rowsItems: tCollectionItemExtend[];
  onCheck: (args: { val: boolean; id: number | string }) => void;
  changeNftPriceCurrency: (args: { val: string; id: number | string }) => void;
  changePriceValue: (args: {
    val: number | string;
    id: number | string;
  }) => void;
  cancelListing: (args: number | string) => void;
}

export const ListingTable: FC<IProps> = ({
  headerItems,
  sort,
  order,
  sortName,
  rowsItems,
  onCheck,
  changeNftPriceCurrency,
  changePriceValue,
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
          checked={rowsItems.every((item: any) => item.checked)}
          onCheck={(val) => onCheck({ val, id: "all" })}
          setSorting={setSorting}
        />
        <TableBody>
          {rowsItems.map((row) => (
            <Fragment key={`table-row-activity-${row.id}`}>
              <ListingRow
                key={`table-row-sweeps-${row.id}`}
                data={row}
                sortName={sortName}
                onCheck={(val: boolean) => onCheck({ val, id: row.id })}
                changeNftPriceCurrency={(val: string) =>
                  changeNftPriceCurrency({ val, id: row.id })
                }
                changePriceValue={(val: number | string) =>
                  changePriceValue({ val, id: row.id })
                }
                cancelListing={() => {
                  cancelListing(row.id);
                }}
              />
              <TableRow
                key="table-row-part-2"
                className="table__row table__row--mobile"
              >
                <TableCell style={{ padding: 0 }} colSpan={8}>
                  <Collapse
                    in={true}
                    timeout="auto"
                    unmountOnExit
                    className="mui-collapse"
                  >
                    <div className="table__row_addition table__row_addition--white">
                      <div className="table__row_addition-list">
                        {row.markets && row.markets.length > 0 && (
                          <div className="table__row_addition-list__item">
                            <p className="table__row_addition-list__item-title">
                              Marketplace
                            </p>
                            <div className="table__row_addition-list-markets">
                              <BaseTooltip
                                tooltipChildren={
                                  <TooltipList
                                    items={row.markets}
                                    title="Marketplace Fee"
                                  />
                                }
                                width={"160px"}
                                biggerText
                              >
                                <MarketsIconList
                                  markets={row.markets.map((el) => {
                                    return el.image;
                                  })}
                                  className="markets-icons--small"
                                />
                              </BaseTooltip>
                            </div>
                          </div>
                        )}
                        {/* <div className="table__row_addition-list__item table__row_addition-list__item-top">
                          <p className="table__row_addition-list__item-title">
                            Purchase Price
                          </p>
                          <div className="table__row_addition-list__item-column">
                            <p className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                              <span className="table__row_content-icon--first">
                                <IconEther />
                              </span>
                              {row.purchase_price.eth}
                            </p>
                            <p>
                              <span className="subtitle">
                                ${row.purchase_price.usd}
                              </span>
                            </p>
                          </div>
                        </div> */}
                        <div className="table__row_addition-list__item table__row_addition-list__item-top">
                          <p
                            className="table__row_addition-list__item-title"
                            style={{ paddingTop: "5px" }}
                          >
                            List Price
                          </p>
                          <div className="table__row_addition-list__item-column">
                            <InputWithOptions
                              maxWidth="145px"
                              items={[
                                { key: "eth", title: "ETH" },
                                { key: "usd", title: "USD" },
                              ]}
                              selectedValue={row.list_price.priceCurrency}
                              onClick={(key) => {
                                changeNftPriceCurrency({
                                  val: key,
                                  id: row.id,
                                });
                              }}
                              changePriceValue={(key) => {
                                changePriceValue({
                                  val: key,
                                  id: row.id,
                                });
                              }}
                              inputValue={row.list_price.price}
                              placeholder="0"
                              disabled={!row.checked}
                            />
                            <p
                              className="big-size"
                              style={{ marginTop: "4px" }}
                            >
                              <span className="subtitle">Floor:</span>{" "}
                              {row.list_price.floor.eth} ETH{" "}
                              <span className="subtitle">
                                ${toLocaleUS(row.list_price.floor.usd)}
                              </span>
                            </p>
                          </div>
                        </div>
                        {/* <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            PNL
                          </p>
                          <div className="table__row_addition-list__item-flex table__row_addition-list__item-flex-text">
                            <p
                              className={`table__row_addition-list__item-percent table__row_addition-list__item-percent--small ${
                                row.pnl.duration
                                  ? 'table__row_addition-list__item-percent--up'
                                  : 'table__row_addition-list__item-percent--down'
                              }`}
                            >
                              {row.pnl.duration ? '+' : '-'}${row.pnl.percent}
                            </p>
                          </div>
                        </div>
                        <div className="table__row_addition-list__item">
                          <p className="table__row_addition-list__item-title">
                            Royalties
                          </p>
                          <div className="table__row_addition-list__item-collumn">
                            <p className="table__row_addition-list__item-flex">
                              <span className="table__row_content-icon--first">
                                <IconEther />
                              </span>
                              {row.royalties.eth}
                              <span
                                className={`table__row_addition-list__item-percent table__row_addition-list__item-percent--small ${
                                  row.royalties.duration
                                    ? 'table__row_addition-list__item-percent--up'
                                    : 'table__row_addition-list__item-percent--down'
                                }`}
                              >
                                {row.royalties.percent}%
                              </span>
                            </p>
                            <p>
                              <span className="subtitle">
                                ${row.royalties.usd}
                              </span>
                            </p>
                          </div>
                        </div> */}
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
