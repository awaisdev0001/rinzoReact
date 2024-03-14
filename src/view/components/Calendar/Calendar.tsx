import { useState, FC, useEffect } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@mui/material';
import './Calendar.scss';

const MyContainer = ({ className, children, days, cancelClickHandler, applyClickHandler }: any) => {
	return (
		<div className="my__date__container">
			<CalendarContainer className={className}>
				<div style={{ position: 'relative' }}>{children}</div>
			</CalendarContainer>
			<div className="my__date__container__range">
				<p>
					<span>Range:</span> {days} days
				</p>
				<div className="my__date__container__range__buttons">
					<div className="my__date__container__range__buttons-btn">
						<Button
							onClick={cancelClickHandler}
							className="mui-button mui-button--m mui-button--fulwidth mui-button--contained mui-button--contained-green"
						>
							Cancel
						</Button>
					</div>
					<div className="my__date__container__range__buttons-btn">
						<Button
							onClick={applyClickHandler}
							className="mui-button mui-button--m mui-button--fulwidth mui-button--outline mui-button--outline-green"
						>
							Apply
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

type tCalendarProps = {
	startDate?: Date;
	endDate?: Date | null;
	onCancel?: () => void;
	onApply?: (startDate: Date, endDate: Date | null) => void;
};

export const Calendar: FC<tCalendarProps> = (props) => {
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(null);
	const [onCalendarOpen, setOnCalendarOpen] = useState<boolean>(false);

	useEffect(() => setStartDate(props.startDate || new Date()), [props.startDate]);
	useEffect(() => setEndDate(props.endDate || null), [props.endDate]);

	const onChange = (dates: any[]) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const calendarOpenClickHandler = () => {
		setOnCalendarOpen(prevState => !prevState);
	};

	const cancelClickHandler = () => {
		setStartDate(props.startDate || new Date());
		setEndDate(props.endDate || null);
		setOnCalendarOpen(false);
		props.onCancel && props.onCancel();
	};

	const applyClickHandler = () => {
		setOnCalendarOpen(false);
		props.onApply && props.onApply(startDate, endDate);
	};

	const difference = endDate === null ? 1 : endDate.getTime() - startDate.getTime();
	const days = Math.ceil(difference / (1000 * 3600 * 24));

	return (
		<DatePicker
			calendarClassName="rasta-stripes"
			calendarContainer={props => (
				<MyContainer
					days={days}
					applyClickHandler={applyClickHandler}
					cancelClickHandler={cancelClickHandler}
					{...props}
				/>
			)}
			monthsShown={2}
			selected={startDate}
			onChange={onChange}
			startDate={startDate as Date}
			endDate={endDate}
			selectsRange
			showPreviousMonths={false}
			open={onCalendarOpen}
			onInputClick={calendarOpenClickHandler}
			onClickOutside={() => setOnCalendarOpen(false)}
			placeholderText="Date Range"
		/>
	);
};
