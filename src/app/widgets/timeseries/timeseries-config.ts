import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeseriesData } from 'kommonitor-toolbox';
import { WidgetConfigBridge } from '../../services/widget-config-bridge';

const DEFAULT_DATA: TimeseriesData = {
  datasets: [
    {
      type: 'line',
      label: 'Beispieldaten',
      data: [5.1, 5.1, 5.2, 5.3, 5.4, 5.5, 5.7, 5.8, 6.0, 6.1, 6.2, 6.4, 6.5, 6.6, 6.7, 6.8, 7.0, 7.1, 7.2, 7.2, 7.2, 7.2],
    },
  ],
  labels: [
    '2002-12-31', '2003-12-31', '2004-12-31', '2005-12-31', '2006-12-31', '2007-12-31',
    '2008-12-31', '2009-12-31', '2010-12-31', '2011-12-31', '2012-12-31', '2013-12-31',
    '2014-12-31', '2015-12-31', '2016-12-31', '2017-12-31', '2018-12-31', '2019-12-31',
    '2020-12-31', '2021-12-31', '2022-12-31', '2023-12-31',
  ],
};

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
      aggregation: [initial?.aggregation ?? 'sum'],
      xAxisLabel: [initial?.xAxisLabel ?? ''],
      yAxisLabel: [initial?.yAxisLabel ?? ''],
      scaleToData: [initial?.scaleToData ?? false],
      legendPosition: [initial?.legendPosition ?? 'none'],
      data: [initial?.data ?? JSON.stringify(DEFAULT_DATA, null, 2)],
    });
    this.bridge.register(this.form);
  }
}
