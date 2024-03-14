import { Plugin } from 'chart.js';

export const plugins: Plugin[] = [
	{
		id: 'tooltipLine',
		beforeDraw: (chart: any) => {
			const ctx = chart.ctx;
			if (chart.tooltip?._active && chart.tooltip?._active.length) {
				const ctx = chart.ctx;
				ctx.save();
				const activePoint = chart.tooltip._active[0];
				ctx.beginPath();
				ctx.setLineDash([5, 7]);
				ctx.moveTo(activePoint.element.x, chart.chartArea.top);
				ctx.lineTo(activePoint.element.x, activePoint.element.y);
				ctx.lineWidth = 2;
				ctx.strokeStyle = chart.tooltip?._active[0].element.options.borderColor;
				ctx.stroke();
				ctx.restore();

				ctx.beginPath();
				ctx.setLineDash([5, 7]);
				ctx.moveTo(activePoint.element.x, activePoint.element.y);
				ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
				ctx.lineWidth = 2;
				ctx.strokeStyle = chart.tooltip?._active[0].element.options.borderColor;
				ctx.stroke();
				ctx.restore();
			}
		},
	},
];
