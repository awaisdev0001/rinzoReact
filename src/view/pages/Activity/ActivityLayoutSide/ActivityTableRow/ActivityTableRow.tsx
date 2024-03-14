import { FC } from 'react';

import { BaseButton, CollapseButton } from 'src/view/components';
import { IconDiamond, IconEther, IconRank, IconRedirect } from 'src/assets/icons';
import { TableRow, TableCell } from '@mui/material';

import { tActivityRow } from 'src/typed/types';
import { EventType } from 'src/view/components';
import { Link } from 'react-router-dom';
import { toLocaleUS } from 'src/helpers';
import { viewTransaction } from 'src/helpers/viewTransaction';
import { PlaceholderImage } from 'src/view/components/PlaceholderImage';
import { useAppSelector } from 'src/hooks';

import logo from 'src/assets/images/rinzo-logo-light-mode.svg';

interface IProps {
	data: tActivityRow;
	sortName: string;
	setOpen: (args: any) => any | void;
}

export const ActivityTableRow: FC<IProps> = ({ data, sortName, setOpen }) => {
	const viewTransaction = (hash:any) => {
		alert('View transaction');
	};
	const { currency } = useAppSelector((state) => state.currencyReducer);

	return (
    <TableRow
      onClick={() => {
        setOpen(data.id);
      }}
      className={`table__row table__row--with-click tablet ${
        data.open && "table__row--with-click--active"
      }`}
    >
      <TableCell component="th" scope="row">
        <div className="table__row_content">
          <PlaceholderImage
            className="table__row_content-img"
            src={data.item.imageUrl || logo}
            alt=""
          />
          <div className="table__row_content-cell table__row_content-cell-tablet-row">
            <div className="table__row_content--medium">
              <Link
                to={`/collection/${data.item.contractAddress}/${data.tokenId}`}
                className="link"
              >
                {data.item.name || "#" + data.tokenId}
              </Link>
              <span className="subtitle">{data.item.collection}</span>
              <p className="table__row_content--additional-mobile-visible">
                <EventType type={data.event_type} text={data.event_type} />
              </p>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="mobile-hidden">
        <p
          className={`table__row_content table__row_content--center ${
            sortName === "rank" ? "table__row_content--active" : ""
          }`}
        >
          <span className="table__row_content-icon--first">
            <IconRank />
          </span>
          {data.rank}
        </p>
      </TableCell>
      <TableCell className="mobile-hidden" />
      <TableCell className="mobile-hidden">
        <p
          className={`table__row_content table__row_content--left ${
            sortName === "rarity_score" ? "table__row_content--active" : ""
          }`}
        >
          {data.rarity_score === 0 ? <>
          {data.rarity_score}
          </> : <>
          <span className="table__row_content-icon--first">
            <IconDiamond />
          </span>
          {data.rarity_score}</>}
          
        </p>
      </TableCell>
      <TableCell>
        <div
          className={`table__row_content table__row_content--center ${
            sortName === "price" ? "table__row_content--active" : ""
          }`}
        >
          <div className="table__row_content-cell">
            <p className="table__row_content table__row_content--bold">
              {currency === "usd" ? (
                `$${toLocaleUS(data.price.usd)}`
              ) : (
                <span className="table__row_content-icon--first">
                  <IconEther />
                  {data.price.eth}
                </span>
              )}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell className="mobile-hidden">
        <p
          className={`table__row_content table__row_content--center ${
            sortName === "event_type" ? "table__row_content--active" : ""
          }`}
        >
          <EventType type={data.event_type} text={data.event_type} />
        </p>
      </TableCell>
      <TableCell className="mobile-hidden">
        <div className="table__row_content-cell-flex-center">
          {data.date && (
            <p
              className={`table__row_content table__row_content--secondary ${
                sortName === "date" ? "table__row_content--active" : ""
              }`}
            >
              {data.date}
            </p>
          )}
          {data.day && (
            <p className="table__row_content table__row_content--tertiary">
              {data.day}
            </p>
          )}
        </div>
      </TableCell>
      {/* <TableCell className="tablet-hidden">
				<p className="table__row_content table__row_content--center">
					<BaseButton
						className="button--m button--outline button--outline-secondary"
						text="Individual Events"
						onClick={viewTransaction}
					/>
				</p>
			</TableCell> */}
      <TableCell className="tablet-hidden">
        <p className="table__row_content table__row_content--center">
          {data.hash && (
            <BaseButton
              className="button--icon button--outline button--outline-m button--outline-transparent"
              text="View transaction"
              icon={<IconRedirect />}
              onClick={() => viewTransaction(data.hash ?? "")}
            />
          )}
        </p>
      </TableCell>
      <TableCell align="center" className="tablet-visible same-padding">
        <div className="table__row_content table__row_content--center">
          <CollapseButton
            color="white"
            isCollapse={data.open}
            onClick={() => {
              setOpen(data.id);
            }}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};
