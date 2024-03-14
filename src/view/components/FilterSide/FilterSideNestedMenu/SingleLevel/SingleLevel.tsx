import { FC, useRef, useState } from 'react';
import { ListItem } from '@mui/material';
import { MainCheckbox } from '../../../index';
import { tMenuNestedItem } from 'src/typed/types';
import './SingleLevel.scss';
import { singleItemListNameStyle } from './styles';

type tProps = tMenuNestedItem & {
	onChange?: (checked: boolean) => void;
	checked?: boolean;
};

export const SingleLevel: FC<tProps> = ({ title, number, onChange, checked: initialChecked }) => {
	const [checked, setChecked] = useState<boolean>(initialChecked ?? false);
	const nodeRef = useRef<HTMLInputElement>();

	return (
		<ListItem style={singleItemListNameStyle} button disableRipple disableTouchRipple>
			<MainCheckbox
				//eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				ref={nodeRef}
				checked={checked}
				onChange={e => {
					setChecked(e.target.checked);
					onChange && onChange(e.target.checked);
				}}
			/>
			<div className='singleLevel__main__wrap' onClick={() => nodeRef.current?.click()}>
				<p className="singleLevel__main__wrap-title">{title}</p>
				<p className="singleLevel__main__wrap-number">{number}</p>
			</div>
		</ListItem>
	);
};
