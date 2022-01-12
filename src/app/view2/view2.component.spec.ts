import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxTabsModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxRadioModule, IgxSelectModule, IgxAvatarModule } from 'igniteui-angular';
import { View2Component } from './view2.component';

describe('View2Component', () => {
  let component: View2Component;
  let fixture: ComponentFixture<View2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View2Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxTabsModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxRadioModule, IgxSelectModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
