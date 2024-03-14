import { FC } from 'react';

import { IconEther, IconRedirect } from 'src/assets/icons';
import { navigatorCopyText } from 'src/helpers';
import './LeaderBoardCard.scss';

interface IProps {
    cardNumber: number | string;
    walletAddress: string;
    cardUserImg: string;
    portfolioValue: string | number;
    pnl: string | number;
    winningTrades: string | number;
    losingTrades: string | number;
    spent: string | number;
    mints: string | number;
}

export const LeaderBoardCard: FC<IProps> = ({
    cardNumber,
    cardUserImg,
    pnl,
    spent,
    walletAddress,
    winningTrades,
    losingTrades,
    portfolioValue,
    mints,
}) => {
    return (
        <div className="leaderboard__card">
            <div className="leaderboard__card-innerContainer">
                <div className="leaderboard__card-innerContainer-upperSide">
                    <div className="leaderboard__card__numberCycle_and_image">
                        <div className="leaderboard__card__numberCycle">
                            <p className="leaderboard__card__numberCycle-par">{cardNumber}</p>
                        </div>
                        <img
                            className="leaderboard__card-thumb"
                            src={cardUserImg}
                            alt="card image"
                        />
                    </div>
                    <div className="leaderboard__card__walletAddress">
                        <button
                            onClick={() => navigatorCopyText(walletAddress)}
                            className="leaderboard__card__walletAddress-par"
                        >
                            {walletAddress}
                        </button>
                        <a
                            href="https://etherscan.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="leaderboard__card__walletAddress-etherscan"
                        >
                            <IconRedirect />
                        </a>
                    </div>
                </div>
                <div className="leaderboard__card-innerContainer-dataTable">
                    <div className="leaderboard__card__dataTable-item">
                        <p className="leaderboard__card__dataTable-item-title">Portfolio Value</p>
                        <p className="leaderboard__card__dataTable-item-price">
                            <IconEther />
                            <span>{portfolioValue}</span>
                        </p>
                    </div>
                    <div className="leaderboard__card__dataTable-item">
                        <p className="leaderboard__card__dataTable-item-title">PNL</p>
                        <p className="leaderboard__card__dataTable-item-price">
                            <IconEther />
                            <span>{pnl}</span>
                        </p>
                    </div>
                    <div className="leaderboard__card__dataTable-item">
                        <p className="leaderboard__card__dataTable-item-title">Winning Trades</p>
                        <p className="leaderboard__card__dataTable-item-price">
                            <span>{winningTrades}</span>
                        </p>
                    </div>
                    <div className="leaderboard__card__dataTable-item">
                        <p className="leaderboard__card__dataTable-item-title">Losing Trades</p>
                        <p className="leaderboard__card__dataTable-item-price">
                            <span>{losingTrades}</span>
                        </p>
                    </div>
                    <div className="leaderboard__card__dataTable-item">
                        <p className="leaderboard__card__dataTable-item-title">Spent</p>
                        <p className="leaderboard__card__dataTable-item-price">
                            <span>{spent}</span>
                        </p>
                    </div>
                    <div className="leaderboard__card__dataTable-item">
                        <p className="leaderboard__card__dataTable-item-title">Mints </p>
                        <p className="leaderboard__card__dataTable-item-price">
                            <span>{mints}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
