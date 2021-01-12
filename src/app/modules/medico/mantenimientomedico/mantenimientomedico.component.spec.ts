import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientomedicoComponent } from './mantenimientomedico.component';

describe('MantenimientomedicoComponent', () => {
  let component: MantenimientomedicoComponent;
  let fixture: ComponentFixture<MantenimientomedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientomedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientomedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
