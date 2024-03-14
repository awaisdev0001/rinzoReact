import { apiClient } from "../config";
import { ILeaderBoardLeaderBoard } from "src/typed/requests/leaderBoard";

async function getLeaderboard(
  page: number,
  period: string,
  sortBy: string,
  sortOrder: string,
  componentId: string
) {
  try {
    const res = await apiClient.post<ILeaderBoardLeaderBoard>(
      `/leaderboard`,
      {
        page,
        period,
        sortBy,
        sortOrder,
      },
      {
        headers: {
          componentId: componentId,
        },
      }
    );
    return res.data;
  } catch (ex) {}
}

export default getLeaderboard;
