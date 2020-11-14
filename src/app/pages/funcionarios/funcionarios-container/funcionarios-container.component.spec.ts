import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosContainerComponent } from './funcionarios-container.component';

describe('FuncionariosContainerComponent', () => {
  let component: FuncionariosContainerComponent;
  let fixture: ComponentFixture<FuncionariosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
