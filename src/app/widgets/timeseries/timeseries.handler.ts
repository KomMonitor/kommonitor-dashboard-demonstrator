import { WidgetDefinition } from '../../services/widget-definition';
import { registerWidget } from '../../services/widget-registry';
import { TimeseriesConfig } from './timeseries-config';
import { TimeseriesWidget } from './timeseries-widget';

registerWidget(new WidgetDefinition(
  'Zeitreihendiagramm',
  'fa-solid fa-chart-line',
  TimeseriesConfig,
  TimeseriesWidget
));
