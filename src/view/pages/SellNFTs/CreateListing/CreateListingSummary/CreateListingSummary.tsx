import { FC, useState } from 'react';
import { ListingSummaryRow } from './ListingSummaryRow';
import { ListingSummaryTotalFees } from './ListingSummaryTotalFees';
import { tCollectionItemExtend } from 'src/typed/types';
import { CollapseButton } from 'src/view/components/buttons';
import { Button } from '@mui/material';
import { noop } from 'src/helpers';
import './CreateListingSummary.scss';

interface IProps {
    summaryData: tCollectionItemExtend[];
    removeFromMarket: (market: string, el: string | number) => void;
    submitButtonHandler: (arg: boolean) => void;
}

export const CreateListingSummary: FC<IProps> = ({
    summaryData,
    removeFromMarket,
    submitButtonHandler,
}) => {

    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    // O(n)
    const marketsLen: boolean[] = summaryData.map(item => item.markets.length > 0);
    const isActiveButtonHandlerPrice = (): boolean => {
        const priceHandler: boolean = summaryData[0]?.list_price.price > 0;
        const markets: boolean[] = [...marketsLen, priceHandler];
        return markets.every(value => value);
    };
    let isMarketsAvailable = true;
    if (summaryData.length > 0) {
        const markets = summaryData[0].markets;
        if (markets.length < 1) {
            isMarketsAvailable = false;
        }

        if (markets.length === 1 && markets[0].title === 'Rinzo') {
            isMarketsAvailable = false;
        }

        if (markets.length > 1) {
            isMarketsAvailable = true;
        }
    }
    const isActiveButtonHandlerDuration = (): boolean => {
        const marketsContent = summaryData.flatMap(item => item.markets);
        const marketsDuration: boolean[] = marketsContent.map(item => item.duration !== '---');
        const markets: boolean[] = [...marketsLen, ...marketsDuration];
        return markets.every(value => value);
    };
    function buttonText() {
        return isActiveButtonHandlerPrice() !== true ? 'Set Your Price' : isActiveButtonHandlerDuration() !== true ? 'Set Duration' : ''
    }

    return (
        <div className="cart-overlay cart-overlay--fixed">
            <div className="cart-overlay__header">
                <div className="cart-overlay__header_left cart-overlay__header_left-flex">
                    <h2>Summary</h2>
                </div>
                <div
                    className={`cart-overlay__header_right ${isCollapse && 'cart-overlay__header_right--close'
                        }`}
                >
                    <CollapseButton
                        color="grey"
                        isCollapse={isCollapse}
                        onClick={() => {
                            setIsCollapse(!isCollapse);
                        }}
                    />
                </div>
            </div>
            <div
                className={`cart-overlay__body_items-overlay ${isCollapse && 'cart-overlay__body_items-overlay--hidden'
                    }`}
            >
                <div className="cart-overlay__body_items cart-overlay__body_items--fixed-height">
                    {summaryData.length > 0 &&
                        summaryData.map((el, idx) => {
                            return (
                                <ListingSummaryRow
                                    key={idx}
                                    item={el}
                                    removeFromMarket={market => {
                                        removeFromMarket(market, el.id);
                                    }}
                                />
                            );
                        })}
                </div>
                <ListingSummaryTotalFees
                    className={summaryData.length > 0 ? 'listing-summary-fees--bordered' : ''}
                    isActive={(isActiveButtonHandlerPrice() && isActiveButtonHandlerDuration())}
                    submitButtonHandler={submitButtonHandler}
                    summaryData={summaryData}
                />
            </div>
            <div className="cart-overlay__body_bottom">
                <div className="cart-overlay__buttons">
                    <Button
                        className={`mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-${isActiveButtonHandlerPrice() && isActiveButtonHandlerDuration() ? 'green' : 'blue'
                            }`}
                        onClick={() => {
                            isActiveButtonHandlerPrice() && isActiveButtonHandlerDuration() ? submitButtonHandler(true) : noop();
                        }}
                        disabled={!(isActiveButtonHandlerPrice() && isActiveButtonHandlerDuration() && isMarketsAvailable)}
                    >
                        {(isActiveButtonHandlerPrice() && isActiveButtonHandlerDuration()) ? 'Start Listing' : buttonText()}
                    </Button>
                </div>
            </div>
        </div>
    );

};
