import { FC, MouseEvent } from 'react';

import { MarketsIconList } from 'src/view/components';
import { Button } from '@mui/material';
import { MarketPlaces } from '../MarketPlaces';
import { Duration } from '../Duration';
import { SetPrice } from '../SetPrice';

import { marketplacesLimits } from '../data';
import { tMarketplacesExtend } from '../types';

interface IProps {
	duration: string | undefined;
	marketsItems: tMarketplacesExtend[];
	selectMarketPlaces: (item: tMarketplacesExtend,checked: boolean) => void;
	markets: string[];
	setDuration: (val: string) => void;
	changeNftPriceCurrency: (args: string) => void;
	changePriceValue: (args: number | string) => void;
	closeSettings?: (args?: MouseEvent<any>) => any | void;
}

export const Settings: FC<IProps> = ({
	duration,
	marketsItems,
	selectMarketPlaces,
	markets,
	setDuration,
	changeNftPriceCurrency,
	changePriceValue,
	closeSettings,
}) => {
	return (
		<div className="listing-page__content_left-top">
			<div className="listing-page__content_left-top-block">
				<h6>Select Marketplaces</h6>
				<MarketPlaces
					items={marketsItems}
					selectMarketPlaces={(item: tMarketplacesExtend,  checked: boolean) => {
						selectMarketPlaces(item, checked);
					}}
				/>
			</div>
			<div className="listing-page__content_left-top-block">
				<div>
					<h6>
						Set Duration for <MarketsIconList markets={markets} />
					</h6>
					<Duration
						setDuration={key => {
							setDuration(key);
						}}
						duration={duration}
					/>
					<p>
						If you chose the Listing Duration more or less than marketplace max or min
						durations, we will display it&apos;s limit for each marketplace in the
						summary section
					</p>
					<ul>
						{marketplacesLimits?.map((el, idx) => {
							return (
								<li key={`market-${idx}`}>
									<img src={el.image} alt={el.title} />
									{el.title}
									<span>{el.min ? el.min + ' Min' : el.max + ' Max'}</span>
								</li>
							);
						})}
					</ul>
				</div>
				{/* <div className="collumn">
					<div>
						<h6>
							Set Items Price for <MarketsIconList markets={markets} />
						</h6>
						<SetPrice
							changeNftPriceCurrency={val => changeNftPriceCurrency(val)}
							changePriceValue={val => {
								changePriceValue(val);
							}}
						/>
					</div>
				</div> */}
			</div>
			<div className="listing-page__content_left-top-action">
				<Button
					className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green"
					onClick={() => closeSettings && closeSettings()}
				>
					Apply Settings
				</Button>
			</div>
		</div>
	);
};
