import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBtnNovoComponent } from './app-btn-novo.component';

describe('AppBtnNovoComponent', () => {
  let component: AppBtnNovoComponent;
  let fixture: ComponentFixture<AppBtnNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBtnNovoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBtnNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
