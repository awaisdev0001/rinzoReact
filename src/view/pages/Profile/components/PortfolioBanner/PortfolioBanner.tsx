import { useState } from 'react';
import { AccountInfo, NoneMuiModal } from 'src/view/components';
import { Achievements } from '../Achievements';

import { useAppSelector } from 'src/hooks';

import './PortfolioBanner.scss';
import { SelectAccoutImagePopUp } from './SelectAccoutImagePopUp';

export const PortfolioBanner = () => {
	const { account } = useAppSelector(state => state.accountReducer);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const handleOpenPopUp = (val: boolean) => {
		setOpenModal(val);
	};
	return (
    <div className="portfolio-banner">
      <div className="portfolio-banner__content container">
        <AccountInfo
          account={account}
          imageEditable={true}
          editImage={() => {
            handleOpenPopUp(true);
          }}
        />
        <Achievements account={account} />
      </div>
      <NoneMuiModal
        width={580}
        height={'fit-content'}
        show={openModal}
        onClose={() => {
          handleOpenPopUp(false);
        }}
        className="modalContent--empty-padding"
        isSuccessAnimation={false}
      >
        <SelectAccoutImagePopUp account={account} />
      </NoneMuiModal>
    </div>
  );
};
