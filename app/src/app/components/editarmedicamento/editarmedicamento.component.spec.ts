import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmedicamentoComponent } from './editarmedicamento.component';

describe('EditarmedicamentoComponent', () => {
  let component: EditarmedicamentoComponent;
  let fixture: ComponentFixture<EditarmedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
