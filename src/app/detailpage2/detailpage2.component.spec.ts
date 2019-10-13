import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailpage2Component } from './detailpage2.component';

describe('Detailpage2Component', () => {
  let component: Detailpage2Component;
  let fixture: ComponentFixture<Detailpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detailpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detailpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
