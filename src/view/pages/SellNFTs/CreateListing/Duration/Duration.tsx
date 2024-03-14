import { FC, useEffect, useState } from 'react';
import { InputBase } from '@mui/material';
import './Duration.scss';
import { BaseSelect } from 'src/view/components';
import { onlyPositiveDigitsInputHandler } from 'src/helpers';

interface IProps {
	duration: string | undefined;
	setDuration: (val: string) => void;
}

export const Duration: FC<IProps> = ({ duration, setDuration }) => {
	const [type, setType] = useState<string>('h');
	const [localManuallyDuration, setLocalManuallyDuration] = useState<number | string>('');
	const [localDuration, setLocalDuration] = useState<string>('');
	const durationData: { key: string; title: string }[] = [
		{
			key: '1h',
			title: '1h',
		},
		{ key: '7d', title: '7d' },
		{
			key: '6m',
			title: '6m',
		},
	];
	useEffect(() => {
		if (duration) {
			if (!durationData.find((item) => item.key === duration)) {
				const durationValue = String(duration.match(/\d+/)) || '';
				setLocalManuallyDuration(durationValue);
				setLocalDuration(duration);
			} else {
				setLocalManuallyDuration('')
				setLocalDuration(duration);
			}
		}
	}, [duration]);
	return (
		<div className="duration-line">
			{durationData.map(el => {
				return (
					<button

						className={`duration-line__item ${localDuration === el.key && 'duration-line__item--active'
							}`}

						key={el.key}
						onClick={() => {
							setLocalManuallyDuration('');
							setLocalDuration(el.key);
							setDuration(el.key);
						}}
					>
						{el.title}
					</button>
				);
			})}
			<div className="duration-line__manually">
				<p>Manually</p>
				<div className="duration-line__manually_input">
					<InputBase
						className="mui-input mui-input--simple mui-input--simple-xs"
						type="number"
						placeholder="0"
						inputProps={{ 'aria-label': '0' }}
						value={localManuallyDuration}
						onKeyDown={onlyPositiveDigitsInputHandler}
						onChange={e => {
							setLocalManuallyDuration(+e.target.value || '');
							setLocalDuration(
								`${e.target.value !== '' ? e.target.value + type : ''}`
							);
							setDuration(`${e.target.value !== '' ? e.target.value + type : ''}`);
						}}
					/>
				</div>
				<BaseSelect
					className="base-select--xs"
					items={[
						{ key: 'h', title: 'hours' },
						{ key: 'd', title: 'days' },
						{ key: 'm', title: 'month' },
					]}
					selectedValue={type}
					onClick={key => {
						setType(key);
						setLocalManuallyDuration(localManuallyDuration);
						setLocalDuration(
							`${localManuallyDuration !== '' ? localManuallyDuration : ''}`
						);
						setDuration(
							`${localManuallyDuration !== '' ? localManuallyDuration + key : ''}`
						);
					}}
				/>
			</div>
		</div>
	);
};
