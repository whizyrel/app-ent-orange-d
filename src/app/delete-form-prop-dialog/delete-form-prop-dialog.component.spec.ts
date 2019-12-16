import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFormPropDialogComponent } from './delete-form-prop-dialog.component';

describe('DeleteFormPropDialogComponent', () => {
  let component: DeleteFormPropDialogComponent;
  let fixture: ComponentFixture<DeleteFormPropDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFormPropDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFormPropDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
