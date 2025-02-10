import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConfirmarComponent } from './login-confirmar.component';

describe('LoginConfirmarComponent', () => {
  let component: LoginConfirmarComponent;
  let fixture: ComponentFixture<LoginConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginConfirmarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
