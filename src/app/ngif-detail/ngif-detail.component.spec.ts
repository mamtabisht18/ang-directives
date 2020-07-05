import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifDetailComponent } from './ngif-detail.component';

describe('NgifDetailComponent', () => {
  let component: NgifDetailComponent;
  let fixture: ComponentFixture<NgifDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
