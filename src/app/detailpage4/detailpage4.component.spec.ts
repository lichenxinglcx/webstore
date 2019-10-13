import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailpage4Component } from './detailpage4.component';

describe('Detailpage4Component', () => {
  let component: Detailpage4Component;
  let fixture: ComponentFixture<Detailpage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detailpage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detailpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
