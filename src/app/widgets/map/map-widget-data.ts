export interface MapWidgetData {
  centerLon: number;
  centerLat: number;
  zoom: number;
  baseLayer: 'osm' | 'tile';
  tileUrl: string;
  tileAttribution: string;
  geoJson: string;
}
