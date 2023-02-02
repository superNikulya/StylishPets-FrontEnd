import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModeConstructorComponent } from './admin-mode-constructor.component';

describe('AdminModeConstructorComponent', () => {
  let component: AdminModeConstructorComponent;
  let fixture: ComponentFixture<AdminModeConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModeConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModeConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
