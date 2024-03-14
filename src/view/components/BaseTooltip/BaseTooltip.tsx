import { FC, ReactNode, useState } from 'react';
import { useAppSelector } from 'src/hooks';
import './BaseTooltip.scss';
interface IProps {
	text?: string;
	tooltipChildren?: ReactNode;
	children: ReactNode;
	biggerText?: boolean;
	width?: string;
	textClassName?: string;
	positionClassName?: string;
}
export const BaseTooltip: FC<IProps> = ({
	text,
	children,
	biggerText,
	width,
	textClassName,
	tooltipChildren,
	positionClassName = 'top',
}) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const [open, setOpen] = useState(false);
	return (
		<div
			className={`tooltip ${positionClassName}`}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			{children}
			{open && (
				<div
					style={
						biggerText
							? { whiteSpace: 'normal', height: 'fit-content', minWidth: width }
							: {}
					}
					className={`tooltip__content tooltip__content--${themeMode} ${textClassName} ${open ? 'tooltip__content--open' : ''
						}`}
				>
					{tooltipChildren ? (
						tooltipChildren
					) : (
						<>
							<span style={biggerText ? { whiteSpace: 'normal' } : {}}>{text}</span>
						</>
					)}
					<span
						className={`tooltip__content_arrow tooltip__content_arrow--${themeMode} `}
					/>
				</div>
			)}
		</div>
	);
};
