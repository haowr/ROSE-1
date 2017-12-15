import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoblawsComponent } from './loblaws.component';

describe('LoblawsComponent', () => {
  let component: LoblawsComponent;
  let fixture: ComponentFixture<LoblawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoblawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoblawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
