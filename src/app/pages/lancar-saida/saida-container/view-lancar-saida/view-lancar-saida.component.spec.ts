import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLancarSaidaComponent } from './view-lancar-saida.component';

describe('ViewLancarSaidaComponent', () => {
  let component: ViewLancarSaidaComponent;
  let fixture: ComponentFixture<ViewLancarSaidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLancarSaidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLancarSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
