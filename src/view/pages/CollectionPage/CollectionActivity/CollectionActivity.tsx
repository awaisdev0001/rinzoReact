import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCollectionActivities, {
  getCollectionActivities_ItemCountPerRequest,
} from "src/services/api/collection/getCollectionActivities";
import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import { tActivityFilterButtons } from "src/view/components/FilterSide/LeaderboardFilterMenu/data";
import { Activity } from "../../Activity";
import { additionData } from "./data";
import { toast } from "react-toastify";
import { generateEmptyActivities } from "src/helpers/generateEmptyCards";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const CollectionActivity = () => {
  const { slug } = useParams();
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
    console.log(`fetchItems(${newPage}, ${apiLoading})`);

    if (!slug) {
      return;
    }

    setApiLoading(true);

    // add phantom rows
    let oldActivities = rows.slice(
      0,
      (newPage - 1) * getCollectionActivities_ItemCountPerRequest
    );
    let newActivities = generateEmptyActivities(
      getCollectionActivities_ItemCountPerRequest
    );
    let mergedActivities: tActivitiesResult[] =
      oldActivities.concat(newActivities);
    setRows(mergedActivities);

    try {
      mergedActivities = [...oldActivities];
      const res = await getCollectionActivities(
        newPage,
        slug,
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
      setHasNextPage(false);

      setRows(oldActivities);
    }

    setApiLoading(false);
  };

  return (
    <Activity
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
