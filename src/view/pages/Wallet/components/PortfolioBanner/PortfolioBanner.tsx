import { useCallback, useEffect, useMemo, useState } from "react";
import { AccountInfo, NoneMuiModal } from "src/view/components";
import { Achievements } from "../Achievements";

import { useAppSelector } from "src/hooks";

import "./PortfolioBanner.scss";
import { SelectAccoutImagePopUp } from "./SelectAccoutImagePopUp";
import { useParams } from "react-router-dom";
import getWalletProfile from "src/services/api/wallets/getWalletProfile";
import { IWalletProfile } from "src/typed/requests/wallet";
import { tAccount } from "src/typed/types";
import useComponentIdGenerator from "src/hooks/useComponentIdGenerator";

export const PortfolioBanner = () => {
  const { slug: wallet } = useParams();
  const componentId = useComponentIdGenerator();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenPopUp = (val: boolean) => {
    setOpenModal(val);
  };
  const [profile, setProfile] = useState<IWalletProfile | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!wallet) {
      return;
    }

    const profile1 = await getWalletProfile(wallet, componentId);
    setProfile(profile1);
  }, [wallet]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const wrappedAccount = useMemo<tAccount>(
    () => ({
      image: "",
      address: wallet || "",
      checked: !!profile?.verified,
      blurLoggedIn: false,
      x2y2LoggedIn: false,
      portfolioValue: profile?.portfolioValueUsd || "0",
      connectType: {
        name: "",
        image: "",
      },
      whale: profile?.whale,
    }),
    [wallet, profile]
  );

  return (
    <div className="portfolio-banner">
      <div className="portfolio-banner__content container">
        <AccountInfo
          account={wrappedAccount}
          imageEditable={false}
          editImage={() => {
            handleOpenPopUp(true);
          }}
        />
        {/* <Achievements account={wrappedAccount} /> */}
      </div>
      {/* <NoneMuiModal
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
      </NoneMuiModal> */}
    </div>
  );
};
