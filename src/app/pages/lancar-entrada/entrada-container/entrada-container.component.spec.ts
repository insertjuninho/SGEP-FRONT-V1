import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaContainerComponent } from './entrada-container.component';

describe('EntradaContainerComponent', () => {
  let component: EntradaContainerComponent;
  let fixture: ComponentFixture<EntradaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
