import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxBannerModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxSliderModule } from 'igniteui-angular';
import { View3Component } from './view3.component';

describe('View3Component', () => {
  let component: View3Component;
  let fixture: ComponentFixture<View3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View3Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxBannerModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxSliderModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
