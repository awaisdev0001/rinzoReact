import { FC } from 'react';
import { LeaderBoardCard } from './LeaderBoardCard';

import { splitAddress } from 'src/helpers';

import { leaderBoardCardsArr } from './data';

import './LeaderBoardCards.scss';

export const LeaderBoardCards: FC = () => {
    return (
        <div className="leaderboard__cards__wrap">
            {leaderBoardCardsArr.map((item, index) => (
                <LeaderBoardCard
                    key={item.cardNumber * index}
                    cardNumber={item.cardNumber}
                    walletAddress={splitAddress(item.walletAddress)}
                    cardUserImg={item.cardUserImg}
                    portfolioValue={item.portfolioValue}
                    pnl={item.pnl}
                    winningTrades={item.winningTrades}
                    losingTrades={item.losingTrades}
                    mints={item.mints}
                    spent={item.spent}
                />
            ))}
        </div>
    );
};
