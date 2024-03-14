import { useEffect, useState } from "react";
import { Activity } from "../../Activity";
import { rows } from "./data";
import { tActivityFilterButtons } from "src/view/components/FilterSide/LeaderboardFilterMenu/data";
import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import { generateEmptyActivities } from "src/helpers/generateEmptyCards";
import getActivities, {
  getActivities_ItemCountPerRequest,
} from "src/services/api/activities/getActivities";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const HomeActivity = () => {
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<
    tActivityFilterButtons[]
  >([]);
  const [rows, setRows] = useState<tActivitiesResult[]>([]);
  const [apiLoading, setApiLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const componentId = useComponentIdGenerator();
  console.log("componentIdcomponentId", componentId);
  useEffect(() => {
    fetchItems(1, componentId);
  }, [selectedFilterOptions]);

  const fetchItems = async (newPage: number, componentId: string) => {
    setApiLoading(true);

    // add phantom rows
    let oldActivities = rows.slice(
      0,
      (newPage - 1) * getActivities_ItemCountPerRequest
    );
    let newActivities = generateEmptyActivities(
      getActivities_ItemCountPerRequest
    );
    let mergedActivities: tActivitiesResult[] =
      oldActivities.concat(newActivities);
    setRows(mergedActivities);

    try {
      mergedActivities = [...oldActivities];
      const res = await getActivities(
        newPage,
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
      rows={rows}
      additionData={[]}
      onApply={(e) => setSelectedFilterOptions([...e.leaderboard])}
      fetchItems={fetchItems}
      apiLoading={apiLoading}
      page={page}
      hasNextPage={hasNextPage}
    />
  );
};
