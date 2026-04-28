import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetConfigBridge } from '../../services/widget-config-bridge';

@Component({
  selector: 'app-timeseries-config',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './timeseries-config.html',
  styleUrl: './timeseries-config.scss',
})
export class TimeseriesConfig implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bridge: WidgetConfigBridge
  ) {}

  ngOnInit(): void {
    const initial = this.bridge.getInitialData();
    this.form = this.fb.group({
      indicator: [initial?.indicator ?? ''],
      spatialUnit: [initial?.spatialUnit ?? ''],
      aggregation: [initial?.aggregation ?? 'sum']
    });
    this.bridge.register(this.form);
  }
}
