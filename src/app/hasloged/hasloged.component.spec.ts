import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaslogedComponent } from './hasloged.component';

describe('HaslogedComponent', () => {
  let component: HaslogedComponent;
  let fixture: ComponentFixture<HaslogedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaslogedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaslogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
