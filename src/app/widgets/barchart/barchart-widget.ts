import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-barchart-widget',
  imports: [],
  templateUrl: './barchart-widget.html',
  styleUrl: './barchart-widget.scss',
})
export class BarchartWidget {
  constructor(@Inject('WIDGET_DATA') public data: any) {}
}
