import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailpage5Component } from './detailpage5.component';

describe('Detailpage5Component', () => {
  let component: Detailpage5Component;
  let fixture: ComponentFixture<Detailpage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detailpage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detailpage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
