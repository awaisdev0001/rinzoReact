export type tAchievements = {
	achievements_recieved: tTrophy[];
	achievements_upcomming: tTrophy[];
	cooler_when: number;
};
export type tTrophy = {
	id: number;
	name?: string;
	type: string;
	progress?: number;
};

export type tAvatar = {
	id: number;
	imageUrl: string;
	name: string;
};

export type tStats = {
	id: number;
	title: string;
	amount?: number;
	price?: number | string;
};

export type tHistoryRows = {
	id: string | number;
	event: string;
	market: string[];
	nft: { imageUrl: string; name: string; tokenId?: string; };
	collection: { name: string; slug: string };
	profitability: number | string;
	gas_spent: number | string;
	lost_gain: {
		value: number;
		duration: boolean;
	};
	total_made: string;
	transaction_ID: {
		address: string;
		link: string;
	};
	date: string;
	className?: string;
	open?: boolean;
};
