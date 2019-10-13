import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincartComponent } from './logincart.component';

describe('LogincartComponent', () => {
  let component: LogincartComponent;
  let fixture: ComponentFixture<LogincartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
