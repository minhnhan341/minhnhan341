import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LchComponent } from './lch/lch.component';
import { IgxCalendarModule, IgxCheckboxModule, IgxBannerModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule, IgxInputGroupModule, IgxTabsModule, IgxRadioModule, IgxSelectModule, IgxAvatarModule, IgxSliderModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { NgDngComponent } from './ng-dng/ng-dng.component';

@NgModule({
  declarations: [
    AppComponent,
    LchComponent,
    View2Component,
    View3Component,
    NgDngComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCalendarModule,
    IgxCheckboxModule,
    IgxBannerModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDialogModule,
    IgxToggleModule,
    IgxInputGroupModule,
    FormsModule,
    IgxTabsModule,
    IgxRadioModule,
    IgxSelectModule,
    IgxAvatarModule,
    IgxSliderModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
