export type tAccount = {
	image: string;
	address: string;
	connectType: { name: string; image: string };
	portfolioValue: string | number;
	checked: boolean;
	blurToken?: string;
	blurLoggedIn: boolean;
	x2y2Token?: string;
	x2y2LoggedIn: boolean;
	whale?: boolean;
};
