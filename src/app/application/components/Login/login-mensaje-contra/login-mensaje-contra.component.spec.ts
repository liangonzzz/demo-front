import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMensajeContraComponent } from './login-mensaje-contra.component';

describe('LoginMensajeContraComponent', () => {
  let component: LoginMensajeContraComponent;
  let fixture: ComponentFixture<LoginMensajeContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginMensajeContraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMensajeContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
