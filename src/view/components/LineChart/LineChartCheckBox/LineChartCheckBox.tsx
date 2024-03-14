import { FC } from 'react';
import { CircleIcon } from '../../NoneSvgIcons';
import '../LineChart.scss';

interface IProps {
  item: any;
  index: number;
}

export const LineChartCheckBox: FC<IProps> = ({ item, index }) => {
  return (
    <div key={index} className="line__chart__checkboxes__checkbox">
      <CircleIcon color={item.borderColor} />
      <div className="line__chart__checkboxes__checkbox__choice">
        <input type="checkbox" name={item.label} value={index} />
        <span>{item.label}</span>
      </div>
    </div>
  );
};