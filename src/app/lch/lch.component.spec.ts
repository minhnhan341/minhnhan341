import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCalendarModule, IgxCheckboxModule, IgxBannerModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule, IgxInputGroupModule } from 'igniteui-angular';
import { LchComponent } from './lch.component';

describe('LchComponent', () => {
  let component: LchComponent;
  let fixture: ComponentFixture<LchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LchComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCalendarModule, IgxCheckboxModule, IgxBannerModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
