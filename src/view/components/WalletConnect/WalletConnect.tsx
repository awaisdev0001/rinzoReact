import { FC, useEffect, useRef, useState } from 'react';
import { BigNumber, ethers } from "ethers";

import { ModalOveray } from '../Modal';
import Button from '@mui/material/Button';
import { WalletItem } from './WaletItem';

import { wallets } from './data';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import {  changeOpenWalletPopUp } from 'src/store';
import { tWalletItem } from './types';

import metamask from 'src/assets/images/iconMetaMask.svg';
import './WalletConnect.scss';
/* @ts-ignore */
import { ToSAndPPModal } from '../ToSAndPPModal';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { connect } from '@wagmi/core';
import { useAccount, useBalance } from 'wagmi';

import { splitAddressInHalf } from 'src/helpers';
import { useConnectAccountHook } from 'src/hooks/connectAccounts';
export const WalletConnect: FC = () => {
	const dispatch = useAppDispatch();
	const { openWalletPopUp } = useAppSelector(state => state.accountReducer);
	const [openTosModal, setOpenTosModal] = useState(false);

	const { address: selectedAddress } = useAccount()
	const prevSelectedAddressRef = useRef<string>();

	const { connectAccount, wallet, setWallet } = useConnectAccountHook();
	const { data: balanceData } = useBalance({address: selectedAddress, chainId: 5})

	const [secondModalOpen, setSecondModalOpen] = useState(false);
	// const provider = useProvider<ethers.providers.Web3Provider>();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
 	 if (prevSelectedAddressRef.current !== selectedAddress) {
         prevSelectedAddressRef.current = selectedAddress;
         connectAccount();
        }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedAddress]);

	const closeModal = () => {
		dispatch(changeOpenWalletPopUp(false));
		setLoading(false);
	};

	const chooseWallet = async (el: tWalletItem) => {
		setLoading(true);
		setWallet(el);

		let connector;
		if (el.type === "metamask") {
			connector = new MetaMaskConnector({
				options: {
					shimDisconnect: true,
				},
			});
		} else if (el.type === "coinbase_wallet") {
			connector = new CoinbaseWalletConnector({
				options: {
					appName: 'wagmi.sh',
					jsonRpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
				},
			});
		} else if (el.type === "wallet_connect") {
			connector = new WalletConnectConnector({
				options: {
					qrcode: true,
					infuraId: "9aa3d95b3bc440fa88ea12eaa4456161",
					bridge: 'https://bridge.walletconnect.org/',
				},
			})
		}

		if (connector) {
			try {
				await connect({connector});
				closeModal();
				setSecondModalOpen(true);
			} catch (ex: any) {
				console.log(ex.name);
				closeModal();
				setSecondModalOpen(ex.name === "ConnectorNotFoundError");
			}
		}
	};

	const handleOpenToS = () => {
		closeModal();
		setOpenTosModal(true);
	}

	const handleCloseTosModal = () => {
		setOpenTosModal(false);
	}

	return (
		<>
			<ModalOveray
				open={openWalletPopUp}
				handleClose={closeModal}
				title="Connect your Wallet"
			>
				<div className="modal-content__body-description">
					By connecting your wallet, you agree to our
					<span onClick={() => handleOpenToS()}>
						Terms of Service
					</span>
					and our
					<span onClick={() => handleOpenToS()}>
						Privacy Policy
					</span>
				</div>
				<ul className="wallets-list">
					{wallets.map(el => {
						return (
							<WalletItem
								key={el.name}
								item={el}
								loading={
									loading && wallet.type === el.type
								}
								onChooseItem={() => {
									chooseWallet(el);
								}}
							/>
						);
					})}
				</ul>
			</ModalOveray>
			<ModalOveray
				open={secondModalOpen}
				handleClose={() => {
					setSecondModalOpen(false);
				}}
				title={selectedAddress ? `${wallet.name} connected` : "It seems that you don’t have MetaMask extension"}
			>
				{
					selectedAddress ? <>
						<div className="modal-content__body-description">
							Address:<br />
							<p>{splitAddressInHalf(selectedAddress ?? "")}</p>
							<br /><br />
							Your ETH Balance is: <span>{ethers.utils.formatEther(balanceData?.value ?? BigNumber.from("0x0"))}</span>
						</div>
					</> : <>
						<div className="modal-content__body-description">
							<h6>
								Download and install a Metamask crypto wallet to your preferred device
								(Chrome, iOS, Android)
							</h6>
						</div>
						<div className="metamask-error">
							<img src={metamask} alt="metamask" />
							<h5>Install MetaMask</h5>
							<Button
								className="mui-button mui-button--contained mui-button--contained-green"
								target="_blank"
								href="https://metamask.io/download/"
							>
								Download
							</Button>
						</div>
					</>
				}
			</ModalOveray>
			<ToSAndPPModal open={openTosModal} handleClose={handleCloseTosModal} />
		</>
	);
};
