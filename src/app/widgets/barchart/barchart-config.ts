import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetConfigBridge } from '../../services/widget-config-bridge';

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
    const initial = this.bridge.getInitialData();
    this.form = this.fb.group({
      indicator: [initial?.indicator ?? ''],
      spatialUnit: [initial?.spatialUnit ?? ''],
      classificationMethod: [initial?.classificationMethod ?? ''],
      meanLine: [initial?.meanLine ?? false],
      barchartLabel: [initial?.barchartLabel ?? false]
    });
    this.bridge.register(this.form);
  }
}
