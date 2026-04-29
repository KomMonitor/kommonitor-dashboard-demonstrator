import { Component, Inject, OnInit } from '@angular/core';
import { MapCenter, MapComponent, MapLayer } from 'kommonitor-toolbox';
import { MapWidgetData } from './map-widget-data';

@Component({
  selector: 'app-map-widget',
  imports: [MapComponent],
  templateUrl: './map-widget.html',
  styleUrl: './map-widget.scss',
})
export class MapWidget implements OnInit {
  center!: MapCenter;
  zoom!: number;
  layers!: MapLayer[];

  constructor(@Inject('WIDGET_DATA') public data: MapWidgetData) {}

  ngOnInit(): void {
    this.center = {
      lon: this.data?.centerLon ?? 10.0,
      lat: this.data?.centerLat ?? 51.5,
    };
    this.zoom = this.data?.zoom ?? 6;
    this.layers = this.buildLayers();
  }

  private buildLayers(): MapLayer[] {
    const layers: MapLayer[] = [];

    if (this.data?.baseLayer === 'tile' && this.data?.tileUrl) {
      layers.push({
        type: 'tile',
        url: this.data.tileUrl,
        attribution: this.data.tileAttribution || undefined,
      });
    } else {
      layers.push({ type: 'osm' });
    }

    if (this.data?.geoJson?.trim()) {
      try {
        const parsed = JSON.parse(this.data.geoJson) as object;
        layers.push({ type: 'geojson', data: parsed });
      } catch {
        // invalid JSON — skip overlay
      }
    }

    return layers;
  }
}
