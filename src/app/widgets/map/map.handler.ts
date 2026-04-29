import { WidgetDefinition } from '../../services/widget-definition';
import { registerWidget } from '../../services/widget-registry';
import { MapConfig } from './map-config';
import { MapWidget } from './map-widget';

registerWidget(new WidgetDefinition(
  'Karte',
  'fa-solid fa-map',
  MapConfig,
  MapWidget
));
