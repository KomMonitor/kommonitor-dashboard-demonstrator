export interface TimeseriesWidgetData {
  indicator: string;
  spatialUnit: string;
  aggregation: string;
  xAxisLabel: string;
  yAxisLabel: string;
  scaleToData: boolean;
  legendPosition: 'none' | 'top' | 'bottom' | 'left' | 'right';
  data: string;
}
