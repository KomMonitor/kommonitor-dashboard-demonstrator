import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Gridster, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridHandler, KMD_GridsterItem, KMD_WidgetTypes } from '../../services/grid/grid-handler';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WidgetAdd } from '../../views/modals/widget-add/widget-add';
import { Test } from '../../test/test';


@Component({
  selector: 'dashboard-grid',
  imports: [CommonModule, Gridster, GridsterItem, Test],
  templateUrl: './dashboard-grid.html',
  styleUrl: './dashboard-grid.scss',
})
export class DashboardGrid implements OnInit {
 
  widgetComponentMapping = {
    default: Test
  }

  options: GridsterConfig = {
    minRows: 12,
    minCols: 12,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    },
    pushItems: false, // ggf kritisch, verschiebt items
    pushResizeItems: true // ggf kritisch, verschiebt items
  };

  widgetTypeOptions = KMD_WidgetTypes;

  items!: KMD_GridsterItem[];

  constructor(
    public gridHandler: GridHandler,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.gridHandler.initGrid();
  }

  onAddWidgetClick(item: KMD_GridsterItem) {
    const modalRef = this.modalService.open(WidgetAdd, {centered: true});
    modalRef.componentInstance.widget = item;
  }

  componentInjector(item: any): Injector {
    return Injector.create({
      providers: [
        { provide: 'WIDGET_DATA', useValue: item }
      ],
      parent: this.injector
    });
  }

  isTextWidget(item:KMD_GridsterItem) {
    return item.type==KMD_WidgetTypes.TEXT;
  }

  isChartWidget(item:KMD_GridsterItem) {
    return item.type==KMD_WidgetTypes.BARCHART || item.type==KMD_WidgetTypes.TIMESERIES;
  }
}
