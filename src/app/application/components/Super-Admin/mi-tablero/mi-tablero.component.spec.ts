import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTableroComponent } from './mi-tablero.component';

describe('MiTableroComponent', () => {
  let component: MiTableroComponent;
  let fixture: ComponentFixture<MiTableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiTableroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
