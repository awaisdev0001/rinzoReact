import { ReactNode } from 'react';
export type tAdditionData = {
	id: string;
	image: ReactNode;
	title: string;
	price: {
		value: string | number;
		addition_value?: string;
		percent?: number;
		duration?: boolean;
	};
	className?: string;
};
