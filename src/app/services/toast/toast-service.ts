import { Injectable } from '@angular/core';

export interface Toast {
  text: string;
  classname: string;
  delay?: number;
  type: ToastType;
}

export enum ToastType {
  SUCCESS,
  ERROR,
  INFO
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly DEFAULT_DELAY = 5000;
  toasts: Toast[] = [];

  success(text: string, delay: number = this.DEFAULT_DELAY) {
    this.addToast({
      text,
      classname: 'toast-success text-light',
      delay,
      type: ToastType.SUCCESS
    });
  }

  info(text: string, delay: number = this.DEFAULT_DELAY) {
    this.addToast({
      text,
      classname: 'toast-info text-light',
      delay,
      type: ToastType.INFO
    });
  }

  error(text: string, delay: number = this.DEFAULT_DELAY) {
    this.addToast({
      text,
      classname: 'bg-danger text-light',
      delay,
      type: ToastType.ERROR
    });
  }

  private addToast(toast: Toast) {
    this.toasts = [...this.toasts, toast]; 
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}