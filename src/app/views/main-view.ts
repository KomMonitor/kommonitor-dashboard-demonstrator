import { Component } from '@angular/core';
import { DashboardView } from './dashboard-view/dashboard-view';
import { SidebarView } from './sidebar-view/sidebar-view';

@Component({
  selector: 'app-main-view',
  imports: [
    DashboardView,
    SidebarView],
  templateUrl: './main-view.html',
  styleUrl: './main-view.scss',
})
export class MainView {}
