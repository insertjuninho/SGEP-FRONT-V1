import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormAddEmployerComponent } from './view-form-add-employer.component';

describe('ViewFormAddEmployerComponent', () => {
  let component: ViewFormAddEmployerComponent;
  let fixture: ComponentFixture<ViewFormAddEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFormAddEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormAddEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
