import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import ScrollToTop from "react-scroll-to-top";

import {
	FeeStructure,
	MeetRinzo,
	MenuSideBar,
	MarketingMenu,
	TableHeader,
	TableBenefits,
	Rarity,
	MachineLearning,
	MarketInsights,
	Fees,
} from './components';

import {
	tableHeaderData,
	tableHeaderDataWithOpensea,
	bulkActionsData,
	aggregationActionsData,
	portfolioInsightsData,
	marketingCardsArr,
	smartTradersCardsArr,
} from './data';
import {
	feeStructure,
	machineLearning,
	portfolioInsights,
	rarityTracking,
	leaderboards,
	marketInsights,
	bulkActions,
	aggregation,
	fees,
} from './constants';

import iconInfo from 'src/assets/images/marketingPage/iconInfo.svg';
import logo from 'src/assets/images/rinzo-logo-legacy.svg';

import { CloseButton } from 'src/view/components';

import './Marketing.scss';

export const Marketing = () => {
	const navigate = useNavigate();
	return (
		<div className="marketing">
			<div className="marketing__close">
				<div className="marketing__close_logo">
					<img src={logo} alt="rinzo-logo" />
				</div>
				<CloseButton
					onClick={() => {
						navigate('/');
					}}
					className="icon-close--big icon-close--black"
				/>
			</div>
			<MeetRinzo />
			<div className="marketing__content">
				<div className="marketing__content_left">
					<MenuSideBar />
				</div>
				<div className="marketing__content_mobile">
					<MarketingMenu isMobile={true} />
				</div>
				<Container maxWidth="xl" sx={{ padding: 0 }}>
					<div className="marketing__content_right">
						<Element name={feeStructure} className="marketing__content_right-block">
							<div className="marketing__content_right-header">
								<h2 className="title">Did you Know?</h2>
								<p className="marketing__content_right-header-desc">
									The total fees average spent on different NFT platforms:
								</p>
							</div>
							<FeeStructure />
						</Element>
						<Element name={machineLearning} className="marketing__content_right-block">
							<div className="marketing__content_right-header">
								<h2 className="title">Machine Learning</h2>
							</div>
							<MachineLearning />
						</Element>
						<Element name={portfolioInsights} className="marketing__content_right-block">
							<div className="marketing__content_right-header marketing__content_right-header--row">
								<h2 className="title">Portfolio Insights</h2>
								<div className="marketing__content_right-header-right">
									<TableHeader items={tableHeaderDataWithOpensea} />
								</div>
							</div>
							<TableBenefits items={portfolioInsightsData} />
							<div className="marketing__content_addition">
								<span
									className="marketing__content_addition-image"
									style={{ backgroundImage: `url(${iconInfo})` }}
								/>
								<div className="marketing__content_addition-info">
									<h4>
										You can track personal performance with Rinzo and see in real
										time how cool you are from all of the NFT owners.{' '}
									</h4>
									<p>
										We aggregate data across multiple blockchains and NFT exchanges
										to allow users to track their earnings, history, and portfolio.
									</p>
								</div>
							</div>
						</Element>
						<Element name={rarityTracking} className="marketing__content_right-block">
							<div className="marketing__content_right-header">
								<h2 className="title title--capitalize">
									Rinzo uses <br /> internal rarity system
								</h2>
								<p className="marketing__content_right-header-desc marketing__content_right-header-desc--big">
									We scrape the entire blockchain, automatically update IPFS, and
									track every collection in real-time, meaning changes are
									automatically detected.
								</p>
							</div>
							<Rarity />
						</Element>
						<Element name={leaderboards} className="marketing__content_right-block">
							<div className="marketing__content_right-header">
								<h2 className="title">
									Rinzo allows you to follow the smart traders, unlike other platforms
								</h2>
								<p className="marketing__content_right-header-desc">You can track: </p>
							</div>
							<MarketInsights data={smartTradersCardsArr} isGreenBorder={false} />
						</Element>
						<Element name={marketInsights} className="marketing__content_right-block">
							<div className="marketing__content_right-header">
								<h2 className="title">With Rinzo you can view</h2>
							</div>
							<MarketInsights data={marketingCardsArr} isGreenBorder />
						</Element>
						<Element name={bulkActions} className="marketing__content_right-block">
							<div className="marketing__content_right-header marketing__content_right-header--row">
								<h2 className="title">Bulk Actions</h2>
								<div className="marketing__content_right-header-right">
									<TableHeader items={tableHeaderData} />
								</div>
							</div>
							<TableBenefits items={bulkActionsData} />
						</Element>
						<Element name={aggregation} className="marketing__content_right-block">
							<div className="marketing__content_right-header marketing__content_right-header--row">
								<h2 className="title title--small">Aggregation</h2>
								<div className="marketing__content_right-header-right">
									<TableHeader items={tableHeaderData} />
								</div>
							</div>
							<TableBenefits items={aggregationActionsData} />
						</Element>
						<Element name={fees} className="marketing__content_right-block">
							<div className="marketing__content_right-header marketing__content_right-header--row">
								<h2 className="title title--small">Save your Gas with Rinzo!</h2>
							</div>
							<Fees />
						</Element>
						<ScrollToTop smooth color="#d6e892" />
					</div>
				</Container>
			</div>
		</div>
	);
};
