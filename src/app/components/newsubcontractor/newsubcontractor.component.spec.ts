import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsubcontractorComponent } from './newsubcontractor.component';

describe('NewsubcontractorComponent', () => {
  let component: NewsubcontractorComponent;
  let fixture: ComponentFixture<NewsubcontractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsubcontractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsubcontractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
