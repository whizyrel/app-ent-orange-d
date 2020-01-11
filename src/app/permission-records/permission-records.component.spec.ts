import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionRecordsComponent } from './permission-records.component';

describe('PermissionRecordsComponent', () => {
  let component: PermissionRecordsComponent;
  let fixture: ComponentFixture<PermissionRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
