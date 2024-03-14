import { FC } from 'react';
import { Calendar } from '../Calendar';
import { CalendarIcon } from 'src/assets/icons';
import './CalendarInput.scss';

type tProps = {
  startDate?: Date;
  endDate?: Date | null;
  onCancel?: () => void;
  onApply?: (startDate: Date, endDate: Date | null) => void;
};

export const CalendarInput: FC<tProps> = ({
  startDate,
  endDate,
  onCancel,
  onApply,
}) => {
  return (
    <div className="calendar__input">
      <Calendar
        startDate={startDate}
        endDate={endDate}
        onCancel={onCancel}
        onApply={onApply}
      />
      <CalendarIcon />
    </div>
  );
};
