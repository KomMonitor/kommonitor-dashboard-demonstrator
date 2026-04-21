import { Component } from '@angular/core';
import { GridHandler } from '../../services/grid/grid-handler';

@Component({
  selector: 'sidebar-view',
  imports: [],
  templateUrl: './sidebar-view.html',
  styleUrl: './sidebar-view.scss',
})
export class SidebarView {

  constructor(
    protected gridHandler: GridHandler
  ) {}
}
