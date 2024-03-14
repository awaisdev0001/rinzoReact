import { tChartData, tTimeFilter } from 'src/typed/types';

export const profileData: tChartData = {
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
	],
};

export const statsTimeFilter: tTimeFilter[] = [
	{ val: '24h', title: '24h', check: true },
	{ val: '7d', title: '7d', check: false },
	{ val: '30d', title: '30d', check: false },
	{ val: '60d', title: '60d', check: false },
	{ val: '90d', title: '90d', check: false },
	{ val: '1y', title: '1y', check: false },
	{ val: 'all', title: 'All Time', check: false },
];
