import { Activity } from "src/view/pages/Activity";
import { rows, additionData } from "../data";
import { tActivityFilterButtons } from "src/view/components/FilterSide/LeaderboardFilterMenu/data";
import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateEmptyActivities } from "src/helpers/generateEmptyCards";
import getWalletActivities, {
  getWalletActivities_ItemCountPerRequest,
} from "src/services/api/wallets/getWalletActivities";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const WalletActivity = () => {
  const { slug: wallet } = useParams();
  const componentId = useComponentIdGenerator();
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<
    tActivityFilterButtons[]
  >([]);
  const [rows, setRows] = useState<tActivitiesResult[]>([]);
  const [apiLoading, setApiLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    fetchItems(1);
  }, [selectedFilterOptions]);

  const fetchItems = async (newPage: number) => {
    if (!wallet) {
      return;
    }

    setApiLoading(true);

    // add phantom rows
    let oldActivities = rows.slice(
      0,
      (newPage - 1) * getWalletActivities_ItemCountPerRequest
    );
    let newActivities = generateEmptyActivities(
      getWalletActivities_ItemCountPerRequest
    );
    let mergedActivities: tActivitiesResult[] =
      oldActivities.concat(newActivities);
    setRows(mergedActivities);

    try {
      mergedActivities = [...oldActivities];
      const res = await getWalletActivities(
        newPage,
        wallet,
        selectedFilterOptions as string[],
        componentId
      );

      // checks duplicating
      res.result?.forEach((activity) => {
        if (
          mergedActivities.findIndex(
            (e) => JSON.stringify(e) === JSON.stringify(activity)
          ) === -1
        ) {
          mergedActivities.push(activity);
        }
      });

      setHasNextPage(!!res.hasNextPage);
      setRows(mergedActivities);
      setPage(newPage);
    } catch (error: any | AxiosError) {
      setRows(oldActivities);
    }

    setApiLoading(false);
  };

  return (
    <Activity
      isProfileActivity
      rows={rows}
      additionData={additionData}
      onApply={(e) => setSelectedFilterOptions([...e.leaderboard])}
      fetchItems={fetchItems}
      apiLoading={apiLoading}
      page={page}
      hasNextPage={hasNextPage}
    />
  );
};
