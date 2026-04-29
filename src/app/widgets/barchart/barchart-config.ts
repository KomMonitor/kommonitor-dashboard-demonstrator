import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetConfigBridge } from '../../services/widget-config-bridge';
import { BarchartWidgetData } from './barchart-widget-data';

const SAMPLE_DATA = `{
  "labels": ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
  "datasets": [
    { "label": "Indikator", "data": [42,58,35,71,63,49,55,68,44,77,52,60], "showMeanLine": false }
  ]
}`;

@Component({
  selector: 'app-barchart-config',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './barchart-config.html',
  styleUrl: './barchart-config.scss',
})
export class BarchartConfig implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bridge: WidgetConfigBridge
  ) {}

  ngOnInit(): void {
    const initial = this.bridge.getInitialData() as Partial<BarchartWidgetData> | null;
    this.form = this.fb.group({
      indicator: [initial?.indicator ?? ''],
      spatialUnit: [initial?.spatialUnit ?? ''],
      classificationMethod: [initial?.classificationMethod ?? ''],
      exampleData: [initial?.sampleData ?? SAMPLE_DATA],
      xAxisLabel: [initial?.xAxisLabel ?? ''],
      yAxisLabel: [initial?.yAxisLabel ?? ''],
      meanLine: [initial?.meanLine ?? false],
      barchartLabel: [initial?.barchartLabel ?? false],
      orientation: [initial?.orientation ?? 'vertical'],
      stacked: [initial?.stacked ?? false],
      scaleToData: [initial?.scaleToData ?? false],
      showLegend: [initial?.showLegend ?? true]
    });
    this.bridge.register(this.form);
  }
}
