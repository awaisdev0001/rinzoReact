import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { EmptyData, BaseButton, BaseSelect, ConfirmModal } from 'src/view/components';
import { IconClose } from 'src/assets/icons';
import { OffersSentTable } from './OffersSentTable';

import { collumns, rows, selectMobileData } from './data';
import { tOffersSentRow } from './types';
import { usePrevious, useAppSelector } from 'src/hooks';
import { orderBy } from 'lodash';

export const OffersSent = () => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { canBeCancel, setCanBeCancel, isCancel, setIsCancel } = useOutletContext<any>();
	const prevCanBeCancel = usePrevious(isCancel);

	const [tableData, setTableData] = useState<tOffersSentRow[]>([]);
	const [checked, setChecked] = useState<boolean>(false);
	const [pageData, setPageDate] = useState({
		sort: 'expiration_time',
		order: 'desc',
	});
	const [confirm, setConfirm] = useState<boolean>(false);
	const [activeIdForCancel, setActiveIdForCancel] = useState<string | number>('');

	const selectRow = (val: boolean, id: number | string) => {
		id === 'all' && setChecked(val);
		setTableData(prevState =>
			prevState.map(el => {
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
		setConfirm(true);
		setActiveIdForCancel(id);
	};

	const handleCancelListing = () => {
		const result = tableData.filter(row => row.id !== activeIdForCancel);
		setTableData(result);
		setConfirm(false);
	}

	useEffect(() => {
		const tableData = rows.map(el => {
			return { ...el, checked: false };
		});
		setTableData(tableData);
  
	}, []);

	useEffect(() => {
		if (isCancel && prevCanBeCancel === false) {
			setIsCancel(false);
			if (window.confirm('Are you sure?') === true) {
				const result = tableData.filter(row => !row.checked);
				setTableData(result);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isCancel]);

	useEffect(() => {
		let isChecked = false;
		tableData.forEach(el => {
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
				className={`action-line action-line-mobile action-line--darker action-line--${themeMode}`}
			>
				<div className="action-line__select action-line__select--along">
					<BaseSelect
						items={selectMobileData}
						selectedValue={pageData.sort}
						onClick={key => {
							setPageDate(prevState => {
								return {
									...prevState,
									sort: key,
								};
							});
						}}
					/>
				</div>
			</div>
			<div
				style={{ paddingTop: '24px' }}
				className="send-page__content send-page__content--big"
			>
				{tableData.length > 0 ? (
					<>
						<OffersSentTable
							headerItems={collumns}
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
							rowsItems={orderBy(tableData, pageData.sort, [pageData.order === 'desc' ? 'desc' : 'asc']) as tOffersSentRow[]}
							onCheck={({ val, id }) => selectRow(val, id)}
							checked={checked}
							cancelListing={id => {
								cancelListing(id);
							}}
						/>
						{canBeCancel && (
							<div className="send-page__content_actions">
								<BaseButton
									className="button--icon button--icon-right button--outline button--outline-xxl button--outline-red "
									text="Cancel Selected"
									icon={<IconClose />}
									onClick={() => {
										setIsCancel(true);
									}}
								/>
							</div>
						)}
					</>
				) : (
					<EmptyData description=""></EmptyData>
				)}
			</div>
			<ConfirmModal open={confirm} handleClose={() => setConfirm(false)} title="Are you sure?" handleConfirm={handleCancelListing} />
		</>
	);
};
