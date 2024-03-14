import { FC, useState } from 'react';

import { NoneMuiModal } from 'src/view/components';
import { Trophy } from '../Trophy';
import { AchievementsPopUp } from './AchievementsPopup';

import { achievements } from '../../data';
import { tAccount } from 'src/typed/types';

import './Achievements.scss';

interface IProps {
	account: tAccount;
}

export const Achievements: FC<IProps> = ({ account }) => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const handleOpenPopUp = (val: boolean) => {
		setOpenModal(val);
	};

	return (
    <>
      {/* <div className="achievements-block">
        <div className="achievements-block__info">
          <h6 className="achievements-block__info_title">
            You are cooler than {achievements.cooler_when}% of users!
          </h6>
          <button
            className="achievements-block__info_button"
            onClick={() => {
              handleOpenPopUp(true);
            }}
          >
            View all Trophies
          </button>
        </div>
        <div className="achievements-block__trophies">
          {achievements.achievements_recieved.slice(0, 2).map((el) => {
            return (
              <div
                className="achievements-block__trophies_item"
                key={`trophy-${el.id}`}
              >
                <Trophy trophy={el} />
              </div>
            );
          })}
        </div>
      </div> */}
      <NoneMuiModal
        width={546}
        height={'fit-content'}
        show={openModal}
        onClose={() => handleOpenPopUp(false)}
        className="modalContent--empty-padding"
        isSuccessAnimation={false}
      >
        <AchievementsPopUp achievements={achievements} account={account} />
      </NoneMuiModal>
    </>
  );
};
