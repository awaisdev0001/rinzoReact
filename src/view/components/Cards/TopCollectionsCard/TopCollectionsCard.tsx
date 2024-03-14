import { FC, useRef, useState, useEffect } from 'react';
import { IconBigGrayArrowDown, IconEther, IconGreenArrowUp } from 'src/assets/icons';
import { useAppSelector, useWindowSize } from 'src/hooks';
import { tVolume } from 'src/typed/types';
import './TopCollectionsCard.scss';

interface IProps {
	mainImage: string;
	smallImage: string;
	mainTitle: string;
	volume: tVolume;
	floorPrice: tVolume;
	owners: tVolume;
	smartWallets: tVolume;
	sales: tVolume;
	outlook: boolean;
	timeRange: {
		value: number | string;
		addition_value?: string;
		duration: boolean;
	};
	floorPricePercent: tVolume;
	newListings: {
		value: number | string;
		addition_value?: string;
		duration: boolean;
	};
	supply: string | number;
}

export const TopCollectionsCard: FC<IProps> = ({
	mainImage,
	smallImage,
	mainTitle,
	volume,
	floorPrice,
	owners,
	smartWallets,
	sales,
	outlook,
	timeRange,
	floorPricePercent,
	newListings,
	supply,
}) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { width } = useWindowSize();

	const nodeRef = useRef<HTMLElement | any>();

	const handleOutSideClick = (e: any) => {
		if (width < 764) return;
		if (nodeRef.current.contains(e.target)) {
			return;
		}
		setIsHover(false);
	};

	useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleOutSideClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleOutSideClick);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className="top__collections__card"
			onMouseEnter={width < 764 ? () => '' : () => setIsHover(true)}
			onMouseLeave={width < 764 ? () => '' : () => setIsHover(false)}
			ref={nodeRef}
			style={
				isHover
					? {
						borderColor: `${themeMode === 'light' ? '#ADCA5C' : '#CFE0A0'}`,
						height: 'fit-content',
					}
					: { maxHeight: 'none' }
			}
		>
			<div className="top__collections__card-innerContainer">
				<div
					className="top__collections__card-innerContainer-pic"
					style={{ backgroundImage: `url(${mainImage})` }}
				>
					<img src={smallImage} alt="top__collections-pic" />
				</div>
				<div className="top__collections__card-highlight">
					<h1 className="top__collections__card-highlight-title">{mainTitle}</h1>
				</div>
				<div className="top__collections__card-divLine" />
				<div className="top__collections__card-data">
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Volume</p>
						<p className="top__collections__card-data-option-value volBoldFont">
							<span className="top__collections__card-data-option-value-icon">
								<IconEther />
							</span>
							{volume.value}
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${volume.duration ? 'up' : 'down'
									}`}
							>
								{volume.percent}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Floor Price</p>
						<p className="top__collections__card-data-option-value">
							<span className="top__collections__card-data-option-value-icon">
								<IconEther />
							</span>
							{floorPrice.value}
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${floorPrice.duration ? 'up' : 'down'
									}`}
							>
								{floorPrice.percent}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Owners</p>
						<p className="top__collections__card-data-option-value">
							{owners.value}
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${owners.duration ? 'up' : 'down'
									}`}
							>
								{owners.percent}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Smart Wallets</p>
						<p className="top__collections__card-data-option-value">
							{smartWallets.value}
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${smartWallets.duration ? 'up' : 'down'
									}`}
							>
								{smartWallets.percent}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Sales</p>
						<p className="top__collections__card-data-option-value">
							{sales.value}
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${sales.duration ? 'up' : 'down'
									}`}
							>
								{sales.percent}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Outlook</p>
						<p className="top__collections__card-data-option-value">
							<IconGreenArrowUp />
						</p>
					</div>
				</div>

				{width < 764 ? (
					<div
						onClick={() => setIsHover(true)}
						className="top__collections__card-downGrayIcon"
					>
						{!isHover && <IconBigGrayArrowDown />}
					</div>
				) : (
					<div
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
						className="top__collections__card-downGrayIcon"
					>
						{!isHover && <IconBigGrayArrowDown />}
					</div>
				)}

				{width < 764 && (
					<>
						{isHover && (
							<div>
								<div className="top__collections__card-divLine" />

								<div className="top__collections__card-data-option">
									<p className="top__collections__card-data-option-title">
										Time Listed
									</p>
									<p className="top__collections__card-data-option-value">
										{timeRange.value}
										<span
											className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${timeRange.duration ? 'up' : 'down'
												}`}
										>
											{timeRange.addition_value}
										</span>
									</p>
								</div>
								<div className="top__collections__card-data-option">
									<p className="top__collections__card-data-option-title">
										Avg Price Sold
									</p>
									<p className="top__collections__card-data-option-value">
										<span className="top__collections__card-data-option-value-icon">
											<IconEther />
										</span>
										{floorPricePercent.value}
										<span className="top__collections__card-data-option-value-icon top__collections__card-data-option-value-icon--left">
											<IconGreenArrowUp />
										</span>
										<span
											className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${floorPricePercent.duration ? 'up' : 'down'
												}`}
										>
											{floorPricePercent.percent}
										</span>
									</p>
								</div>
								<div className="top__collections__card-data-option">
									<p className="top__collections__card-data-option-title">
										Listings
									</p>
									<p className="top__collections__card-data-option-value">
										{newListings.value}
										<span
											className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${newListings.duration ? 'up' : 'down'
												}`}
										>
											{newListings.addition_value}
										</span>
									</p>
								</div>
								<div className="top__collections__card-data-option">
									<p className="top__collections__card-data-option-title">
										Supply
									</p>
									<p className="top__collections__card-data-option-value">
										{supply}
									</p>
								</div>
								<div
									onClick={() => setIsHover(false)}
									className="top__collections__card-downGrayIcon top__collections__card-downGrayIcon--up"
								>
									{isHover && <IconBigGrayArrowDown />}
								</div>
							</div>
						)}
					</>
				)}
			</div>
			{width > 764 && (
				<div className={`${isHover ? 'dataDropDownActive' : 'dataDropDownNone'}`}>
					<div className="top__collections__card-divLine" />

					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Time Listed</p>
						<p className="top__collections__card-data-option-value">
							{timeRange.value}
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${timeRange.duration ? 'up' : 'down'
									}`}
							>
								{timeRange.addition_value}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Avg Price Sold</p>
						<p className="top__collections__card-data-option-value">
							<span className="top__collections__card-data-option-value-icon">
								<IconEther />
							</span>
							{floorPricePercent.value}
							<span className="top__collections__card-data-option-value-icon top__collections__card-data-option-value-icon--left">
								<IconGreenArrowUp />
							</span>
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${floorPricePercent.duration ? 'up' : 'down'
									}`}
							>
								{floorPricePercent.percent}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Listings</p>
						<p className="top__collections__card-data-option-value">
							{newListings.value}
							<span
								className={`top__collections__card-data-option-value-percent top__collections__card-data-option-value-percent--${newListings.duration ? 'up' : 'down'
									}`}
							>
								{newListings.addition_value}
							</span>
						</p>
					</div>
					<div className="top__collections__card-data-option">
						<p className="top__collections__card-data-option-title">Supply</p>
						<p className="top__collections__card-data-option-value">{supply}</p>
					</div>
					<div
						className="top__collections__card-downGrayIcon top__collections__card-downGrayIcon--up"
						onClick={() => setIsHover(false)}
					>
						{isHover && <IconBigGrayArrowDown />}
					</div>
				</div>
			)}
		</div>
	);
};
