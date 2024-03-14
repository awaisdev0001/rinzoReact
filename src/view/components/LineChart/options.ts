const tooltipTitle = (arg: any) => {
	if (arg.length > 1) {
		return arg.map((item: { dataset: { label: any } }) => item.dataset.label);
	}
	return arg[0].dataset.label;
};

let price = 0;
//
const tooltipLabel = (arg: any) => {
	price = arg.formattedValue;
	return price + ' ETH';
};

export const options: any = {
	responsive: true,
	maintainAspectRatio: false,
	interaction: {
		intersect: false,
	},
	plugins: {
		tooltip: {
			displayColors: false,
			backgroundColor: '#667085',
			titleMarginBottom: 4,
			titleFont: {
				weight: 'normal',
				size: 12,
				style: 'normal',
			},
			padding: 15,
			footerFont: {
				weight: 'bold',
			},
			bodyFont: {
				weight: 'bold',
				size: 14,
				style: 'normal',
			},
			callbacks: {
				// title: tooltipTitle,
				// label: tooltipLabel,
			},
		},
		legend: {
			display: false,
		},
	},
	elements: {
		point: {
			radius: 2,
		},
	},
	scales: {
		y: {
			grid: {
				display: false,
			},
			ticks: {
				display: true,
				callback: function (value: any) {
					return value / 1000 + 'k' + ' ETH';
				},
			},
		},
	},
};
