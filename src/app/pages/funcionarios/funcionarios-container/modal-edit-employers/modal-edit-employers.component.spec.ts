import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEmployersComponent } from './modal-edit-employers.component';

describe('ModalEditEmployersComponent', () => {
  let component: ModalEditEmployersComponent;
  let fixture: ComponentFixture<ModalEditEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
