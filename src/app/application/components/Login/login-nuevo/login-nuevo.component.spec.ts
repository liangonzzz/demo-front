import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNuevoComponent } from './login-nuevo.component';

describe('LoginNuevoComponent', () => {
  let component: LoginNuevoComponent;
  let fixture: ComponentFixture<LoginNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginNuevoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
