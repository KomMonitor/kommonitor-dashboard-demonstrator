import { WidgetDefinition } from './widget-definition';

export { WidgetDefinition } from './widget-definition';

export const WIDGET_REGISTRY: WidgetDefinition[] = [];

export function registerWidget(definition: WidgetDefinition): void {
  WIDGET_REGISTRY.push(definition);
}

