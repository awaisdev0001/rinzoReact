import React, { FC, useEffect, useState } from "react";
import { FilterLine } from "src/view/components";
import { tTimeFilter } from "src/typed/types";
import { StatsBlock } from "../../components";

import { statsTimeFilter } from "../../data";
import { useParams } from "react-router-dom";
import { tStats } from "../../types";
import getWalletStatsSummary from "src/services/api/wallets/getWalletStatsSummary";
import { convertStatsSummaryToStats } from "./helper";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

type tProps = {};

export const StatsSummary: FC<tProps> = () => {
  const { slug: wallet } = useParams();
  const componentId = useComponentIdGenerator();
  const [period, setPeriod] = useState("1d");
  const [statsInfo, setStatsInfo] = useState<tStats[]>([]);

  const loadData = async (componentId: string) => {
    if (!wallet) {
      return;
    }

    try {
      const res = await getWalletStatsSummary(wallet, period, componentId);
      setStatsInfo(convertStatsSummaryToStats(res));
    } catch (error: any | AxiosError) {
      if (error.code !== "ERR_CANCELED") {
        toast.error("Wallet Stats Summary: " + JSON.stringify(error));
      }
    }
  };

  useEffect(() => {
    loadData(componentId);
  }, [wallet, period]);

  return (
    <>
      <div className="container">
        <div className="action-line action-line--with-radius">
          <h4 className="action-line__text action-line__text-margin-bottom">
            Main Stats
          </h4>
          <div className="action-line__filter">
            <FilterLine
              className="filter-line--xs"
              items={statsTimeFilter}
              changeFilter={(val: string) => setPeriod(val)}
            />
          </div>
        </div>
      </div>
      <div className="container container-tablet-padding-empty">
        <div className="profile-stats__info_line">
          {statsInfo.map((el) => {
            return (
              <div
                className="profile-stats__info_line-item"
                key={`stats-block-${el.id}`}
              >
                <StatsBlock item={el} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
