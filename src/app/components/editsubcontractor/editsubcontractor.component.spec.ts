import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubcontractorComponent } from './editsubcontractor.component';

describe('EditsubcontractorComponent', () => {
  let component: EditsubcontractorComponent;
  let fixture: ComponentFixture<EditsubcontractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsubcontractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubcontractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
