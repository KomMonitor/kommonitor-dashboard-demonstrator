import { Type } from '@angular/core';

export interface WidgetDefaults {
  label?: string;
  width?: number;
  height?: number;
}

export class WidgetDefinition {
  constructor(
    public label: string,
    public icon: string,
    public configComponent: Type<any>,
    public widgetComponent: Type<any>,
    public defaults?: WidgetDefaults
  ) {}
}
