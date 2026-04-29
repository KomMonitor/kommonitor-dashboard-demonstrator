import { Component, Inject } from '@angular/core';
import { BarChartComponent, BarChartData } from 'kommonitor-toolbox';
import { BarchartWidgetData } from './barchart-widget-data';

@Component({
  selector: 'app-barchart-widget',
  imports: [BarChartComponent],
  templateUrl: './barchart-widget.html',
  styleUrl: './barchart-widget.scss',
})
export class BarchartWidget {
  constructor(@Inject('WIDGET_DATA') public data: BarchartWidgetData) {}

  get chartData(): BarChartData {
    try {
      const parsed = JSON.parse(this.data.sampleData) as BarChartData;
      if (parsed && parsed.labels && parsed.datasets) {
        return parsed;
      }
    } catch (e) {
      // fallthrough to default sample
    }

    return {
      labels: [],
      datasets: [],
    };
  }
}
