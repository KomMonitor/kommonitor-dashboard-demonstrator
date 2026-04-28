import { WidgetDefinition } from '../../services/widget-definition';
import { registerWidget } from '../../services/widget-registry';
import { BarchartConfig } from './barchart-config';
import { BarchartWidget } from './barchart-widget';

registerWidget(new WidgetDefinition(
  'Balkendiagramm',
  'fa-solid fa-chart-bar',
  BarchartConfig,
  BarchartWidget
));
