import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsDeleteDialogComponent } from './permissions-delete-dialog.component';

describe('PermissionsDeleteDialogComponent', () => {
  let component: PermissionsDeleteDialogComponent;
  let fixture: ComponentFixture<PermissionsDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
