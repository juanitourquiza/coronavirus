import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaringredienteComponent } from './editaringrediente.component';

describe('EditaringredienteComponent', () => {
  let component: EditaringredienteComponent;
  let fixture: ComponentFixture<EditaringredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaringredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaringredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
