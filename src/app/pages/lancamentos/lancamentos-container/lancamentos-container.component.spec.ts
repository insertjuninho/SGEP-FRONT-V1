import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosContainerComponent } from './lancamentos-container.component';

describe('LancamentosContainerComponent', () => {
  let component: LancamentosContainerComponent;
  let fixture: ComponentFixture<LancamentosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
