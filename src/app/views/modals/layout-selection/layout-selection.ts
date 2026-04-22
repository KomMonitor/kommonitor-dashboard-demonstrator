import { Component } from '@angular/core';
import { GridHandler, GridLayoutOption } from '../../../services/grid/grid-handler';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-layout-selection',
  imports: [CommonModule],
  templateUrl: './layout-selection.html',
  styleUrl: './layout-selection.scss',
})
export class LayoutSelection {

  constructor(
    protected gridHandler: GridHandler,
    private activeModal: NgbActiveModal
  ) {}

  onLayoutOptionSelected(layout: GridLayoutOption) {

    this.gridHandler.setSelectedLayout(layout.id);
    this.activeModal.close();
  }

  buildWidgetPreview(item:GridLayoutOption):string {
    
    if(item.id==0)
      return 'Leer';

    return item.layout.map(elem => `<div>${elem.previewLabel}</div>`).join('');
  }
  close() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
