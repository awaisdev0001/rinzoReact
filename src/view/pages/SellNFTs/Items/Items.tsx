import {useState, useCallback, useEffect, useRef} from 'react';
import { BaseSelect, EstimatedCard, SellCart, Loading, EmptyData, ListBlock } from 'src/view/components';
import { Container, Grid, InputBase } from '@mui/material';
import {Box} from "src/typed/interfaces";
import { selectData, selectMarketplaceData, items, listItems } from '../data';
import { tCollectionItem, tCollectionItemExtend } from 'src/typed/types';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import {
    getDataOfSellNFTs,
    selectItemOfSellNFTs,
    getTotalAmountOfSellNFTs,
} from 'src/store';

import { useLocation, useParams } from 'react-router-dom';
export const SellNFTsItems = () => {
    const { themeMode } = useAppSelector(state => state.themeReducer);
    const [pageData, setPageDate] = useState({
        search: '',
        select: 'all',
        selectMarketplace: 'all',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const { arrayOfCards, selectedCards } = useAppSelector(state => state.sellNFTsReducerReducer);
    const [filteredCards, setFilteredCards] = useState<tCollectionItemExtend[]>(arrayOfCards);

   
    const location = useLocation()
    
    // Define a callback function to handle the selection of a collection item
    const selectItemHandler = useCallback(
        (item: tCollectionItem) => {
            setSelectedItems(prevState => {
                if (prevState.includes(item.id as string)) return prevState;
                prevState.push(item.id as string);
                return prevState;
            });
            dispatch(selectItemOfSellNFTs(item));
        },
        [selectedItems.length]
    );

    // Initialize selectIndex state to -1 and define a callback function to set the value of selectIndex
    const [selectIndex, setSelectIndex] = useState<number>(-1);
    const selectedIndexCallback = useCallback(
        (index: number) => {
            setSelectIndex(index);
        },
        [selectIndex]
    );

    // Initialize scrollAwareBox state to an object with initial properties and values of 0, and define a state for tracking whether the Shift key is pressed
    const [scrollAwareBox, setScrollAwareBox] = useState<Box>({ height: 0, left: 0, top: 0, width: 0 });
    let [isClicked, setIsClicked] = useState<number>(0);
let [isShiftPressed, setShiftPressed] = useState<boolean>(false);

    // Create a ref for isShiftPressed state
const refShiftPressed = useRef(isShiftPressed);

// Initialize startX and startY variables to 0 and define a function to update the scrollAwareBox state when the mouse moves
    let startX = 0, startY = 0;
    const handleMouseMove = (e: any) => {
        startX = e.pageX;
        startY = e.pageY;
        const endX = e.pageX;
        const endY = e.pageY;
        setScrollAwareBox({
            top: Math.min(startY, endY),
            left: Math.min(startX, endX),
            width: Math.abs(startX - endX),
            height: Math.abs(startY - endY)
        });
    };

    // Define a function to update the isClicked state when the mouse is clicked with the Shift key pressed
    const handleMouseClick = (e: any) => {
        if (e.shiftKey) {
            setIsClicked(isClicked++);
        }
    };

    // Define a function to update the isShiftPressed state when the Shift key is pressed down
    const handleKeyDown = (e: any) => {
        if (e.shiftKey) {
            setShiftPressed(true)
        }
    };

    // Define a function to update the isShiftPressed state when the Shift key is released
    const handleKeyUp = (e: any) => {
        if (refShiftPressed.current) {
            setShiftPressed(false)
        }
    };

    // Update the refShiftPressed value whenever the isShiftPressed state changes
    useEffect(() => {
        refShiftPressed.current = isShiftPressed;
    }, [isShiftPressed]);

    
    // This useEffect listens for mousemove, click, keydown and keyup events
    // and calls their respective handler functions when the event occurs.
    // It returns a cleanup function that removes the event listeners when the component is unmounted.
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
    
    // This useEffect is called when the component is mounted and runs only once.
    // It updates the data of selected cards and calculates the total amount of sell NFTs.
    useEffect(() => {
        const updatedSelectedCards = items.map((item) => {
            const selectedItem = selectedCards.find((card) => card.id === item.id);
            if (selectedItem && selectedItem.checked) {
                // Update the checked property of the item
                return { ...item, checked: true };
            }
            return item;
        });
        dispatch(getDataOfSellNFTs(updatedSelectedCards));
        dispatch(getTotalAmountOfSellNFTs(items.length));
    }, []);
    

    /**
     * Filters the array of cards based on the search, selectMarketplace and select values in the pageData object.
     * @param {Array} arrayOfCards - The array of cards to be filtered
     * @param {Object} pageData - The object containing the search, selectMarketplace and select values
     */
    useEffect(() => {
      setLoading(true);
      const filterdCards1 = arrayOfCards.filter(item => {
        // Check if search term exists and apply the filter
        if (pageData.search) {
          if (
            item.collection?.name.toLowerCase().indexOf(pageData.search) === -1 &&
            item.collection?.contract_address
              .toLowerCase()
              .indexOf(pageData.search) === -1 &&
            item.collection?.token_id.toString() !== pageData.search
          ) {
            return false;
          }
        }
    
        // Check if selectMarketplace is set to anything other than 'all'
        if (pageData.selectMarketplace !== 'all') {
          if (item.markets.findIndex(market => market.title === pageData.selectMarketplace) === -1) {
            return false;
          }
        }
    
        // Check if select is set to anything other than 'all'
        if (pageData.select !== 'all') {
          if (item.collection?.slug !== pageData.select) {
            return false;
          }
        }
    
        // If all conditions are met, return true
        return true;
      });
      // Set the filtered cards, loading state and error state
      setFilteredCards(filterdCards1);
      setLoading(false);
      setError(filterdCards1.length === 0);
    }, [pageData, arrayOfCards]);


    return (
        <Container maxWidth="xl" sx={{ padding: 0 }}>

            <div className="send-page__content">
                <div className="send-page__content_left">
                    <div
                        className={`action-line action-line--darker action-line--border-small action-line--${themeMode}`}
                    >
                        <h6 className="action-line__text action-line__text--small">
                            {arrayOfCards.length} items
                        </h6>
                        <div className="action-line__search action-line__search--mobile-45">
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
                        {/* <div className={`action-line__select action-line__select--mobile-25`}>
                            <BaseSelect
                                items={selectMarketplaceData}
                                selectedValue={pageData.selectMarketplace}
                                onClick={key => {
                                    setPageDate(prevState => {
                                        return {
                                            ...prevState,
                                            selectMarketplace: key,
                                        };
                                    });
                                }}
                            />
                        </div> */}
                        <div
                            className={`action-line__select action-line__select-margin-left action-line__select--mobile-25`}
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
                        <ListBlock items={listItems} title="Listing NFTs" className="list-block--big" />
                    </div>
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <EmptyData />
                    ) : (
                        <Grid container columns={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 5 }} spacing={2}>
                            {filteredCards?.map((item, currrentIndex) => (
                                <EstimatedCard
                                    className="estimated-card--full-width"
                                    name={item.name}
                                    key={item.id}
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
                                    markets={item.markets}
                                    locationpath={location.pathname}
                                />
                            ))}
                        </Grid>
                    )}
                </div>
                <div className="send-page__content_right">
                    <ListBlock items={listItems} title="Listing NFTs" />
                </div>
                <div
                    className={`send-page__content_cart ${selectedCards.length > 0 && 'send-page__content_cart--open'
                    }`}
                >
                    <SellCart items={selectedCards} />
                </div>
            </div>
        </Container>
    );
};
