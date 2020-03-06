import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearingredienteComponent } from './crearingrediente.component';

describe('CrearingredienteComponent', () => {
  let component: CrearingredienteComponent;
  let fixture: ComponentFixture<CrearingredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearingredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearingredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
