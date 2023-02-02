import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToggleComponent } from './admin-toggle.component';

describe('AdminToggleComponent', () => {
  let component: AdminToggleComponent;
  let fixture: ComponentFixture<AdminToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
