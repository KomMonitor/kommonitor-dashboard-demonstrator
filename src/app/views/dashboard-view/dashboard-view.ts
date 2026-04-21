import { DashboardGrid } from './../../components/dashboard-grid/dashboard-grid';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { LayoutSelection } from '../modals/layout-selection/layout-selection';

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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.onClickAddLayout();
  }

  onClickAddLayout() {
    const modalRef = this.modalService.open(LayoutSelection,{
      size: 'xl'
    });

    modalRef.result.then(
      (result) => {
        console.log('Selected layout', result);
        this.layoutId = result;
        this.layoutSelected = true;
        this.cdr.detectChanges();
      },
      (reason) => {}
    );
  }
}
