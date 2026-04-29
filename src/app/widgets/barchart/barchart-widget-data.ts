export interface BarchartWidgetData {
  indicator: string;
  spatialUnit: string;
  classificationMethod: string;
  xAxisLabel: string;
  yAxisLabel: string;
  meanLine: boolean;
  barchartLabel: boolean;
  orientation: 'vertical' | 'horizontal';
  stacked: boolean;
  scaleToData: boolean;
  showLegend: boolean;
  sampleData: string;
}
