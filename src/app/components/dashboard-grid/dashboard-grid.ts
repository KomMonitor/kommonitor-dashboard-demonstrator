import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Gridster, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridHandler, KMD_GridsterItem } from '../../services/grid/grid-handler';


@Component({
  selector: 'dashboard-grid',
  imports: [CommonModule, Gridster, GridsterItem],
  templateUrl: './dashboard-grid.html',
  styleUrl: './dashboard-grid.scss',
})
export class DashboardGrid implements OnInit {

  @Input() layoutId!: number;
 
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
    private gridHandler: GridHandler
  ) {}

  ngOnInit(): void {
    this.items = this.gridHandler.layoutOptions[this.layoutId].layout;
  }
}
