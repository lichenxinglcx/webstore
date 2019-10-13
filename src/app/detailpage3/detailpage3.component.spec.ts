import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailpage3Component } from './detailpage3.component';

describe('Detailpage3Component', () => {
  let component: Detailpage3Component;
  let fixture: ComponentFixture<Detailpage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detailpage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detailpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
