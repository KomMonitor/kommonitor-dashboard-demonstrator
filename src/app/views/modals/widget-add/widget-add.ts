import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KMD_WidgetTypes } from '../../../services/grid/grid-handler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-add',
  imports: [CommonModule],
  templateUrl: './widget-add.html',
  styleUrl: './widget-add.scss',
})
export class WidgetAdd {

  selectedWidgetType:KMD_WidgetTypes | undefined = undefined;
  widgetTypeOptions = KMD_WidgetTypes;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  onWidgetTypeSelectionClick(type:KMD_WidgetTypes) {
    this.selectedWidgetType = type;
  }
}
