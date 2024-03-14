export type tOrder = {
	desc: string;
	child: {
		icon: number | string;
		desc: string;
	}[];
	waiting: boolean;
};
