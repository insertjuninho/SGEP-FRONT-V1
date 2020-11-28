import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLaunchsComponent } from './view-launchs.component';

describe('ViewLaunchsComponent', () => {
  let component: ViewLaunchsComponent;
  let fixture: ComponentFixture<ViewLaunchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLaunchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLaunchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
