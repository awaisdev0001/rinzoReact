import {useState, useCallback, useEffect, useRef} from 'react';

import { BaseSelect, EstimatedCard, SendCart, Loading, EmptyData, ListBlock } from 'src/view/components';
import { InputBase, Button, Grid, Container } from '@mui/material';

import { selectData, items, listItems } from './data';
import { tCollectionItem } from 'src/typed/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import {
	getDataOfSentNFTs,
	selectItemOfSentNFTs,
	getTotalAmountOfNFTs,
	tSentNFTsReducer,
	changeOpenWalletPopUp,
} from 'src/store';

import './SendNFTs.scss';
import {Box} from "src/typed/interfaces";
import { useParams } from 'react-router-dom';

export const SendNFTs = () => {
	const [pageData, setPageDate] = useState({
		search: '',
		select: 'all',
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const params = useParams()

	const [selectedItems, setSelectedItems] = useState<string[]>([]);
	const dispatch = useAppDispatch();
	const { arrayOfCards, selectedCards } = useAppSelector(state => state.sentNFTsReducerReducer);

	const { account } = useAppSelector(state => state.accountReducer);

	const selectItemHandler = useCallback(
		(item: tCollectionItem) => {
			setSelectedItems(prevState => {
				if (prevState.includes(item.id as string)) return prevState;
				prevState.push(item.id as string);
				return prevState;
			});
			dispatch(selectItemOfSentNFTs(item));
		},
		[selectedItems.length]
	);

	const connectWallet = () => {
		dispatch(changeOpenWalletPopUp(true));
	};
	const [selectIndex,  setSelectIndex] = useState<number>(-1);
	const selectedIndexCallback = useCallback(
		(index: number) => {
			setSelectIndex(index);
		},
		[selectIndex]
	);
	const [scrollAwareBox, setScrollAwareBox] = useState<Box>({height: 0, left: 0, top: 0, width: 0});
	let [isClicked,  setIsClicked] = useState<number>(0);
	let [isShiftPressed,  setShiftPressed] = useState<boolean>(false);
	const refShiftPressed = useRef(isShiftPressed);

	let startX=0,startY = 0;
	const  handleMouseMove = (e: any) => {
		startX = e.pageX;
		startY = e.pageY;
		const endX = e.pageX;
		const endY = e.pageY;
		setScrollAwareBox({
			top: Math.min(startY,endY),
			left: Math.min(startX,endX),
			width: Math.abs(startX-endX),
			height: Math.abs(startY-endY)
		});
	};
	const handleMouseClick = (e: any) => {
		if (e.shiftKey) {
			setIsClicked(isClicked++);
		}
	};
	const handleKeyDown = (e: any) => {
		if (e.shiftKey)
		{
			setShiftPressed(true)
		}
	};
	const handleKeyUp = (e: any) => {
		if (refShiftPressed.current)
		{
			setShiftPressed(false)
		}
	};
	useEffect(() => {
		refShiftPressed.current = isShiftPressed;
	},[isShiftPressed]);


	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('click', handleMouseClick);
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);
		return function cleanup() {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('click', handleMouseClick);
			document.removeEventListener('keydown',handleKeyDown);
			document.removeEventListener('keyup',handleKeyUp);

		}
	}, []);

	useEffect(() => {
		const tempArr = items.map((item, index) => {
			if (items[index].id === selectedCards[index]?.id) {
				return { ...item, checked: true };
			}
			return item;
		});

		dispatch(getDataOfSentNFTs(tempArr));
		dispatch(getTotalAmountOfNFTs(items.length));
	}, []);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
		if (pageData.search) {
			setError(true);
		} else setError(false);
	}, [pageData.search]);

	return (
		<Container maxWidth="xl" sx={{ padding: 0 }}>
			<div className="send-page">
				{account.address === '' ? (
					<div className="send-page__noconnected">
						<h2>Connect your wallet to start listing your NFTs</h2>
						<div className="send-page__noconnected_action">
							<Button
								className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green"
								onClick={() => {
									connectWallet();
								}}
							>
								Connect Wallet
							</Button>
						</div>
					</div>
				) : (
					<>
						<div className="container--small">
							<h2 className="send-page__title">Send NFTs</h2>
							<h6 className="send-page__subtitle">
								Here you can send the NFTs to a wallet.
							</h6>
						</div>
						<div className="send-page__content">
							<div className="send-page__content_left">
								<div className="action-line action-line--border-small">
									<h6 className="action-line__text action-line__text--small">
										{arrayOfCards.length} items
									</h6>
									<div className="action-line__search action-line__search--mobile-60">
										<InputBase
											className="mui-input mui-input--simple"
											placeholder="Search NFTs by name and token ID"
											inputProps={{
												'aria-label': 'Search NFTs by name and token ID',
											}}
											onChange={e => {
												setPageDate(prevState => {
													return {
														...prevState,
														search: e.target.value,
													};
												});
											}}
										/>
									</div>
									<div
										className={`action-line__select action-line__select--mobile-20`}
									>
										<BaseSelect
											items={selectData}
											selectedValue={pageData.select}
											onClick={key => {
												setPageDate(prevState => {
													return {
														...prevState,
														select: key,
													};
												});
											}}
										/>
									</div>
								</div>
								<div className="send-page__content_tablet">
									<ListBlock items={listItems} title="Send NFTs" />
								</div>
								{loading ? (
									<Loading />
								) : error ? (
									<EmptyData />
								) : (
									<Grid container columns={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 5 }} spacing={2}>
										{arrayOfCards?.map((item: tCollectionItem,currrentIndex: number) => (
											<EstimatedCard
												key={item.id}
												className="estimated-card--full-width"
												name={item.name}
												priceETH={item.priceETH}
												priceUSD={item.priceUSD}
												imageUrl={item.imageUrl}
												estimatedPriceUSD={item.estimatedPriceUSD}
												estimatedPriceETH={item.estimatedPriceETH}
												id={item.id}
												onClick={selectItemHandler}
												selectedItems={selectedCards}
												collection={item.collection}
												estimatePercent={item.estimatePercent}
												rank={item.rank}
												score={item.score}
												onClickItem={item}
												checked={item.checked}
												mouseBox={scrollAwareBox}
												isClicked={isClicked}
												isShiftPressed={isShiftPressed}
												currrentIndex={currrentIndex}
												selectedIndex={selectIndex}
												selectedIndexCallback={selectedIndexCallback}
												expiry={item.expiry}
												
											/>
										))}
									</Grid>
								)}
							</div>
							<div className="send-page__content_right">
								<ListBlock items={listItems} title="Send NFTs" />
							</div>
							<div
								className={`send-page__content_cart ${selectedCards.length > 0 && 'send-page__content_cart--open'
									}`}
							>
								<SendCart items={selectedCards} />
							</div>
						</div>
					</>
				)}
			</div>
		</Container>
	);
};
