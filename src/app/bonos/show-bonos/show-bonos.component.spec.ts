import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBonosComponent } from './show-bonos.component';

describe('ShowBonosComponent', () => {
  let component: ShowBonosComponent;
  let fixture: ComponentFixture<ShowBonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
