import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientomascotaComponent } from './mantenimientomascota.component';

describe('MantenimientomascotaComponent', () => {
  let component: MantenimientomascotaComponent;
  let fixture: ComponentFixture<MantenimientomascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientomascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientomascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
