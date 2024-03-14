import { FC } from 'react';
import pic from 'src/assets/images/collectionPage/chineseVilliger.png';
import errorPic from 'src/assets/images/collectionPage/errorPopupAvatar.png';
import { BaseButton } from 'src/view/components';
import { IconPopupWallet, IconRedirect, TwitterIcon } from 'src/assets/icons';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/hooks';
import './PlaceOrderPopup.scss';

interface IProps {
    isTransferPopUp?: boolean;
    isError?: boolean;
    mainTitle?: string;
    mainDesc?: string;
    transferItems?: string | number;
}

export const PlaceOrderPopup: FC<IProps> = ({
    isTransferPopUp,
    isError,
    mainTitle,
    mainDesc,
    transferItems,
}) => {
    const navigate = useNavigate();
    const { themeMode } = useAppSelector(state => state.themeReducer);

    const onButtonClickHandler = () => {
        alert('it works but need backend');
        return '';
    };
    return (
        <div className="place__order__popup">
            <img src={isError ? errorPic : pic} alt="popup img" />
            <h1 className="place__order__popup__title">
                {isError ? (
                    <>Oh no...</>
                ) : (
                    <>
                        {isTransferPopUp
                            ? 'Transfer is completed!'
                            : mainTitle
                            ? mainTitle
                            : 'Awesome'}
                    </>
                )}
            </h1>

            {isError ? (
                <p className="place__order__popup__desc">
                    Something went wrong. Please refresh your browser and try again. If this occurs
                    again, please write to <span>Support</span>
                </p>
            ) : (
                <>
                    {isTransferPopUp ? (
                        <p className="place__order__popup__desc">
                            {transferItems} items were successfully sent to the following wallet:
                        </p>
                    ) : (
                        <p className="place__order__popup__desc">
                            {mainDesc ? (
                                mainDesc
                            ) : (
                                <>
                                    Your transaction is successfully completed. Now you can enjoy
                                    your NFTs in
                                    <span>Profile</span> or share it with friends!
                                </>
                            )}
                        </p>
                    )}
                </>
            )}

            {isTransferPopUp && (
                <p className="place__order__popup__address">
                    <IconPopupWallet color={themeMode === 'dark' ? '#E1E1E2' : '#667085'} />
                    0x422c77f43344d8e5477f43344d8d342f
                </p>
            )}
            <div className="place__order__popup__buttons">
                {isError ? (
                    <>
                        <Button
                            className="mui-button mui-button--l mui-button--fulwidth mui-button--contained mui-button--contained-green"
                            onClick={() => {
                                alert('Ok, got it!');
                            }}
                        >
                            Ok, got it!
                        </Button>
                    </>
                ) : (
                    <>
                        <BaseButton
                            className="button--icon-right place__order__popup__buttons__main"
                            text={isTransferPopUp ? 'Discover  NFTs' : 'Share on Twitter'}
                            icon={isTransferPopUp ? <> </> : <TwitterIcon />}
                            onClick={onButtonClickHandler}
                        />
                        {isTransferPopUp ? (
                            <a
                                onClick={() => navigate('/profile')}
                                className="place__order__popup__buttons-link"
                            >
                                View My Portfolio
                            </a>
                        ) : (
                            <BaseButton
                                className="button--icon button--outline button--outline-left button--outline-m button--outline-transparent"
                                text={isTransferPopUp ? 'View My Portfolio' : 'View transaction'}
                                icon={isTransferPopUp ? null : <IconRedirect />}
                                onClick={() => onButtonClickHandler()}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
