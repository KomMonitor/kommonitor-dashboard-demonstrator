import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAdd } from './widget-add';

describe('WidgetAdd', () => {
  let component: WidgetAdd;
  let fixture: ComponentFixture<WidgetAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
