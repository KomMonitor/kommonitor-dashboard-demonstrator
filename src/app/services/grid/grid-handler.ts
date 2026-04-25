import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../toast/toast-service';
import { v4 as uuidv4 } from "uuid";

export interface GridLayoutOption {
  id: number;
  title: string;
  description: string;
  layout: KMD_GridsterItem[];
  cssClassForSelection: string;
}

export interface KMD_GridsterItem {
  id?: string;
  cols: number;
  rows: number;
  y: number;
  x: number;
  label: string;
  placeholder?: boolean
  previewLabel?: string;
  content?: any;
  type?: KMD_WidgetTypes;
}

export interface DashboardSubject {
  layoutId: number | undefined;
  widgets: KMD_GridsterItem[];
}

export enum KMD_WidgetTypes {
  TEXT,
  BARCHART,
  TIMESERIES,
  DATATABLE
}

export interface WidgetFormObject {
  title: any;
  width: any;
  height: any;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class GridHandler {

  public dashboardDefinition = new BehaviorSubject<DashboardSubject>({
    layoutId: 0, // undefined,
    widgets: []
  });

  dashboardDefinition$ = this.dashboardDefinition.asObservable();

  layoutOptions: GridLayoutOption[] = [{
    id: 0,
    title: 'Leeres Dashboard',
    description: 'Beginnen Sie mit einer komplett leeren Fläche',
    layout: [
      { id: '', cols: 4, rows: 4, y: 0, x: 0, label: 'Platzhalter', placeholder: true }
    ],
    cssClassForSelection: 'empty'
  },
  {
    id: 1,
    title: '3er Standard-Layout',
    description: 'Ein Kopf-Widget und zwei kleinere darunter',
    layout: [
      { cols: 12, rows: 4, y: 0, x: 0, label: 'Platzhalter (oben)', placeholder: true, previewLabel: '12x4' },
      { cols: 6, rows: 4, y: 4, x: 0, label: 'Platzhalter (unten links)', placeholder: true, previewLabel: '6x4' },
      { cols: 6, rows: 4, y: 4, x: 6, label: 'Platzhalter (unten rechts)', placeholder: true, previewLabel: '6x4' }
    ],
    cssClassForSelection: 'standard_three',
  },
  {
    id: 2,
    title: '4er Raster-Layout',
    description: 'Symmetrisches 2x2 Raster',
    layout: [
      { cols: 6, rows: 4, y: 0, x: 0, label: 'Platzhalter (oben links)', placeholder: true, previewLabel: '6x4' },
      { cols: 6, rows: 4, y: 0, x: 6, label: 'Platzhalter (oben rechts)', placeholder: true, previewLabel: '6x4' },
      { cols: 6, rows: 4, y: 4, x: 0, label: 'Platzhalter (unten links)', placeholder: true, previewLabel: '6x4' },
      { cols: 6, rows: 4, y: 4, x: 6, label: 'Platzhalter (unten rechts)', placeholder: true, previewLabel: '6x4' }
    ],
    cssClassForSelection: 'grid_four'
  },
  {
    id: 3,
    title: '5er Horizontal-Layout',
    description: 'Ein Header und vier schmale Spalten',
    layout: [
      { cols: 12, rows: 3, y: 0, x: 0, label: 'Platzhalter (oben)', placeholder: true, previewLabel: '12x4' },
      { cols: 3, rows: 5, y: 3, x: 0, label: 'Platzhalter (unten links)', placeholder: true, previewLabel: '3x5' },
      { cols: 3, rows: 5, y: 3, x: 3, label: 'Platzhalter (unten Mitte links)', placeholder: true, previewLabel: '3x5' },
      { cols: 3, rows: 5, y: 3, x: 6, label: 'Platzhalter (unten Mitte rechts)', placeholder: true, previewLabel: '3x5' },
      { cols: 3, rows: 5, y: 3, x: 9, label: 'Platzhalter (unten rechts)', placeholder: true, previewLabel: '3x5' },
    ],
    cssClassForSelection: 'horizontal_five'
  }];

  constructor(
    private toastService: ToastService
  ) {}

  get selectedLayout():number {
    return this.dashboardDefinition.value.layoutId!;
  }

  get widgets():KMD_GridsterItem[] {
    return this.dashboardDefinition.value.widgets;
  }


  initGrid() {
    if(this.selectedLayout!=undefined)
      this.dashboardDefinition.next({...this.dashboardDefinition.value, widgets: this.setUuid(this.layoutOptions[this.selectedLayout].layout)});

  }

  setSelectedLayout(layoutId:number | undefined) {
    this.dashboardDefinition.next({...this.dashboardDefinition.value, layoutId: layoutId});
    this.toastService.success('Layout angewendet');
  }

  resetSelectedLayout() {
    this.dashboardDefinition.next({...this.dashboardDefinition.value, layoutId: undefined});
    this.toastService.info('Dashboard komplett geleert');
  }

  // more like replace placeholder
  addWidget(widget: KMD_GridsterItem, type: KMD_WidgetTypes, formData:WidgetFormObject) {

    const current = this.dashboardDefinition.value;

    const updatedWidget = current.widgets.map(elem => 
      elem.id==widget.id ? {
        ...elem, 
        cols: formData.width,
        rows: formData.height,
        label: formData.title,
        type: type,
        placeholder: false, 
        previewLabel: undefined,
        content: formData.data
      } : elem
    );

    this.dashboardDefinition.next({
      ...current,
      widgets: updatedWidget
    });
  }

  setUuid(items:KMD_GridsterItem[]):KMD_GridsterItem[] {

    return items.map(elem => {elem.id = uuidv4(); return elem;});
  }

  removeWidget(item: KMD_GridsterItem) {
    
    const current = this.dashboardDefinition.value;

    const updatedWidgets = current.widgets.filter(elem => elem.id!=item.id);

    this.dashboardDefinition.next({
      ...current,
      widgets: updatedWidgets
    });
  }

  addRandomWidget() {

    const current = this.dashboardDefinition.value;

    current.widgets.push({
      id: uuidv4(),
      cols: 4,
      rows: 4,
      y: 0,
      x: 0,
      label: 'Platzhalter (neu)',
      placeholder: true
    });
  }
}
