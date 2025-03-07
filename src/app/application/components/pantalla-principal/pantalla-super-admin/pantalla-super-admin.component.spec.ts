import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaSuperAdminComponent } from './pantalla-super-admin.component';

describe('PantallaSuperAdminComponent', () => {
  let component: PantallaSuperAdminComponent;
  let fixture: ComponentFixture<PantallaSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaSuperAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
