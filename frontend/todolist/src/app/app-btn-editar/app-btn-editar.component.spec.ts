import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBtnEditarComponent } from './app-btn-editar.component';

describe('AppBtnEditarComponent', () => {
  let component: AppBtnEditarComponent;
  let fixture: ComponentFixture<AppBtnEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBtnEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBtnEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
