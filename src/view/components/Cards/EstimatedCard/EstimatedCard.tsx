import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    IconAddToBasket,
    IconDiamond,
    IconEther,
    IconRank,
    IconArrowTopEmptyLong,
} from 'src/assets/icons';
import { tCollectionItem, tMarketplaces } from 'src/typed/types';
import { useAppSelector } from 'src/hooks';
import './EstimatedCard.scss';
import { toLocaleUS } from 'src/helpers';
import { Grid } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { Box } from "src/typed/interfaces";
import { MarketsIconList } from 'src/view/components/MarketsIconList';
import { marketplaceList } from 'src/config/marketplaceList';
import { PlaceholderImage } from 'src/view/components/PlaceholderImage';
import { removeDuplicatesFromArray } from 'src/helpers/array';

interface IProps extends tCollectionItem {
    onClick: (arg: any) => void;
    selectedItems: tCollectionItem[];
    className?: string;
    onClickItem: tCollectionItem;
    mouseBox: Box;
    currrentIndex: number;
    selectedIndex: number;
    isClicked: number;
    isItems?: boolean;
    isShiftPressed?: boolean;
    selectedIndexCallback: (arg: any) => void;
    markets?: tMarketplaces[];
    locationpath?:string
}

export const EstimatedCard: FC<IProps> = ({
    imageUrl,
    collection,
    className,
    onClick,
    id,
    selectedItems,
    name,
    rank,
    score,
    priceUSD,
    priceETH,
    estimatedPriceETH,
    estimatedPriceUSD,
    estimatePercent,
    onClickItem,
    checked,
    fee,
    mouseBox,
    currrentIndex,
    selectedIndex,
    selectedIndexCallback,
    isClicked,
    isItems = false,
    isShiftPressed,
    listings,
    markets,
    locationpath
}) => {
    const { themeMode } = useAppSelector(state => state.themeReducer);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [, updateState] = useState<boolean>();
    const [removeBaskitIcon , setremoveBaskitIcon] = useState<boolean>()
    const forceUpdate = useCallback(() => updateState(prevState => !prevState), []);
    const navigate = useNavigate();
    const params = useParams();
    const elementRef = useRef<HTMLDivElement | null>(null);
    const boxesIntersect = (boxA: Box, boxB: Box) =>
        boxA.left <= boxB.left + boxB.width &&
        boxA.left + boxA.width >= boxB.left &&
        boxA.top <= boxB.top + boxB.height &&
        boxA.top + boxA.height >= boxB.top;

    useEffect(()=>{
        locationpath ? setremoveBaskitIcon(true): setremoveBaskitIcon(false)
    },[])

    useEffect(() => {

        if (elementRef.current) {
            let { left, top, width, height } = elementRef.current.getBoundingClientRect();
            const elementBox = { left: left + window.scrollX, top: top + window.scrollY, height: height, width: width }
            if (boxesIntersect(mouseBox, elementBox) && currrentIndex !== selectedIndex && isShiftPressed) {
                selectedIndexCallback(currrentIndex);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mouseBox.top, mouseBox.left, mouseBox.width, mouseBox.height, isShiftPressed])
    useEffect(() => {
        if (!isItems) {
            if (isClicked > 0 && currrentIndex <= selectedIndex && !checked) {
                onClick(onClickItem)
            }
            else if (isClicked > 0 && currrentIndex > selectedIndex && checked) {
                onClick(onClickItem)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClicked])
    useEffect(() => {
        if (!isItems) {
            if (currrentIndex === selectedIndex || (currrentIndex < selectedIndex && isShiftPressed)) {
                setIsHovered(true)
            }
            else {
                setIsHovered(false)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedIndex, isShiftPressed])

    return (
        <Grid item xs={1} ref={elementRef}>
            <div
                onMouseEnter={(event) => {
                    if (isItems) {
                        return;
                    }
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    if (!isItems) {
                        setIsHovered(false);
                    }
                }}
                className={`estimated-card ${className} ${isHovered ? "hovered" : ""} ${checked ? "checked" : ""} `}
                onClick={() => {
                    if (!isItems && !isShiftPressed) {
                        onClick(onClickItem);
                        forceUpdate();
                    }
                    if (isItems) {
                        navigate(`/collection/${params.slug}/${id}`);
                    }
                }}
            >
                <div className="estimated-card__image">
                    {checked && (
                        <div className="estimated-card__image_add">
                            <p><DoneOutlinedIcon /></p>
                        </div>
                    )}
                    {!checked && (
                        <div
                            className={`estimated-card__image_basket estimated-card__image_basket--${themeMode}`}
                        >
                            <span className="icon">
                                <IconAddToBasket />
                            </span>
                        </div>
                    )}
                    {
                        removeBaskitIcon === true? 
                        <>
                        {!checked && (
                            <div></div>
                        )}
                        </> :
                        <>
                            {!checked && (
                                <div
                                    className={`estimated-card__image_basket estimated-card__image_basket--${themeMode}`}
                                >
                                    <span className="icon">
                                        <IconAddToBasket />
                                    </span>
                                </div>
                            )}
                        </> 
                    }
                    {markets && <MarketsIconList markets={markets.map(el => el.image)} className="estimated-card__image_icon" />}
                    {/* <img
                        src={openSea}
                        className="estimated-card__image_icon"
                        alt="open sea"
                    /> */}
                    <PlaceholderImage
                        src={imageUrl}
                        className="estimated-card__image_thumb"
                        alt="estimated-card__image"
                    />
                    {fee !== undefined && (
                        <div className="estimated-card__image_fee">
                            <p className="estimated-card__image_fee-par">R</p>
                            <p className="estimated-card__image_fee-percent">{fee}% Fee</p>
                        </div>
                    )}
                </div>
                <h6
                    className="estimated-card__name"
                    onClick={(event) => {
                        if (!isShiftPressed) {
                            event.stopPropagation();
                            navigate(`/collection/${params.slug}/${id}`);
                        }
                    }}
                >
                    {name || `${collection?.name} #${collection?.token_id}`}
                </h6>
                <p
                    className="estimated-card__collection"
                    onClick={(event) => {
                        if (!isShiftPressed) {
                            event.stopPropagation();
                            navigate(`/collection/${collection?.contract_address}`);
                        }
                    }}
                >
                    {collection?.name || "#" + collection?.token_id}
                </p>
                <div className="estimated-card__estimation">
                    <div className="estimated-card__estimation_price">
                        <div className="estimated-card__estimation_price-left">
                            <div className="estimated-card__star">
                                <span className="estimated-card__estimation_price-icon">
                                    <IconRank />
                                </span>
                                <p>{rank}</p>
                            </div>
                            <div className="estimated-card__diamond">
                                <span className="estimated-card__estimation_price-icon">
                                    <IconDiamond />
                                </span>
                                <p>{score}</p>
                            </div>
                        </div>
                        {!isItems && (
                            <div className="estimated-card__estimation_price-right">
                                <div className="estimated-card__ether">
                                    <IconEther />
                                    <p>{toLocaleUS(priceETH)}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/**
                     * Commented out for now, we will enable this after we have done ML
                     */}
                    {/* <div
                        className={`estimated-card__estimation_info ${themeMode} estimated-card__estimation_info--${estimatePercent.duration ? 'up' : 'down'
                            }`}
                    >
                        <p>
                            Estimated
                            <span className="estimated-card__estimation_info-eth">
                                <IconEther className="black" />
                            </span>
                            {toLocaleUS(estimatedPriceETH)}
                            <span className="estimated-card__info_percent">
                                <IconArrowTopEmptyLong />
                                {estimatePercent.value}%
                            </span>
                        </p>
                    </div> */}
                </div>
            </div>
        </Grid>
    );
};
