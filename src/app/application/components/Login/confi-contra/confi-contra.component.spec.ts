import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiContraComponent } from './confi-contra.component';

describe('ConfiContraComponent', () => {
  let component: ConfiContraComponent;
  let fixture: ComponentFixture<ConfiContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiContraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
