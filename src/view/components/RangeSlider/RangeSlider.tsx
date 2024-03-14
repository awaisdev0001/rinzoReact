import { FC, useEffect, useRef, useState } from 'react';
import { Box, Slider } from '@mui/material';
import './RangeSlider.scss';

function valuetext(value: number) {
  return `${value}°C`;
}

interface IProps {
  rangeType?: 'simple' | 'double';
  onRangeChangeHandler?: (arg: number[]) => void;
  onRangeSimpleChangeHandler?: (arg: number, side: string) => void;
  rangeColor?: string;
  initValChange?: number[];
  maxVal?: number;
  minVal?: number;
  simpleSliderValue?: number;
}

export const RangeSlider: FC<IProps> = ({
  onRangeChangeHandler,
  onRangeSimpleChangeHandler,
  rangeType,
  rangeColor,
  initValChange,
  simpleSliderValue,
  minVal,
  maxVal,
}) => {
  // eslint-disable-next-line
  const [value, setValue] = useState<number[]>([0, maxVal ?? 0]);
  const [simpleValue, setSimpleValue] = useState<number>(0);
  // const [maxVal, setMaxVal] = useState();
  // const [minVal, setMinVal] = useState();

  const oldVal = useRef(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (rangeType === 'simple') {
      const newVal = newValue as number;
      if (newVal > oldVal.current) {
        if (onRangeSimpleChangeHandler) {
          onRangeSimpleChangeHandler(newValue as number, 'right');
        }
      } else if (newVal < oldVal.current) {
        if (onRangeSimpleChangeHandler) {
          onRangeSimpleChangeHandler(newValue as number, 'left');
        }
      }
      oldVal.current = newVal;
      setSimpleValue(newValue as number);
    } else {
      setValue(newValue as number[]);
      if (onRangeChangeHandler) {
        onRangeChangeHandler(newValue as number[]);
      }
    }
  };

  const rangeColorClassNameHandler = (color: string) => {
    if (color === 'AdditionalGold') return 'range__slider-gold';
    return '';
  };

  useEffect(() => {
    // fetch data from API
    // const data = apiClient.get('');
    // const default_max_price = 99999;
    // const default_floor_price = 1000;
    // const maximum_price: any = data === undefined ? default_max_price : default_max_price; // data.maximum_price
    // const floor_price: any = data === undefined ? default_floor_price : default_floor_price; // data.floor_price

    // setMaxVal(maximum_price);
    // setMinVal(floor_price);
    setSimpleValue(simpleSliderValue as number);
  }, [simpleSliderValue]);

  return (
    <Box sx={{ width: '100%' }}>
      {rangeType === 'simple' ? (
        <Slider
          value={simpleValue}
          onChange={handleChange}
          className="range__slider-costume"
          min={0}
          max={maxVal}
        />
      ) : (
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={initValChange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          className={`range__slider-costume ${rangeColor && rangeColorClassNameHandler(rangeColor)
            }`}
          min={minVal || 0}
          max={maxVal}
        />
      )}
    </Box>
  );
};
