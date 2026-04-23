import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GridHandler, KMD_GridsterItem, KMD_WidgetTypes, WidgetFormObject } from '../../../services/grid/grid-handler';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-widget-add',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './widget-add.html',
  styleUrl: './widget-add.scss',
})
export class WidgetAdd {

  @Input() widget!: KMD_GridsterItem;

  selectedWidgetType:KMD_WidgetTypes | undefined = undefined;
  widgetTypeOptions = KMD_WidgetTypes;

  widgetForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private gridHandler: GridHandler
  ) {
  }

  close() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  onWidgetTypeSelectionClick(type:KMD_WidgetTypes) {
    this.selectedWidgetType = type;

    this.widgetForm = this.fb.group<WidgetFormObject>({
      title: [this.widget.label, Validators.required],
      width: [this.widget.cols, Validators.required],
      height: [this.widget.rows, Validators.required],
      data: this.fb.group({
        content: ['']
      })
    });
  }

  onAddWidget() {
    this.gridHandler.addWidget(this.widget, this.selectedWidgetType!, this.widgetForm.value);
    this.activeModal.close();
  }
}
