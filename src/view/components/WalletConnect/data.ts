import iconMetaMask from 'src/assets/images/iconMetaMask.svg';
import iconTrustWallet from 'src/assets/images/iconTrustWallet.svg';
import iconMathWallet from 'src/assets/images/iconMathWallet.svg';
import iconAlphaWallet from 'src/assets/images/iconAlphaWallet.svg';
import iconCoinbaseWallet from 'src/assets/images/iconCoinbaseWallet.svg';
import iconWalletConnect from 'src/assets/images/iconWalletConnect.svg';

export const wallets = [
	{
		imageUrl: iconMetaMask,
		name: 'MetaMask',
		tag: 'popular',
		type: 'metamask',
	},
	// {
	// 	imageUrl: iconTrustWallet,
	// 	name: 'Trust Wallet',
	// 	type: 'trust_wallet',
	// },
	// {
	// 	imageUrl: iconMathWallet,
	// 	name: 'Math Wallet',
	// 	type: 'math_wallet',
	// },
	// {
	// 	imageUrl: iconAlphaWallet,
	// 	name: 'Alpha Wallet',
	// 	type: 'alpha_wallet',
	// },
	{
		imageUrl: iconCoinbaseWallet,
		name: 'Coinbase Wallet',
		type: 'coinbase_wallet',
	},
	{
		imageUrl: iconWalletConnect,
		name: 'Wallet Connect',
		type: 'wallet_connect',
	},
];
