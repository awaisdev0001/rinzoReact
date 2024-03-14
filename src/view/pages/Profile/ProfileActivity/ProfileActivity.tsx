import { Activity } from "src/view/pages/Activity";
import { AxiosError } from "axios";
import { tActivityFilterButtons } from "src/view/components/FilterSide/LeaderboardFilterMenu/data";
import { useCallback, useEffect, useState } from "react";
import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import apiLibrary from "src/services/api";
import { useAppSelector } from "src/hooks";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const ProfileActivity = () => {
  const { account } = useAppSelector((state) => state.accountReducer);

  const [selectedFilterOptions, setSelectedFilterOptions] = useState<
    tActivityFilterButtons[]
  >([]);
  const [rows, setRows] = useState<tActivitiesResult[]>([]);
  const [apiLoading, setApiLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const componentId = useComponentIdGenerator();

  useEffect(() => {
    fetchItems(1);
  }, [selectedFilterOptions]);

  const fetchItems = useCallback(
    async (newPage: number) => {
      // Set `apiLoading` state to `true`.
      setApiLoading(true);

      try {
        // Call `getWalletActivities` method with `newPage`, wallet address and selected filters as arguments.
        const res = await apiLibrary.Wallets.getWalletActivities(
          newPage,
          account.address,
          selectedFilterOptions as string[],
          componentId
        );

        // Update `hasNextPage` and `page` states with response data.
        setHasNextPage(res.hasNextPage);
        setPage(newPage);

        // Update `rows` state by adding new items to existing items.
        setRows((oldRows) => {
          // Create a new array of old rows.
          const newRows = [...oldRows];
          // Loop through each item in the response result.
          res?.result?.forEach((activity) => {
            // Check if the item already exists in old rows.
            const exists = oldRows.some(
              (e) => JSON.stringify(e) === JSON.stringify(activity)
            );
            // If item does not exist, add it to new rows.
            if (!exists) {
              newRows.push(activity);
            }
          });
          // Return the new rows array.
          return newRows;
        });
      } catch (error: any | AxiosError) {
        setHasNextPage(false);
      }

      // Set `apiLoading` state to `false`.
      setApiLoading(false);
    },
    [apiLoading, selectedFilterOptions]
  );

  return (
    <Activity
      isProfileActivity
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
