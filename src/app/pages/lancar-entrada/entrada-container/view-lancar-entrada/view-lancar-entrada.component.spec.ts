import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLancarEntradaComponent } from './view-lancar-entrada.component';

describe('ViewLancarEntradaComponent', () => {
  let component: ViewLancarEntradaComponent;
  let fixture: ComponentFixture<ViewLancarEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLancarEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLancarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
