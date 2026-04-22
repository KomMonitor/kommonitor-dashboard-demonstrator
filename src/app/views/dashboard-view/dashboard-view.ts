import { DashboardGrid } from './../../components/dashboard-grid/dashboard-grid';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { LayoutSelection } from '../modals/layout-selection/layout-selection';
import { GridHandler } from '../../services/grid/grid-handler';
import { ToastService } from '../../services/toast/toast-service';

@Component({
  selector: 'dashboard-view',
  imports: [
    CommonModule, 
    LayoutSelection,
    DashboardGrid
],
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.scss',
})
export class DashboardView implements OnInit {

  layoutSelected: boolean = false;
  layoutId: number = 0;

  constructor(
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private gridHandler: GridHandler,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    //this.onClickAddLayout();

    this.gridHandler.dashboardDefinition$.subscribe(value => {
      this.layoutSelected = value.layoutId != null;
      this.cdr.detectChanges();
    });
  }

  onClickAddLayout() {
    const modalRef = this.modalService.open(LayoutSelection,{
      size: 'xl'
    });
  }
}
