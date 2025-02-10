import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestablecerComponent } from './login-restablecer.component';

describe('LoginRestablecerComponent', () => {
  let component: LoginRestablecerComponent;
  let fixture: ComponentFixture<LoginRestablecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRestablecerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRestablecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
