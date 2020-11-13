import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaContainerComponent } from './saida-container.component';

describe('SaidaContainerComponent', () => {
  let component: SaidaContainerComponent;
  let fixture: ComponentFixture<SaidaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
