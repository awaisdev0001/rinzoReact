import { useState, useEffect } from 'react';
import { uniq } from 'lodash';

import { ReviewUpperInfo, EmptyData, BaseSelect, PlaceOrderRouting } from 'src/view/components';
import { IconEther, IconArrowRightLeft } from "src/assets/icons";
import { Button } from '@mui/material';
import { ListingTable } from './ListingTable';

import { CreateListingSummary } from './CreateListingSummary';

import { collumns, marketplaces, selectMobileData } from './data';
import { tCollectionItemExtend } from 'src/typed/types';
import { tMarketplacesExtend } from './types';
import { toLocaleUS, uniqueBy } from 'src/helpers';
import { useAppSelector, useAppDispatch, useWindowSize } from 'src/hooks';
import { changePopUp, removeAllItemsOfSellNFTs } from 'src/store';

import './CreateListing.scss';
import { Settings } from './Settings';
import {
	firstFetch,
	forthFetch,
	secondFetch,
	thirdFetch,
} from './CreateListingSummary/listingData';
import { ConfirmModal } from 'src/view/components/ConfirmModal';
import { tCurrencyPriceReducer } from 'src/store/globalPriceEth/reducer';
import { useAccount, useSignMessage } from 'wagmi';
import { SiweMessage } from 'siwe';
import { useConnectAccountHook } from 'src/hooks/connectAccounts';
import {
  changeMarketPlacesDurations,
  getAllMarketPlaces,
  selectMarketPlace,
  changeNFTPrice,
  removeNFTFromMarketPlace,
  refreshTheMarketPlacesAndData,
  cencelItemFromListing,
  selectTheRowItem,
  updateTheSummary,
} from "src/store/sellNFTs/reducer.actions";

type tSum = {
	sumEth: number;
	sumUsd: number;
};

