import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetConfigBridge } from '../../services/widget-config-bridge';
import { MapWidgetData } from './map-widget-data';

const SAMPLE_GEOJSON = JSON.stringify({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [10.0, 51.5] },
      properties: { name: 'Mittelpunkt Deutschland' },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [8.0, 53.5], [14.0, 53.5], [14.0, 49.0], [8.0, 49.0], [8.0, 53.5],
        ]],
      },
      properties: { name: 'Beispielregion' },
    },
  ],
}, null, 2);

@Component({
  selector: 'app-map-config',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './map-config.html',
  styleUrl: './map-config.scss',
})
export class MapConfig implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bridge: WidgetConfigBridge
  ) {}

  ngOnInit(): void {
    const initial = this.bridge.getInitialData() as Partial<MapWidgetData> | null;
    this.form = this.fb.group({
      centerLon: [initial?.centerLon ?? 10.0],
      centerLat: [initial?.centerLat ?? 51.5],
      zoom: [initial?.zoom ?? 6],
      baseLayer: [initial?.baseLayer ?? 'osm'],
      tileUrl: [initial?.tileUrl ?? ''],
      tileAttribution: [initial?.tileAttribution ?? ''],
      geoJson: [initial?.geoJson ?? SAMPLE_GEOJSON],
    });
    this.bridge.register(this.form);
  }
}
