import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMensajeEmailComponent } from './login-mensaje-email.component';

describe('LoginMensajeEmailComponent', () => {
  let component: LoginMensajeEmailComponent;
  let fixture: ComponentFixture<LoginMensajeEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginMensajeEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMensajeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
