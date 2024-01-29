import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBtnExcluirComponent } from './app-btn-excluir.component';

describe('AppBtnExcluirComponent', () => {
  let component: AppBtnExcluirComponent;
  let fixture: ComponentFixture<AppBtnExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBtnExcluirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBtnExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
