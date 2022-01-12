import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDngComponent } from './ng-dng.component';

describe('NgDngComponent', () => {
  let component: NgDngComponent;
  let fixture: ComponentFixture<NgDngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
