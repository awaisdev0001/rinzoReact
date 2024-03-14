import { FC, useState, useEffect } from 'react';
import { EmptyData, BaseSelect } from 'src/view/components';

import { ListingsTable } from './ListingsTable';
import { collumns, rows, selectMobileData } from './data';
import { tListingRow } from './types';
import { useAppSelector } from 'src/hooks';
import './ItemsLayoutListings.scss';

interface IProps {
  isCartOpen: boolean;
}

export const ItemsLayoutListings: FC<IProps> = ({ isCartOpen }) => {
  const { themeMode } = useAppSelector((state) => state.themeReducer);
  const [tableData, setTableData] = useState<tListingRow[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [pageData, setPageDate] = useState({
    sort: 'last_item_price',
    order: 'desc',
  });

  const selectRow = (val: boolean, id: number | string) => {
    id === 'all' && setChecked(val);
    setTableData((prevState) =>
      prevState.map((el) => {
        if (id === 'all') {
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
    const result = tableData.filter((row) => row.id !== id);
    setTableData(result);
  };

  useEffect(() => {
    const tableData = rows.map((el) => {
      return { ...el, checked: false };
    });
    setTableData(tableData);
  }, []);

  return (
    <>
      <div className={`action-line action-line-mobile action-line--darker action-line--${themeMode}`}>
        <div className="action-line__select action-line__select--along">
          <BaseSelect
            items={selectMobileData}
            selectedValue={pageData.sort}
            onClick={(key) => {
              setPageDate((prevState) => {
                return {
                  ...prevState,
                  sort: key,
                };
              });
            }}
          />
        </div>
      </div>

      <div style={{ paddingTop: '24px' }} className="collection__items__listing send-page__content send-page__content--big">
        {tableData.length > 0 ? (
          <>
            <ListingsTable
              headerItems={collumns}
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
              rowsItems={tableData}
              onCheck={({ val, id }) => selectRow(val, id)}
              checked={checked}
              cancelListing={(id) => {
                cancelListing(id);
              }}
            />
          </>
        ) : (
          <EmptyData description=""></EmptyData>
        )}
      </div>
    </>
  );
};
