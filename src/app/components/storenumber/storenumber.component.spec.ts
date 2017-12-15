import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorenumberComponent } from './storenumber.component';

describe('StorenumberComponent', () => {
  let component: StorenumberComponent;
  let fixture: ComponentFixture<StorenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
