import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarView } from './sidebar-view';

describe('SidebarView', () => {
  let component: SidebarView;
  let fixture: ComponentFixture<SidebarView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarView],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
