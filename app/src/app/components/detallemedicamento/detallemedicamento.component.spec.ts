import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemedicamentoComponent } from './detallemedicamento.component';

describe('DetallemedicamentoComponent', () => {
  let component: DetallemedicamentoComponent;
  let fixture: ComponentFixture<DetallemedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallemedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallemedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
