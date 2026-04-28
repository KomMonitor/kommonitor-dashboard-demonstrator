import { Injectable, InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KMD_GridsterItem } from './grid/grid-handler';

export const WIDGET_CONTEXT = new InjectionToken<KMD_GridsterItem>('WIDGET_CONTEXT');

@Injectable()
export class WidgetConfigBridge {
  private form: FormGroup | null = null;

  register(form: FormGroup): void {
    this.form = form;
  }

  getForm(): FormGroup | null {
    return this.form;
  }
}
