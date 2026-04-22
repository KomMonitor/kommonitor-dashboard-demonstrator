import { Component } from '@angular/core';
import { ToastService, ToastType } from '../../services/toast/toast-service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'toast',
  imports: [NgbToast, CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {

  toastTypes = ToastType;
  
  constructor(public toastService: ToastService) {}
}