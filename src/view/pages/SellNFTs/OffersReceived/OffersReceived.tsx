import { FC, useEffect, useState } from "react";
import { orderBy } from "lodash";
import { OffersReceivedFilter } from "./OffersReceivedFilter";
import { OffersReceivedTable } from "./OffersReceivedTable";
import { collumns, tableRows, selectMobileData } from "./data";
import { tOffersTableRow } from "./types";
import { useOutletContext } from "react-router-dom";
import { useAppSelector, usePrevious } from "src/hooks";
import {
  BaseButton,
  BaseSelect,
  FilterButton,
  ConfirmModal,
} from "src/view/components";
import { IconCheck, IconClose } from "src/assets/icons";

export const OffersReceived: FC = () => {
  const { themeMode } = useAppSelector((state) => state.themeReducer);
  const [filterOpen, setChangeFilterOpenOption] = useState<boolean>(false);
  const { canBeCancel, setCanBeCancel, isCancel, setIsCancel } =
    useOutletContext<any>();
  const prevCanBeCancel = usePrevious(isCancel);

  const changeFilterOpenOption = (arg: boolean) => {
    setChangeFilterOpenOption(arg);
  };
  const [tableData, setTableData] = useState<tOffersTableRow[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const [confirm, setConfirm] = useState<boolean>(false);
  const [activeIdForCancel, setActiveIdForCancel] = useState<string | number>(
    ""
  );

  const [pageData, setPageData] = useState({
    sort: "pricePurchased",
    order: "desc",
  });

  const selectRow = (val: boolean, id: number | string) => {
    id === "all" && setChecked(val);
    setTableData((prevState) =>
      prevState.map((el) => {
        if (id === "all") {
          return { ...el, checked: val };
        } else if (el.id === id) {
          setChecked(false);
          return { ...el, checked: val };
        }
        return el;
      })
    );
  };

  const cancelListing = (id: number | string) => {
    setConfirm(true);
    setActiveIdForCancel(id);
  };

  const handleCancelListing = () => {
    const result = tableData.filter((row) => row.id !== activeIdForCancel);
    setTableData(result);
    setConfirm(false);
  };

  useEffect(() => {
    const tableData = tableRows.map((el) => {
      return { ...el, checked: false };
    });
    setTableData(tableData);
  }, []);

  useEffect(() => {
    if (isCancel && prevCanBeCancel === false) {
      setIsCancel(false);
      if (window.confirm("Are you sure?") === true) {
        const result = tableData.filter((row) => !row.checked);
        setTableData(result);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCancel]);

  useEffect(() => {
    let isChecked = false;
    tableData.forEach((el) => {
      if (el.checked) {
        isChecked = true;
      }
    });
    setCanBeCancel(isChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData]);

  return (
    <>
      <div
        className={`action-line action-line-tablet action-line--darker action-line--${themeMode}`}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div className="action-line__select action-line__select--along">
            <BaseSelect
              items={selectMobileData}
              selectedValue={pageData.sort}
              onClick={(key) => {
                setPageData((prevState) => {
                  return {
                    ...prevState,
                    sort: key,
                  };
                });
              }}
            />
          </div>
          <div className="action-line__filter-button action-line__filter-button--fullwidth-no-margin">
            <FilterButton
              onClick={() => {
                changeFilterOpenOption(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className="app__content_body">
        <OffersReceivedFilter
          changeFilterOpenOption={changeFilterOpenOption}
          openMobile={filterOpen}
        />
        <OffersReceivedTable
          sort={(val: { sort: string; order: string }) =>
            setPageData((prevState) => {
              return {
                ...prevState,
                ...val,
              };
            })
          }
          headerItems={collumns}
          rowsItems={
            orderBy(tableData, pageData.sort, [
              pageData.order === "desc" ? "desc" : "asc",
            ]) as tOffersTableRow[]
          }
          checked={checked}
          onCheck={({ val, id }) => selectRow(val, id)}
          order={pageData.order}
          sortName={pageData.sort}
          cancelListing={(id) => {
            cancelListing(id);
          }}
        />

        {canBeCancel && (
          <div className="send-page__content_actions">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <BaseButton
                text={"Accept Selected"}
                className="button--icon button--icon-right button--outline button--outline-xxl button--outline-green"
                icon={<IconCheck />}
                onClick={() => {
                  setIsCancel(true);
                }}
              />
              <BaseButton
                className="button--icon button--icon-right button--outline button--outline-xxl button--outline-red "
                text="Ignore Selected"
                icon={<IconClose />}
                onClick={() => {
                  setIsCancel(true);
                }}
              />
            </div>
          </div>
        )}
      </div>
      <ConfirmModal
        open={confirm}
        handleClose={() => setConfirm(false)}
        title="Are you sure?"
        handleConfirm={handleCancelListing}
      />
    </>
  );
};
