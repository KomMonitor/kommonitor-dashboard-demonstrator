import { Injectable } from '@angular/core';

export interface GridLayoutOption {
  id: number;
  title: string;
  description: string;
  layout: KMD_GridsterItem[];
}

export interface KMD_GridsterItem {
  cols: number;
  rows: number;
  y: number;
  x: number;
  label: string;
  placeholder?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class GridHandler {

  layoutOptions: GridLayoutOption[] = [{
    id: 0,
    title: 'Leeres Dashboard',
    description: 'Beginnen Sie mit einer komplett leeren Fläche',
    layout: [
      { cols: 4, rows: 4, y: 0, x: 0, label: 'Platzhalter', placeholder: true }
    ]
  },
  {
    id: 1,
    title: '3er Standard-Layout',
    description: 'Ein Kopf-Widget und zwei kleinere darunter',
    layout: [
      { cols: 12, rows: 4, y: 0, x: 0, label: 'Platzhalter (oben)', placeholder: true },
      { cols: 6, rows: 4, y: 0, x: 0, label: 'Platzhalter (unten links)', placeholder: true },
      { cols: 6, rows: 4, y: 0, x: 0, label: 'Platzhalter (unten rechts)', placeholder: true }
    ]
  }];
}
