import { InputBase } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import { IconExport } from "src/assets/icons";
import {
  BaseButton,
  CalendarInput,
  Loading,
  EmptyData,
  CustomPagination,
} from "src/view/components";
import { HistoryTable } from "../../components";
import { historyColumn } from "../../data";
import { toast } from "react-toastify";
import getWalletPnLHistory from "src/services/api/wallets/getWalletPnLHistory";
import { useParams } from "react-router-dom";
import { tHistoryRows } from "../../types";
import { tStatsPnLHistoryResult } from "src/typed/requests/wallet/stats/tStats";
import { stringToHash } from "src/helpers/stringToHash";
import { toDateString } from "src/helpers/dateFormatter";
import { AxiosError } from "axios";
import { splitAddress, toLocaleUS } from "src/helpers";
import { marketplaceList } from "src/config";
import { cdnTokenImageUrl } from "src/helpers/cdnUrls/cdnTokenUrls";
import { transactionLink } from "src/helpers/viewTransaction";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

type tProps = {};

export const WalletHistoryTable: FC<tProps> = () => {
  const { slug: wallet } = useParams();
  const componentId = useComponentIdGenerator();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState({
    startTime: new Date(),
    endTime: new Date(),
  });
  const [historyData, setHistoryData] = useState<tHistoryRows[]>([]);

  const filteredData = useMemo<tHistoryRows[]>(
    () =>
      historyData.filter(
        (item) =>
          !search ||
          item.collection.name.toLowerCase().includes(search.toLowerCase()) ||
          item.nft.name.toLowerCase().includes(search.toLowerCase())
      ),
    [historyData, search]
  );

  const [pageData, setPageDate] = useState({
    history: {
      order: "profitability",
      sort: "asc",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const convertPnLHistoryResultToHistoryRow = (
    result: tStatsPnLHistoryResult[]
  ) =>
    result.map<tHistoryRows>((item) => {
      return {
        id: stringToHash(JSON.stringify(item)),
        event: item.eventType,
        market: marketplaceList
          .filter((m) => m.id === item.market)
          .map((m) => m.image),
        nft: {
          imageUrl: cdnTokenImageUrl(item.contractAddress, item.tokenID),
          name: item.name || `#${item.tokenID}`,
          tokenId: item.tokenID,
        },
        collection: {
          name: item.collectionName || splitAddress(item.contractAddress),
          slug: item.contractAddress,
        },
        profitability: toLocaleUS(item.profitWeiPct || item.profitUsdPct),
        gas_spent: item.gasSpentUsd,
        lost_gain: {
          value: 0,
          duration: true,
        },
        total_made: "0",
        transaction_ID: {
          address: item.transactionHash,
          link: transactionLink(item.transactionHash),
        },
        date: toDateString(new Date(item.timestamp)),
        open: false,
      };
    });

  const fetchItems = async (componentId: string) => {
    if (!wallet) {
      return;
    }

    setLoading(true);
    try {
      const res = await getWalletPnLHistory(
        page,
        wallet,
        period.startTime.toISOString(),
        period.endTime.toISOString(),
        componentId
      );
      const historyData1 = convertPnLHistoryResultToHistoryRow(
        res?.result || []
      );
      setHistoryData(historyData1);
    } catch (error: any | AxiosError) {
      if (error.code !== "ERR_CANCELED") {
        toast.error("Wallet History Table: " + JSON.stringify(error));
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems(componentId);
  }, [page, wallet, period.startTime, period.endTime]);

  return (
    <div className="profile-stats__history">
      <div className="action-line action-line--with-radius">
        <h4 className="action-line__text action-line__text-margin-right ">
          P&L History
        </h4>
        <div className="action-line__search action-line__search--tablet-70 action-line__search-margin-top-10">
          <InputBase
            className="mui-input mui-input--simple"
            placeholder="Search for specific contract or token"
            inputProps={{
              "aria-label": "Search for specific contract or token",
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="action-line__datepicker">
          <CalendarInput
            startDate={period.startTime}
            endDate={period.endTime}
            onApply={(startTime, endTime) =>
              setPeriod({
                startTime,
                endTime: endTime || new Date(),
              })
            }
          />
        </div>
        <div className="action-line__export">
          <BaseButton
            className="button--icon button--outline button--outline-s button--outline-transparent"
            text="Export as PDF"
            disabled={true}
            icon={<IconExport />}
            onClick={() => {
              console.log("Export");
            }}
          />
        </div>
      </div>
      <div className="profile-stats__history_table">
        {loading ? (
          <Loading />
        ) : error ? (
          <EmptyData />
        ) : (
          <HistoryTable
            headerItems={historyColumn}
            sort={(val: { sort: string; order: string }) =>
              setPageDate((prevState) => {
                return {
                  ...prevState,
                  history: { ...val },
                };
              })
            }
            order={pageData.history.order}
            sortName={pageData.history.sort}
            rowsItems={filteredData}
          />
        )}
        {!error && <CustomPagination onChange={(value) => setPage(value)} />}
      </div>
    </div>
  );
};
