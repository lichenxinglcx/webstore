import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninfComponent } from './personinf.component';

describe('PersoninfComponent', () => {
  let component: PersoninfComponent;
  let fixture: ComponentFixture<PersoninfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoninfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoninfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
