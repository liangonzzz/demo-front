import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTableroCandiComponent } from './mi-tablero-candi.component';

describe('MiTableroCandiComponent', () => {
  let component: MiTableroCandiComponent;
  let fixture: ComponentFixture<MiTableroCandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiTableroCandiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiTableroCandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
