import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSellersComponent } from './dashboard-sellers.component';

describe('DashboardSellersComponent', () => {
  let component: DashboardSellersComponent;
  let fixture: ComponentFixture<DashboardSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});