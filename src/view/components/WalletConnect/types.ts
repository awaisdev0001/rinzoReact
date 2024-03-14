export type tWalletItem = {
	imageUrl: string;
	name: string;
	type: string;
	tag?: string;
};
export interface AccountData {
  image: string;
  address: string;
  portfolioValue: number;
  checked: boolean;
  connectType: {
    name: string;
    image: string;
  };
  blurLoggedIn: boolean;
  x2y2LoggedIn: boolean;
  blurToken?: string;
  x2y2Token?: string;
}
