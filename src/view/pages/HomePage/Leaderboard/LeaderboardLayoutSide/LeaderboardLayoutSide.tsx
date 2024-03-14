import { FC, useState, useEffect } from 'react';

import { ResultView, ViewToggle, FilterLine, BaseSelect } from 'src/view/components';
import { LeaderboardTable } from './LeaderboardTable';
import { LeaderBoardCards } from './LeaderBoardCards';

import { tTimeFilter } from 'src/typed/types';
import { tTopRows } from '../types';
import { timeFilterInitialState, rows, afterScrollData, collumn, selectData } from '../data';
import { Container } from '@mui/material';

export const LeaderboardLayoutSide: FC = () => {
    const [tableData, setTableData] = useState<tTopRows[]>([]);
    const [pageData, setPageDate] = useState({
        status: 'live',
        result: 29,
        updateTime: 30,
        time: '30m',
        sort: 'portfolio_value',
        order: 'desc',
        select: 'portfolio_value_high_low',
    });
    const [view, setView] = useState('list');
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
    useEffect(() => {
        changeFilter(pageData.time);
    }, [pageData.time]);

    useEffect(() => {
        const data = rows.map(el => {
            return { ...el, open: false };
        });
        setTableData(data);
    }, [rows]);

    return (
        <Container maxWidth="xl" sx={{ padding: 0 }}>
            <div className="container container-tablet-padding-empty">
                <div className="action-line">
                    <div className="action-line__result">
                        <ResultView {...pageData} />
                    </div>
                    {view === 'grid' && (
                        <div className="action-line__select">
                            <BaseSelect
                                items={selectData}
                                selectedValue={pageData.select}
                                onClick={key => {
                                    setPageDate(prevState => {
                                        return {
                                            ...prevState,
                                            select: key,
                                        };
                                    });
                                }}
                            />
                        </div>
                    )}
                    <div
                        className={`action-line__filter action-line__filter-left-position ${view === 'list' && 'action-line__filter-right-position'
                            }`}
                    >
                        <FilterLine
                            items={timeFilter}
                            changeFilter={(val: string) => {
                                setPageDate(prevState => {
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
                    <div className="action-line__view">
                        <ViewToggle
                            type={view}
                            changeView={val => {
                                setView(val);
                            }}
                        />
                    </div>
                </div>
                {view === 'list' ? (
                    <LeaderboardTable
                        headerItems={collumn}
                        sort={(val: { sort: string; order: string }) =>
                            setPageDate(prevState => {
                                return {
                                    ...prevState,
                                    ...val,
                                };
                            })
                        }
                        order={pageData.order}
                        sortName={pageData.sort}
                        rowsItems={tableData}
                        fetchMoreData={() => {
                            setTimeout(() => {
                                setTableData(prevState => {
                                    return [...prevState, ...afterScrollData];
                                });
                            }, 1500);
                        }}
                    />
                ) : (
                    <LeaderBoardCards />
                )}
            </div>
        </Container>
    );
};
