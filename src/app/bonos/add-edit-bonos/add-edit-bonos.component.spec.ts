import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBonosComponent } from './add-edit-bonos.component';

describe('AddEditBonosComponent', () => {
  let component: AddEditBonosComponent;
  let fixture: ComponentFixture<AddEditBonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