export const CreateListing = () => {
	const dispatch = useAppDispatch();
	const { address: selectedAddress } = useAccount();
	const { signMessageAsync } = useSignMessage();
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const { selectedCards, arrayOfMarketPlaces, summarySection } = useAppSelector(
    (state) => state.sellNFTsReducerReducer
  );
	const { account } = useAppSelector(state => state.accountReducer);
	const { usd } = useAppSelector<tCurrencyPriceReducer>(state => state.CurrencyPriceReducer);
	// const [selectedCards, setTableData] = useState<tCollectionItemExtend[]>([]);
	const [pageData, setPageDate] = useState({
		sort: 'purchase_price',
		order: 'desc',
	});
	const [smallMarketsList, setSmallMarketsList] = useState<string[]>([]);
	const [openSettings, setOpenSettings] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [confirm, setConfirm] = useState<boolean>(false);
	const [activeIdForCancel, setActiveIdForCancel] = useState<string | number>('');
	const { width } = useWindowSize();
	const { connectAccount } = useConnectAccountHook();
    /**
		Selects a row with given id or all rows if id is 'all'.
		@param {boolean} val - value to set for checked property of the selected row(s).
		@param {number|string} id - id of the row to select or 'all' to select all rows.
		@returns {void}
	*/
	const selectRow = (val: boolean, id: number | string) => {
		dispatch(selectTheRowItem({ val, id }));
		updateSummary();
	};
	
	/**
	Updates the price of an NFT in the table data based on the given parameters.
		@param {object} el - Object containing the current price, currency, and id of the NFT.
		@param {string} el.cur - Currency of the NFT.
		@param {number|string} el.price - New price of the NFT.
		@param {number|string} el.id - Id of the NFT to update.
		@returns {void}
	*/

	const changeNftPrice = (el: { cur?: string; price?: number | string; id: number | string }) => {
		const { cur, id, price } = el;
		dispatch(changeNFTPrice({ cur, id, price }));
		refreshTableDataMarketplaces();
		updateSummary();
	};

	/**
		Set the confirmation state and active ID for cancelling a listing.
		@param {number|string} id - The ID of the listing to be cancelled.
	*/
	const cancelListing = (id: number | string) => {
		setConfirm(true);
		setActiveIdForCancel(id);
	};

	/**
	 * Removes the cancelled listing from selectedCards and summarySection
	 */
	const handleCancelListing = () => {
		dispatch(cencelItemFromListing(activeIdForCancel));
	    setConfirm(false); // reset the confirmation state
	};

	/**
	 * Updates the checked state of a marketplace based on user selection
	 * @param {string} title - The title of the marketplace
	 * @param {boolean} checked - The checked state of the marketplace
	 */
	const selectMarketPlaces = (item: tMarketplacesExtend, checked: boolean ) => {
		dispatch(selectMarketPlace(item));
	};

	/**
	 * Updates the duration property of all marketplaces
	 * @param {string} key - The new value for the duration property
	 */
	const changeMarketPlacesDuration = (key: string) => {
		dispatch(changeMarketPlacesDurations(key));
	};

	/**
	 * Removes a listing from a specific marketplace
	 * @param {string} market - The name of the marketplace
	 * @param {number|string} id - The ID of the listing to be removed
	 */
	const removeFromMarket = (market: string, id: number | string) => {
		dispatch(removeNFTFromMarketPlace({market, id}));
	    updateSummary(); // update the summary section after removing the listing from a marketplace
	};

	/**
	 * Refreshes the table data with the updated marketplace data
	 */
	const refreshTableDataMarketplaces = () => {
		dispatch(
      refreshTheMarketPlacesAndData(<IconEther className="eth--only-white" />)
	    );
		updateSummary();
	};

	/**
	 * Updates the summary section based on the new table data
	 */
	const updateSummary = () => {
    	dispatch(updateTheSummary())
  	};
	
	// Initializes the marketplaces data with the available marketplaces
	useEffect(() => {
	  const marketplacesDataa = marketplaces.map(el => {
	    return el;
	  });
		dispatch(getAllMarketPlaces(marketplacesDataa));
		return () => {
       		dispatch(getAllMarketPlaces(marketplacesDataa));
     	};
	  
	}, []);

	// Refreshes the table data and small markets list when the marketplaces data changes
	useEffect(() => {
	  refreshTableDataMarketplaces();
	  setSmallMarketsList(
	    arrayOfMarketPlaces
	      .filter(market => market.checked)
	      .map(el => {
	        return el.image;
	      })
	  );
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [arrayOfMarketPlaces]);

	// Updates the summary section when the table data changes
	useEffect(() => {
	  updateSummary();
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCards]);

	/**
	 * Calculates the total sum of ETH and USD values from an array of collection items
	 * @param {tCollectionItemExtend[]} arr - The array of collection items to sum
	 * @returns {tSum} - The object containing the summed ETH and USD values
	 */
	const totalSummary = (arr: tCollectionItemExtend[]): tSum => {
	  let num: number;
	  return arr.reduce(
	    (aggr: tSum, item): tSum => {
	      if (typeof item.priceUSD !== "number") {
	        num = parseFloat(item.priceUSD.replace(/,/g, ""));
	      }
	      aggr.sumEth += +item.priceETH;
	      aggr.sumUsd += num;
	      return aggr;
	    },
	    {
	      sumEth: 0,
	      sumUsd: 0,
	    }
	  ) as tSum;
	};
	/**
	 * Signs a message for an NFT using the Siwe SDK and logs the resulting signature
	 * @param {any} item - The NFT item to sign a message for
	 * @returns {Promise<void>} - A promise that resolves when the message has been signed and the signature logged
	 */
	const signMessageForNfts = async (item: any): Promise<void> => {
	  console.log("summarySection", item);
	  const message = new SiweMessage({
	    domain: window.location.host,
	    address: selectedAddress,
	    statement: "popup for item", // hardcoded for now
	    uri: window.location.origin,
	    version: "1", // hardcoded for now
	    chainId: 1, // hardcoded for now
	    nonce: "nonce",
	  });
	  const signature = await signMessageAsync({
	    message: message.prepareMessage(),
	  });
	  console.log("signature", signature);
	};
	/**
	 * Creates an OpenSea listing for an NFT and logs the result
	 * @param {any} item - The NFT item to create a listing for
	 * @returns {void} - This function does not return anything
	 */
	const createOpenSeaListing = (item: any): void => {
	  console.log("createOpenSeaListing", item);
	};
	/**
	 * Creates a listing on the LooksRare marketplace for the given NFT
	 * @param {Object} item - The NFT object to be listed
	 */
	const createLooksrareListing = (item: any) => {
	  console.log("createLooksrareListing", item)
	}
	/**
	 * Creates a listing on the X2Y2 marketplace for the given NFT
	 * @param {Object} item - The NFT object to be listed
	 */
	const createX2Y2Listing = (item: any) => {
	  console.log("createX2Y2Listing", item)
	}
	/**
	 * Creates a listing on the Blur.io marketplace for the given NFT
	 * @param {Object} item - The NFT object to be listed
	 */
	const createBlurListing = (item: any) => {
	  console.log("createBlurListing", item)
	}
	/**
	 * Lists an NFT on all selected marketplaces
	 * @param {Object} item - The NFT object to be listed
	 */
	const listNftsToMarketPlaces = (item: any) => {
	  item.markets.forEach((market: any) => {
	    if (market.title === "Rinzo") {
	      // No action required
	    } else if (market.title === "OpenSea") {
	      createOpenSeaListing(item)
	    } else if (market.title === "X2Y2") {
	      createX2Y2Listing(item)
	    } else if (market.title === "LooksRare") {
	      createLooksrareListing(item)
	    } else if (market.title === "Blur.io") {
	      createBlurListing(item)
	    }
	  });
	}

	// Function to handle the submit button click event
	const submitButtonHandler = (arg: boolean): void => {
		// Set the submitted state to true
		setIsSubmitted(arg);

		// Check if the user is not logged in to Blur or X2Y2 accounts, then prompt them to connect their accounts
		if (!account.blurLoggedIn || !account.x2y2LoggedIn) {
			 connectAccount();
		}

		// Prepare object to be sent for analytics
		const analyticsInfo: {
			total_price_eth: string,
			total_price_usd: Number,
			eth_usd: Number,
			nfts: { token_id: number; contract_address: string; price: string | number; price_usd: string | number; exchanges: string[]; }[],
			exchanges: string[];
		} = {
			total_price_eth: '',
			total_price_usd: 0,
			eth_usd: 0,
			nfts: [],
			exchanges: [],
		};

		// Calculate the total ETH and USD price of all NFTs
		analyticsInfo.total_price_eth = toLocaleUS(totalSummary(summarySection).sumEth);
		let total_price_usd = 0;

		// Prepare an array of custom NFT objects to be sent for analytics
		let customNfts: { token_id: number; contract_address: string; price: string | number; price_usd: string | number; exchanges: string[]; }[] = [];

		// Prepare an array of all exchanges that the NFTs are being listed on, to be sent for analytics
		let exchanges: string[] = [];

		// Iterate through each NFT in the summary section
		summarySection.forEach((item) => {
			// Add the USD price of the current NFT to the total USD price of all NFTs
			total_price_usd += Number((String)(item.priceUSD).replace(/\D/g, ''));

			// Get an array of custom exchanges for the current NFT, and add each custom exchange to the exchanges array
			const customExchanges = item.markets.map((market) => market.title);
			customExchanges.forEach((custom) => exchanges.push(custom));

			// Call the signMessageForNfts function to sign the message for each NFT
			signMessageForNfts(item);

			// Prepare a custom NFT object for the current NFT and push it to the customNfts array
			let nftItem = {
				token_id: 0,
				contract_address: account.address,
				price: item.priceETH,
				price_usd: item.priceUSD,
				exchanges: customExchanges,
			};
			customNfts.push(nftItem);
		});

		// List the NFTs to the marketplaces
		summarySection.forEach(item => {
			listNftsToMarketPlaces(item)
		})

		// Add the total USD price of all NFTs, USD price of ETH, the customNfts array, and the exchanges array to the analyticsInfo object
		analyticsInfo.total_price_usd = total_price_usd;
		analyticsInfo.eth_usd = usd;
		analyticsInfo.nfts = customNfts;
		analyticsInfo.exchanges = uniq(exchanges);

		// Send the analytics event to track NFTs listed
		window.analytics.track("nfts/list", analyticsInfo);

		// Remove all selected cards after the user has successfully listed the items
		dispatch(removeAllItemsOfSellNFTs());
		
	}

	
	return (
		<div className="listing-page">
			<div className="listing-page__top">
				<ReviewUpperInfo
					title={'Create Your Listings'}
					descPar={
						'Select all options for Listing settings and check Selected NFTs with preview and name.'
					}
				/>
			</div>
			<>
				{isSubmitted && width < 1299 && (
					<PlaceOrderRouting
						title={'Routing'}
						ordersArr={[firstFetch, secondFetch, thirdFetch, forthFetch]}
						popUpTitle={'Listing is almost completed!'}
						popUpDesc={
							'Your listings are being processed by the marketplace. This may take several minutes. Track progress on the “My Listings” tab'
						}
					/>
				)}
			</>
			<div className="listing-page__content">
				<div className="listing-page__content_left">
					<div className="listing-page__content_left__mobile-hidden">
						<Settings
							duration={arrayOfMarketPlaces.length > 0 ? arrayOfMarketPlaces[0].duration : ''}
							marketsItems={arrayOfMarketPlaces}
							selectMarketPlaces={(item: tMarketplacesExtend, checked: boolean) => {
								selectMarketPlaces(item, checked);
							}}
							markets={smallMarketsList}
							setDuration={key => changeMarketPlacesDuration(key)}
							changeNftPriceCurrency={val => changeNftPrice({ cur: val, id: 'all' })}
							changePriceValue={val => changeNftPrice({ price: val, id: 'all' })}
						/>
					</div>
					<div className="listing-page__content_left-bottom">
						{selectedCards.length > 0 ? (
							<>
								<div className="action-line action-line-sticky action-line-mobile action-line--border-small">
									<div className="action-line__filter-button action-line__filter-button--fullwidth-no-margin">
										<Button
											className={`mui-button mui-button--s mui-button--fulwidth mui-button--contained mui-button--contained-black mui-button--contained-black-${themeMode}`}
											onClick={() => {
												setOpenSettings(true);
												dispatch(changePopUp(true));
											}}
											startIcon={<IconArrowRightLeft />}
										>
											Choose Listing Settings
										</Button>
									</div>
									<div className="action-line__select action-line__select--full-width">
										<BaseSelect
											items={selectMobileData}
											selectedValue={pageData.sort}
											onClick={key => {
												setPageDate(prevState => {
													return {
														...prevState,
														sort: key,
													};
												});
											}}
										/>
									</div>
								</div>
								<div className="listing-page__content_left-bottom-table">
									<h2 className="listing-page__content_left-bottom-table_title">
										Items
									</h2>
									<p className="listing-page__content_left-bottom-table_count">
										{selectedCards.length} NFTs
									</p>
								</div>
								<ListingTable
									headerItems={collumns}
									sort={(val: { sort: string; order: string }) =>
										setPageDate(prevState => {
											return {
												...prevState,
												...val,
											};
										})
									}
									order={pageData.order}
									sortName={pageData.sort}
									rowsItems={selectedCards}
									onCheck={({ val, id }) => selectRow(val, id)}
									changeNftPriceCurrency={({ val, id }) =>
										changeNftPrice({ cur: val, id })
									}
									changePriceValue={({ val, id }) =>
										changeNftPrice({ price: val, id })
									}
									cancelListing={(id: number | string) => {
										cancelListing(id);
									}}
								/>
							</>
						) : (
							<EmptyData description=""></EmptyData>
						)}
					</div>
				</div>
				<div className="listing-page__content_right">
					{isSubmitted ? (
						<>
							{width > 1299 && (
								<PlaceOrderRouting
									title={'Routing'}
									ordersArr={[firstFetch, secondFetch, thirdFetch, forthFetch]}
									popUpTitle={'Listing is almost completed!'}
									popUpDesc={
										'Your listings are being processed by the marketplace. This may take several minutes. Track progress on the “My Listings” tab'
									}
								/>
							)}
						</>
					) : (
						<CreateListingSummary
							summaryData={summarySection}
							removeFromMarket={(market, id) => removeFromMarket(market, id)}
							submitButtonHandler={submitButtonHandler}
						/>
					)}
				</div>
			</div>
			<div className={`listing-page__popup ${openSettings && 'listing-page__popup--open'}`}>
				<div className="listing-page__popup_header">
					<ReviewUpperInfo
						title={'Listing settings'}
						descPar={
							'Select all options for Listing settings and check Selected NFTs with preview and name.'
						}
						defaultClick={false}
						customClickAction={() => {
							dispatch(changePopUp(false));
							setOpenSettings(false);
						}}
					/>
				</div>
				<Settings
					duration={arrayOfMarketPlaces.length > 0 ? arrayOfMarketPlaces[0].duration : ''}
					marketsItems={arrayOfMarketPlaces}
					selectMarketPlaces={(item: tMarketplacesExtend, checked: boolean) => {
						selectMarketPlaces(item, checked);
					}}
					markets={smallMarketsList}
					setDuration={key => changeMarketPlacesDuration(key)}
					changeNftPriceCurrency={val => changeNftPrice({ cur: val, id: 'all' })}
					changePriceValue={val => changeNftPrice({ price: val, id: 'all' })}
					closeSettings={() => {
						dispatch(changePopUp(false));
						setOpenSettings(false);
					}}
				/>
			</div>
			<ConfirmModal open={confirm} handleClose={() => setConfirm(false)} title="Are you sure?" handleConfirm={handleCancelListing} />
		</div>
	);
};
