import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-timeseries-widget',
  imports: [],
  templateUrl: './timeseries-widget.html',
  styleUrl: './timeseries-widget.scss',
})
export class TimeseriesWidget {
  constructor(@Inject('WIDGET_DATA') public data: any) {}
}
