import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../toast/toast-service';

export interface GridLayoutOption {
  id: number;
  title: string;
  description: string;
  layout: KMD_GridsterItem[];
  cssClassForSelection: string;
}

export interface KMD_GridsterItem {
  cols: number;
  rows: number;
  y: number;
  x: number;
  label: string;
  placeholder?: boolean
  previewLabel?: string;
}

export interface DashboardSubject {
  layoutId: number | undefined;
}

export enum KMD_WidgetTypes {
  TEXT,
  BARCHART,
  TIMESERIES,
  DATATABLE
}

@Injectable({
  providedIn: 'root',
})
export class GridHandler {

  private dashboardDefinition = new BehaviorSubject<DashboardSubject>({
    layoutId: 0 // undefined
  });

  dashboardDefinition$ = this.dashboardDefinition.asObservable();

  layoutOptions: GridLayoutOption[] = [{
    id: 0,
    title: 'Leeres Dashboard',
    description: 'Beginnen Sie mit einer komplett leeren Fläche',
    layout: [
      { cols: 4, rows: 4, y: 0, x: 0, label: 'Platzhalter', placeholder: true }
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

  get selectedLayout():DashboardSubject {
    return this.dashboardDefinition.getValue();
  }

  setSelectedLayout(layoutId:number | undefined) {
    this.dashboardDefinition.next({...this.dashboardDefinition.value, layoutId: layoutId});
    this.toastService.success('Layout angewendet');
  }

  resetSelectedLayout() {
    this.dashboardDefinition.next({...this.dashboardDefinition.value, layoutId: undefined});
    this.toastService.info('Dashboard komplett geleert');
  }
}
