import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmedicamentoComponent } from './crearmedicamento.component';

describe('CrearmedicamentoComponent', () => {
  let component: CrearmedicamentoComponent;
  let fixture: ComponentFixture<CrearmedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearmedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearmedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
