import { WidgetDefinition } from '../../services/widget-definition';
import { registerWidget } from '../../services/widget-registry';
import { TextConfig } from './text-config';
import { TextWidget } from './text-widget';

registerWidget(
  new WidgetDefinition('Freitextfeld', 'fa-solid fa-keyboard', TextConfig, TextWidget),
);
