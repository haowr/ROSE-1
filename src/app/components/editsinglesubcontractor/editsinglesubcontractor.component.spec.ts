import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsinglesubcontractorComponent } from './editsinglesubcontractor.component';

describe('EditsinglesubcontractorComponent', () => {
  let component: EditsinglesubcontractorComponent;
  let fixture: ComponentFixture<EditsinglesubcontractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsinglesubcontractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsinglesubcontractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
