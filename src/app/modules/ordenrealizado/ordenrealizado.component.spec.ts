import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenrealizadoComponent } from './ordenrealizado.component';

describe('OrdenrealizadoComponent', () => {
  let component: OrdenrealizadoComponent;
  let fixture: ComponentFixture<OrdenrealizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenrealizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenrealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
