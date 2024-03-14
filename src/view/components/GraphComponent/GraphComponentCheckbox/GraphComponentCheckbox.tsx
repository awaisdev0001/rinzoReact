import { forwardRef, useState } from 'react';
import { MainCheckbox } from 'src/view/components/Checkboxes';
import { tChartDatasets } from 'src/typed/types';
import '../GraphComponent.scss';

interface IProps {
	index: number;
	item: tChartDatasets;
	onCheckboxClickHandler: (arg: any) => void;
	labelsArr: any[];
}

export const GraphComponentCheckbox = forwardRef<HTMLInputElement, IProps>(
	({ item, index, onCheckboxClickHandler, labelsArr }, inputRef) => {
		const [label, setLabel] = useState<string>('');

		return (
			<div
				key={item + '' + index}
				className="graph__component__section__checkboxes__checkbox"
			>
				<MainCheckbox
					onChange={e => {
						onCheckboxClickHandler(e);
					}}
					labelText={item.label}
					//eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					ref={inputRef}
					checked={!labelsArr.find(item => item.text === label)?.hidden}
					onClick={() => setLabel(item.label)}
					value={index}
				/>
			</div>
		);
	}

);

GraphComponentCheckbox.displayName = 'GraphComponentCheckboxComponent';
