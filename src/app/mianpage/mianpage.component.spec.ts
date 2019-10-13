import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MianpageComponent } from './mianpage.component';

describe('MianpageComponent', () => {
  let component: MianpageComponent;
  let fixture: ComponentFixture<MianpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MianpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MianpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
