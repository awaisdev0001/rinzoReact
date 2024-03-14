import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { tTimeFilter } from 'src/typed/types';
import { useAppSelector } from 'src/hooks';
import './FilterLine.scss';

interface IProps {
	items: tTimeFilter[];
	changeFilter: (arg: string) => void;
	className?: string;
}

export const FilterLine: FC<IProps> = ({ items, changeFilter, className }) => {
	const container = useRef<HTMLDivElement>(null);
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const [bgСoordinates, setBgСoordinates] = useState({
		width: 0,
		left: 0,
	});
	const changeBgСoordinates = (e: MouseEvent) => {
		const el = e.target as HTMLElement;
		const offsetLeft = el.offsetLeft;
		const offsetWidth = el.offsetWidth;
		setBgСoordinates({ width: offsetWidth, left: offsetLeft });
	};
	useEffect(() => {
		function handleResize() {
			// Set window width/height to state
			const activeButtons = container.current?.getElementsByClassName('filter-line__item--active');
			const el = activeButtons?.[0] as HTMLElement;
			const offsetLeft = el.offsetLeft;
			const offsetWidth = el.offsetWidth;
			setBgСoordinates({ width: offsetWidth, left: offsetLeft });
		}

		window.addEventListener("resize", handleResize);
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div
			ref={container}
			className={`filter-line ${className} filter-line--${themeMode} ${items.length > 6 && 'filter-line--small-item'
				}`}
		>
			{items.map(el => {
				return (
					<button
						key={`filter-item-${el.val}`}
						className={`filter-line__item ${el.check ? 'filter-line__item--active' : ''
							}`}
						onClick={e => {
							changeBgСoordinates(e);
							changeFilter(el.val);
						}}
					>
						{el.title}
					</button>
				);
			})}
			<div
				className="filter-line__bg"
				style={{ left: `${bgСoordinates.left}px`, width: `${bgСoordinates.width}px` }}
			/>
		</div>
	);
};
