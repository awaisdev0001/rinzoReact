import { tChartData } from 'src/typed/types';

export const firstData: tChartData = {
	labels: [
		'5 Jun',
		'6 Jun',
		'7 Jun',
		'8 Jun',
		'9 Jun',
		'10 Jun',
		'11 Jun',
		'12 Jun',
		'13 Jun',
		'14 Jun',
		'15 Jun',
		'16 Jun',
		'17 Jun',
		'18 Jun',
		'19 Jun',
	],
	datasets: [
		{
			label: 'Floor Price',
			data: [
				2000, 4000, 6000, 1500, 6000, 10000, 11000, 12000, 11000, 9000, 5000, 3000, 6000,
			],
			fill: false,
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: '#8EB136',
			lineTension: 0.4,
		},
		{
			label: 'Volume',
			data: [3300, 4000, 3500, 5100, 5400, 4600, 9000, 11000, 10000, 8000, 9000],
			fill: false,
			borderColor: '#FF7676',
			lineTension: 0.4,
		},
		{
			label: 'Average Price Sold',
			data: [
				4300, 3500, 1500, 6100, 4400, 3600, 4000, 2000, 4000, 3000, 4000, 8000, 2000, 1000,
			],
			fill: false,
			borderColor: '#FDB022',
			lineTension: 0.4,
		},
	],
};

export const secondData = {
	labels: [
		'5 Jun',
		'6 Jun',
		'7 Jun',
		'8 Jun',
		'9 Jun',
		'10 Jun',
		'11 Jun',
		'12 Jun',
		'13 Jun',
		'14 Jun',
		'15 Jun',
		'16 Jun',
		'17 Jun',
		'18 Jun',
		'19 Jun',
	],
	datasets: [
		{
			label: 'Pieces Sold',
			data: [
				2000, 4000, 6000, 1500, 6000, 10000, 11000, 12000, 11000, 9000, 5000, 3000, 6000,
			],
			fill: false,
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: '#8EB136',
			lineTension: 0.4,
		},
		{
			label: 'Smart Wallets',
			data: [3300, 2500, 3500, 5100, 5400, 4600, 9000, 11000, 10000, 8000, 9000],
			fill: false,
			borderColor: '#FF7676',
			lineTension: 0.4,
		},
		{
			label: 'Whales',
			data: [
				4300, 3500, 1500, 6100, 4400, 3600, 4000, 2000, 4000, 3000, 4000, 8000, 2000, 1000,
			],
			fill: false,
			borderColor: '#FDB022',
			lineTension: 0.4,
		},
	],
};
