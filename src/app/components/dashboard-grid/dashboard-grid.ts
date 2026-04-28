import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Injector, OnInit, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Gridster, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridHandler, KMD_GridsterItem } from '../../services/grid/grid-handler';
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
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
    pushItems: false, // ggf kritisch, verschiebt items
    pushResizeItems: true, // ggf kritisch, verschiebt items
  };

  items!: KMD_GridsterItem[];

  constructor(
    public gridHandler: GridHandler,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private injector: Injector,
  ) {}

  ngOnInit(): void {
    this.gridHandler.initGrid();
  }

  onAddWidgetClick(item: KMD_GridsterItem) {
    const modalRef = this.modalService.open(WidgetAdd, { centered: true });
    modalRef.componentInstance.widget = item;
  }

  onEditWidgetClick(item: KMD_GridsterItem) {
    const modalRef = this.modalService.open(WidgetAdd, { centered: true });
    modalRef.componentInstance.widget = item;
  }

  componentInjector(item: any): Injector {
    return Injector.create({
      providers: [{ provide: 'WIDGET_DATA', useValue: item }],
      parent: this.injector,
    });
  }

  getWidgetComponent(item: KMD_GridsterItem): Type<any> | null {
    return item.widgetDefinition?.widgetComponent ?? null;
  }

  onWidgetCloseClick(item: KMD_GridsterItem) {
    this.gridHandler.removeWidget(item);
  }
}
