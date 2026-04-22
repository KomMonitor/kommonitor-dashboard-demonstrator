import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Gridster, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridHandler, KMD_GridsterItem } from '../../services/grid/grid-handler';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WidgetAdd } from '../../views/modals/widget-add/widget-add';


@Component({
  selector: 'dashboard-grid',
  imports: [CommonModule, Gridster, GridsterItem],
  templateUrl: './dashboard-grid.html',
  styleUrl: './dashboard-grid.scss',
})
export class DashboardGrid implements OnInit {
 
  options: GridsterConfig = {
    minRows: 12,
    minCols: 12,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    },
    pushItems: true, // ggf kritisch, verschiebt items
    pushResizeItems: true // ggf kritisch, verschiebt items
  };

  items!: KMD_GridsterItem[];

  constructor(
    private gridHandler: GridHandler,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if(this.gridHandler.selectedLayout.layoutId!=undefined)
      this.items = this.gridHandler.layoutOptions[this.gridHandler.selectedLayout.layoutId].layout;
  }

  onAddWidgetClick(item: KMD_GridsterItem) {
    console.log(item);
    const modalRef = this.modalService.open(WidgetAdd, {centered: true});
  }
}
