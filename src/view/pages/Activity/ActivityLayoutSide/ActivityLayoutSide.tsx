import { FC, useState } from "react";

import {
  BaseSelect,
  ResultView,
  ViewToggle,
  Loading,
  EmptyData,
} from "src/view/components";
import { ActivityTable } from "./ActivityTable";
import { ActivityCards } from "./ActivityCards";

import { column, selectData } from "../data";
import { FilterButton } from "src/view/components";
import { tAdditionData, tActivityRow } from "src/typed/types";
import { Container } from "@mui/system";

import "./ActivityLayoutSide.scss";
import { tActivitiesResult } from "src/typed/requests/activities/tActivities";
import InfiniteScroll from "react-infinite-scroll-component";
import { IconLoader } from "src/assets/icons";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

interface IProps {
  isFilterOpen: boolean;
  changeFilterOpenOption: (arg: boolean) => void;
  rows: tActivitiesResult[];
  showAdditionInfo?: boolean;
  additionData: tAdditionData[] | [];
  fetchItems?: (page: number, componentId: string) => void;
  apiLoading?: boolean;
  page?: number;
  hasNextPage?: boolean;
}

export const ActivityLayoutSide: FC<IProps> = ({
  isFilterOpen,
  changeFilterOpenOption,
  rows,
  additionData,
  fetchItems,
  apiLoading,
  page,
  hasNextPage,
}) => {
  const [pageData, setPageDate] = useState({
    status: "live",
    result: 29,
    updateTime: 30,
    search: "",
    sort: "value",
    order: "desc",
    select: "date_newest_oldest",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [view, setView] = useState("list");
  const componentId = useComponentIdGenerator();

  // useEffect(() => {
  // 	setLoading(true);
  // 	setTimeout(() => {
  // 		setLoading(false);
  // 	}, 1500);
  // 	if (pageData.search) {
  // 		setError(true);
  // 	} else setError(false);
  // }, [pageData.search]);

  return (
    <Container maxWidth="xl" sx={{ padding: 0 }}>
      <div
        className={`container container-filter ${
          isFilterOpen && "container-filter--open"
        }`}
      >
        <div className="action-line">
          <div className="action-line-top-mobile">
            <div className="action-line__result">
              <ResultView {...pageData} />
            </div>
            <div className="action-line__view">
              <ViewToggle
                type={view}
                changeView={(val) => {
                  setView(val);
                }}
              />
            </div>
          </div>
          <div className="action-line__result desktop">
            <ResultView {...pageData} />
          </div>
          <div
            className={`action-line__select action-line__select--mobile-70 action-line__select--margin-top`}
          >
            <BaseSelect
              items={selectData}
              selectedValue={pageData.select}
              onClick={(key) => {
                setPageDate((prevState) => {
                  return {
                    ...prevState,
                    select: key,
                  };
                });
              }}
            />
          </div>
          <div className="action-line__view desktop">
            <ViewToggle
              type={view}
              changeView={(val) => {
                setView(val);
              }}
            />
          </div>
          <div
            className={`action-line__filter-button  action-line__filter-button--mobile-30 ${
              view === "list" && "action-line__filter-button--fullwidth"
            }`}
          >
            <FilterButton
              onClick={() => {
                changeFilterOpenOption(true);
              }}
            />
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <EmptyData />
        ) : (
          <InfiniteScroll
            dataLength={rows.length}
            next={() => fetchItems && fetchItems((page ?? 0) + 1, componentId)}
            hasMore={!apiLoading && !!hasNextPage}
            loader={
              <div className="table__loader-icon">
                <IconLoader />
              </div>
            }
            scrollableTarget="body"
            scrollThreshold={0.95}
          >
            {/* {additionData.length > 0 && (
							<div
								className={`page-additional page-additional--small ${view === 'grid' && 'page-additional--with-padding'
									}`}
							>
								{additionData.map(el => {
									return (
										<RowAdditionInfo
											{...el}
											key={`activity-addition-${el.id}`}
											className="addition-item--small"
										/>
									);
								})}
							</div>
						)} */}
            {view === "list" ? (
              <ActivityTable
                headerItems={column}
                sort={(val: { sort: string; order: string }) =>
                  setPageDate((prevState) => {
                    return {
                      ...prevState,
                      ...val,
                    };
                  })
                }
                order={pageData.order}
                sortName={pageData.sort}
                rowsItems={rows}
              />
            ) : (
              <>
                <ActivityCards rows={rows} />
              </>
            )}
          </InfiniteScroll>
        )}
      </div>
    </Container>
  );
};
