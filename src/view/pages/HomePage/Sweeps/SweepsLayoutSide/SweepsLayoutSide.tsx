import { FC, useState, useEffect } from 'react';

import { ResultView, FilterLine, NoneMuiModal, Loading, EmptyData, BaseSelect } from 'src/view/components';

import { SweepTable } from './SweepTable';
import { HomePageTableModal } from '../../components/HomePageTableModal';
import { FilterButton } from 'src/view/components';

import { tTimeFilter } from 'src/typed/types';
import { timeFilterInitialState, rows, collumn } from '../data';
import { Container } from '@mui/material';

import "./SweepsLayoutSide.scss";

interface IProps {
  isFilterOpen: boolean;
  changeFilterOpenOption: (arg: boolean) => void;
}

export const SweepsLayoutSide: FC<IProps> = ({ isFilterOpen, changeFilterOpenOption }) => {
  const [pageData, setPageDate] = useState({
    status: 'paused',
    result: 29,
    updateTime: 30,
    search: '',
    time: '30m',
    sort: 'items',
    order: 'desc',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [timeFilter, setTimeFilter] = useState<tTimeFilter[]>(timeFilterInitialState);

  const changeFilter = (val: string) => {
    let newTimeFilter = [];
    newTimeFilter = timeFilter.map(el => {
      return {
        ...el,
        check: el.val === val,
      };
    });
    setTimeFilter(newTimeFilter);
  };
  const openPopUp = (val: string | number) => {
    setOpenModal(true);
  };

  const handleClosePopup = () => setOpenModal(false);

  useEffect(() => {
    changeFilter(pageData.time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageData.time]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    if (pageData.search) {
      setError(true);
    } else setError(false);
  }, [pageData.search]);

  return (
    <Container maxWidth="xl" sx={{ padding: 0 }}>
      <div
        className={`container container-filter ${isFilterOpen && 'container-filter--open'
          }`}
      >
        <NoneMuiModal
          width={580}
          height={'fit-content'}
          show={openModal}
          onClose={handleClosePopup}
          title={'Rinzo Sweep'}
          isSuccessAnimation={false}
        >
          <HomePageTableModal />
        </NoneMuiModal>
        <div className="action-line">
          <div className="action-line__result">
            <ResultView {...pageData} />
          </div>
          <div className="action-line__filter action-line__filter-mobile-margin">
            <FilterLine
              items={timeFilter}
              changeFilter={(val: string) => {
                setPageDate((prevState) => {
                  return {
                    ...prevState,
                    time: val,
                  };
                });
              }}
            />
          </div>
          <div className="action-line__filter-mobile">
            <BaseSelect items={timeFilter} selectedValue={pageData.time}
              onClick={val => {
                setPageDate(prevState => {
                  return {
                    ...prevState,
                    time: val,
                  };
                });
              }} isForTime />
          </div>
          <div className="action-line__filter-button action-line__filter-button--fullwidth">
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
          <SweepTable
            headerItems={collumn}
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
            openPopUp={openPopUp}
          />
        )}
      </div>
    </Container>
  );
};
