export type tChartDatasets = {
	label: string;
	data: number[];
	fill: boolean;
	backgroundColor?: string;
	borderColor: string;
	lineTension: number;
};

export type tChartData = {
	labels: string[];
	datasets: tChartDatasets[];
};
