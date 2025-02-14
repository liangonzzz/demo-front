import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiCorreoComponent } from './confi-correo.component';

describe('ConfiCorreoComponent', () => {
  let component: ConfiCorreoComponent;
  let fixture: ComponentFixture<ConfiCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiCorreoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
