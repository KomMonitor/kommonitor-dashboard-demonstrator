import { Component, Inject } from '@angular/core';
import { TimeseriesChartComponent, TimeseriesData } from 'kommonitor-toolbox';
import { TimeseriesWidgetData } from './timeseries-widget-data';

@Component({
  selector: 'app-timeseries-widget',
  imports: [TimeseriesChartComponent],
  templateUrl: './timeseries-widget.html',
  styleUrl: './timeseries-widget.scss',
})
export class TimeseriesWidget {
  chartData: TimeseriesData;
  xAxisLabel: string;
  yAxisLabel: string;
  scaleToData: boolean;
  legendConfig: object;

  constructor(@Inject('WIDGET_DATA') public data: TimeseriesWidgetData) {
    this.xAxisLabel = data?.xAxisLabel ?? '';
    this.yAxisLabel = data?.yAxisLabel ?? '';
    this.scaleToData = data?.scaleToData ?? false;
    this.legendConfig = this.buildLegendConfig(data?.legendPosition ?? 'top');

    try {
      this.chartData = typeof data?.data === 'string'
        ? JSON.parse(data.data)
        : { datasets: [], labels: [] };
    } catch {
      this.chartData = { datasets: [], labels: [] };
    }
  }

  private buildLegendConfig(position: string): object {
    if (position === 'none') {
      return { show: false };
    }
    if (position === 'left' || position === 'right') {
      return { show: true, orient: 'vertical', [position]: position, top: 'center' };
    }
    return { show: true, orient: 'horizontal', top: position, left: 'center' };
  }
}
