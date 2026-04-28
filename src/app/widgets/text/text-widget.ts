import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-text-widget',
  imports: [],
  templateUrl: './text-widget.html',
  styleUrl: './text-widget.scss',
})
export class TextWidget {
  constructor(@Inject('WIDGET_DATA') public data: any) {}
}
