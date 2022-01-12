import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { LchComponent } from './lch/lch.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { NgDngComponent } from './ng-dng/ng-dng.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lch', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'lch', component: LchComponent, data: { text: "L\u1ECBch" } },
  { path: 'view2', component: View2Component, data: { text: 'View 2' } },
  { path: 'view3', component: View3Component, data: { text: 'View 3' } },
  { path: 'ng-dng', component: NgDngComponent, data: { text: "\u1EE8ng d\u1EE5ng" } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
