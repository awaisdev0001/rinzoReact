import { FC, useRef } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { MainCheckbox } from 'src/view/components';
import { IconArrowTopFull } from 'src/assets/icons';

import './TableHeader.scss';

interface IProps {
  items: any[];
  sort: (args: any) => any | void;
  sortName: string;
  order: string;
  className?: string;
  checked?: boolean;
  onCheck?: (args: boolean) => any | void;
  setSorting: (args: any) => any | void;
}

export const TableHeader: FC<IProps> = ({
  items,
  sort,
  sortName,
  order,
  className,
  checked,
  onCheck,
  setSorting,
}) => {
  const data = ['asc', 'desc'];
  const nodeRef = useRef<HTMLElement | any>();

  return (
    <TableHead className="table__header">
      <TableRow>
        {items.map((elem, index) => {
          const sortDirection =
            sortName === elem.key ? (order === 'desc' ? 'asc' : 'desc') : 'asc';
          return (
            <TableCell
              key={`table__header_content-${elem.key}-${index}`}
              className={`mui-table__th ${sortDirection} ${className} mui-table__th--${elem.collumnClassName}`}
              onClick={() => {
                sort({ sort: elem.key, order: sortDirection });
                setSorting(sortName);
              }}
            >
              <div
                className={`table__header_content ${sortName === elem.key ? 'table__header_content--active' : ''
                  } ${elem.align && `table__header_content--${elem.align}`
                  } table__header_content--${elem.className}`}
              >
                {elem.key === 'checkbox' ? (
                  <div style={{ padding: '0 10px' }}>
                    <MainCheckbox
                      //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      ref={nodeRef}
                      checked={checked}
                      onChange={(e) => {
                        if (onCheck) {
                          onCheck(e.target.checked);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <span className="header-hidden">{elem.nameHidden}</span>
                    {elem.name}
                    <span className="header-tablet-visible">
                      {elem.nameTabletVisible}
                    </span>
                    <span className="header-mobile-visible">
                      {elem.nameMobileVisible}
                    </span>
                    {elem.isSort && (
                      <span className="table__header_sort">
                        {sortName === elem.key ? (
                          <button
                            key={`${elem.key}-${order}`}
                            className={`table__header_sort-item table__header_sort-item-${order} table__header_sort-item--active`}
                          >
                            <IconArrowTopFull />
                          </button>
                        ) : (
                          data.map((el) => {
                            return (
                              <button
                                key={el}
                                className={`table__header_sort-item table__header_sort-item-${el}`}
                              >
                                <IconArrowTopFull />
                              </button>
                            );
                          })
                        )}
                      </span>
                    )}
                  </>
                )}
              </div>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
