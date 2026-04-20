import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSelection } from './layout-selection';

describe('LayoutSelection', () => {
  let component: LayoutSelection;
  let fixture: ComponentFixture<LayoutSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSelection],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
