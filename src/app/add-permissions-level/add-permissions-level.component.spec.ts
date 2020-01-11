import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermissionsLevelComponent } from './add-permissions-level.component';

describe('AddPermissionsLevelComponent', () => {
  let component: AddPermissionsLevelComponent;
  let fixture: ComponentFixture<AddPermissionsLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermissionsLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermissionsLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
