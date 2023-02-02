import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModeCategoriesComponent } from './admin-mode-categories.component';

describe('AdminModeCategoriesComponent', () => {
  let component: AdminModeCategoriesComponent;
  let fixture: ComponentFixture<AdminModeCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModeCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
