import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDetailComponent } from './ngfor-detail.component';

describe('NgforDetailComponent', () => {
  let component: NgforDetailComponent;
  let fixture: ComponentFixture<NgforDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
