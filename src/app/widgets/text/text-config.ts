import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetConfigBridge } from '../../services/widget-config-bridge';

@Component({
  selector: 'app-text-config',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-config.html',
  styleUrl: './text-config.scss',
})
export class TextConfig implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bridge: WidgetConfigBridge
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      content: ['']
    });
    this.bridge.register(this.form);
  }
}
