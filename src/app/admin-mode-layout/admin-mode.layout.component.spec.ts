import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModeLayoutComponent } from './admin-mode.layout.component';

describe('AdminModeComponent', () => {
  let component: AdminModeLayoutComponent;
  let fixture: ComponentFixture<AdminModeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
