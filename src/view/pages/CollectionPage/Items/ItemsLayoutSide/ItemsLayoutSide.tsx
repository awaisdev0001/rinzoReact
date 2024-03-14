import { FC, useState, useEffect } from 'react';

import { Container, InputBase } from '@mui/material';
import {
  BaseSelect,
  ResultView,
  BaseButton,
  Loading,
  EmptyData,
} from 'src/view/components';

import { FilterButton } from 'src/view/components';
import { IconSweeps } from 'src/assets/icons';
import { selectData, selectDataForItems } from '../../data';
import { ItemsLayoutCards } from './ItemsLayoutCards';
import { ItemsLayoutListings } from './ItemsLayoutListings';
import { useAppSelector, useAppDispatch } from 'src/hooks';
import { changeOpenCart, changeSweepCart } from 'src/store';
import { tCartOpenReducer } from 'src/store/layout/reducer';
import { useLocation } from 'react-router-dom';
import { tFilterSidebarEventType } from 'src/typed/types/tFilterTypes/tFilterEventTypes';
import { ICollectionInfo } from 'src/typed/requests/collection';

interface IProps {
  isFilterOpen: boolean;
  changeFilterOpenOption: (arg: boolean) => void;
  isItems?: boolean;
  selectedFilterOptions: tFilterSidebarEventType;
  collection: ICollectionInfo;
}
export const ItemsLayoutSide: FC<IProps> = ({
  isFilterOpen,
  changeFilterOpenOption,
  isItems = false,
  selectedFilterOptions,
  collection,
}) => {
  const [pageData, setPageData] = useState({
    status: 'live',
    result: 29,
    updateTime: 30,
    search: '',
    select: isItems ? 'rare_to_common' : 'recently_listed',
  });
  const { pathname } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { themeMode } = useAppSelector((state) => state.themeReducer);
  const { cartOpen, sweepOpen } = useAppSelector<tCartOpenReducer>(
    (state) => state.cartOpenReducer
  );
  const dispatch = useAppDispatch();
  const changeSweepMode = (arg: boolean) => {
    dispatch(changeSweepCart(arg));
    // if (!cartOpen && !arg) {
    //   dispatch(changeOpenCart(true));
    // }
  };

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  //   if (pageData.search) {
  //     setError(true);
  //   } else setError(false);
  // }, [pageData.search]);

  useEffect(() => {
    if (isItems) {
      setPageData({
        ...pageData,
        select: 'rare_to_common'
      })
    } else {
      setPageData({
        ...pageData,
        select: 'recently_listed'
      })
    }
    // eslint-disable-next-line
  }, [isItems]);

  return (
    <Container maxWidth="xl" sx={{ padding: 0 }}>
      <div
        className={`container container-filter ${isFilterOpen && 'container-filter--open'
          } ${cartOpen && 'container-filter--cart'}`}
      >
        <div className="action-line">

         {!isItems && !isFilterOpen && pageData.select === 'recently_listed' &&
          <div className="action-line__result action-line__result--fullwidth">
            <ResultView {...pageData} />
          </div> 
          }

          <div className="action-line__search action-line__search--flexible">
            <InputBase
              className="mui-input mui-input--simple mui-input--simple-flexible"
              placeholder="Search NFTs by name, token ID"
              inputProps={{
                'aria-label': 'Search NFTs by name, token ID',
              }}
              onChange={(e) => {
                setPageData((prevState) => {
                  return {
                    ...prevState,
                    search: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="action-line__select action-line__select--flexible action-line__select-margin-left action-line__select-three-in-line">
            <BaseSelect
              items={isItems ? selectDataForItems : selectData}
              selectedValue={pageData.select}
              onClick={(key) => {
                setPageData((prevState) => {
                  if (!isItems) {
                    let customState = {
                      ...prevState,
                      select: key,
                      status: 'live'
                    }

                    if (key !== 'recently_listed') {
                      customState.status = 'paused'
                    }
                    return customState;
                  }
                  return {
                    ...prevState,
                    select: key,
                  }
                });
              }}
            />
          </div>
          {
            !isItems &&
            <div className="action-line__sweep-mode action-line__sweep-mode-three-in-line">
              <BaseButton
                className={`button button--icon button--icon-right button--outline button--outline-xl button--outline-black ${sweepOpen && 'button--outline-black-active'
                  } ${themeMode}`}
                text="Sweep Mode"
                icon={<IconSweeps />}
                onClick={() => {
                  changeSweepMode(!sweepOpen);
                }}
              />
            </div>
          }
          <div className="action-line__filter-button action-line__filter-button-three-in-line">
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
        ) : pathname === '/collection/peachy-puch/listings' ? (
          <ItemsLayoutListings isCartOpen={cartOpen} />
        ) : (
          <ItemsLayoutCards
            isCartOpen={cartOpen}
            isItems={isItems}
            selectedFilterOptions={selectedFilterOptions}
            pageFilterOptions={pageData}
            collection={collection}
          />
        )}
      </div>
    </Container>
  );

};
