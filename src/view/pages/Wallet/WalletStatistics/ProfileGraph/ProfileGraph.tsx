import { FC, useEffect, useState } from "react";
import { FilterLine, LineChart } from "src/view/components";
import { ProfileGraphButtons } from "./ProfileGraphButtons";
import { tChartData, tTimeFilter } from "src/typed/types";
import { useWindowSize } from "src/hooks";
import { buttonsList, statsTimeFilter } from "./data";
import './ProfileGraph.scss';
import { tProfileGraphButton, tProfileGraphButtonOptions } from './ProfileGraphButtons/types';
import getWalletPnL from 'src/services/api/wallets/getWalletPnL';
import getWalletAssetsAcquired from 'src/services/api/wallets/getWalletAssetsAcquired';
import getWalletPortfolioValue from 'src/services/api/wallets/getWalletPortfolioValue';
import { useParams } from 'react-router-dom';
import { convertAssetsAcquiredToChartData, convertPnLToChartData, convertPortfolioValueToChartData } from './helper';
import { ethers } from 'ethers';
import { toLocaleUS } from 'src/helpers';
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const ProfileGraph: FC = () => {
  const { slug: wallet } = useParams();
  const componentId = useComponentIdGenerator();
  const [pageData, setPageData] = useState({
    time: '1d',
  });
  const [timeFilter, setTimeFilter] = useState<tTimeFilter[]>(statsTimeFilter);
  const { width } = useWindowSize();
  const [activeButton, setActiveButton] = useState<tProfileGraphButtonOptions>('pnl');
  const [chartData, setChartData] = useState<Record<tProfileGraphButtonOptions, tChartData>>({} as Record<tProfileGraphButtonOptions, tChartData>);
  const [buttonsData, setButtonsData] = useState<tProfileGraphButton[]>(buttonsList);

  const changeFilter = (val: string) => {
    let newTimeFilter = [];
    newTimeFilter = timeFilter.map((el) => {
      return {
        ...el,
        check: el.val === val,
      };
    });
    setTimeFilter(newTimeFilter);
  };

  const loadData = async (componentId: string) => {
    if (!wallet) {
      return;
    }

    const chartData1 = {} as Record<tProfileGraphButtonOptions, tChartData>;
    const sumData = {} as Record<tProfileGraphButtonOptions, number>;

    // Load pnl data
    let seriesType: tProfileGraphButtonOptions = "pnl";

    try {
      sumData[seriesType] = 0;
      const res1 = await getWalletPnL(wallet, pageData.time, componentId);
      chartData1[seriesType] = convertPnLToChartData("PNL", res1);

      // Calculate the sum
      for (let e of res1) {
        sumData[seriesType] += Number(ethers.utils.formatEther(e.wei));
      }
    } catch (ex) {
      chartData1[seriesType] = { labels: [], datasets: [] };
    }

    // Load Assets Acquired data
    try {
      seriesType = "assetsAcquired";
      const res2 = await getWalletAssetsAcquired(wallet, pageData.time, componentId);
      chartData1[seriesType] = convertAssetsAcquiredToChartData("AssetsAcquired", res2);
    } catch (ex) {
      chartData1[seriesType] = { labels: [], datasets: [] };
    }

    // Load Portfolio data
    try {
      seriesType = "portfolioValue";
      sumData[seriesType] = 0;
      const res3 = await getWalletPortfolioValue(wallet, pageData.time, componentId);
      chartData1[seriesType] = convertPortfolioValueToChartData("Portfolio", res3);

      // Calculate the sum
      for (let e of res3) {
        sumData[seriesType] += Number(ethers.utils.formatEther(e.value));
      }
    } catch (ex) {
      chartData1[seriesType] = { labels: [], datasets: [] };
    }

    setChartData(chartData1);
  };

  useEffect(() => {
    changeFilter(pageData.time);
    loadData(componentId);
  }, [pageData.time]);

  useEffect(() => {
    loadData(componentId);
  }, [wallet]);

  return (
    <div className="profile__graph">
      <div className="action-line action-line--with-radius">
        <div className="action-line__filter">
          <FilterLine
            className="filter-line--xs"
            items={timeFilter}
            changeFilter={(val: string) => {
              setPageData((prevState) => {
                return {
                  ...prevState,
                  time: val,
                };
              });
            }}
          />
        </div>
      </div>
      <div className="profile__graph__chart">
        {width > 1299 && (
          <ProfileGraphButtons
            onChange={setActiveButton}
            buttonsData={buttonsData}
          />
        )}
        <div className="profile__graph__chart__container">
          {chartData[activeButton] && (
            <LineChart chartData={chartData[activeButton]} noPoints={true} />
          )}
        </div>
        {width < 1299 && (
          <ProfileGraphButtons
            onChange={setActiveButton}
            buttonsData={buttonsData}
          />
        )}
      </div>
    </div>
  );
};
