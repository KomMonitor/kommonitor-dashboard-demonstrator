import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GridHandler, KMD_GridsterItem } from '../../../services/grid/grid-handler';
import { WidgetConfigBridge } from '../../../services/widget-config-bridge';
import { WIDGET_REGISTRY, WidgetDefinition } from '../../../services/widget-registry';

@Component({
  selector: 'app-widget-add',
  providers: [WidgetConfigBridge],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './widget-add.html',
  styleUrl: './widget-add.scss',
})
export class WidgetAdd {
  @Input() widget!: KMD_GridsterItem;

  widgetRegistry = WIDGET_REGISTRY;
  selectedDefinition: WidgetDefinition | undefined;
  commonForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private gridHandler: GridHandler,
    private bridge: WidgetConfigBridge,
    private fb: FormBuilder,
  ) {}

  close() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  onWidgetTypeSelectionClick(def: WidgetDefinition) {
    this.selectedDefinition = def;
    this.commonForm = this.fb.group({
      title: [def.defaults?.label ?? this.widget.label, Validators.required],
      width: [
        def.defaults?.width ?? this.widget.cols,
        [Validators.required, Validators.min(1), Validators.max(12)],
      ],
      height: [
        def.defaults?.height ?? this.widget.rows,
        [Validators.required, Validators.min(1), Validators.max(12)],
      ],
    });
  }

  onAddWidget() {
    const specificData = this.bridge.getForm()?.value;
    if (!this.commonForm?.valid || !this.selectedDefinition) return;
    this.gridHandler.addWidget(this.widget, this.selectedDefinition, {
      ...this.commonForm.value,
      data: specificData,
    });
    this.activeModal.close();
  }
}
