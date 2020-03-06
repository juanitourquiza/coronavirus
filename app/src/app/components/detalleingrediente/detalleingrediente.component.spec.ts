import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleingredienteComponent } from './detalleingrediente.component';

describe('DetalleingredienteComponent', () => {
  let component: DetalleingredienteComponent;
  let fixture: ComponentFixture<DetalleingredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleingredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleingredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
