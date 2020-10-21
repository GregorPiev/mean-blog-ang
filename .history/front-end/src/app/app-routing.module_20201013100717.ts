import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'reg', component: RegComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot()
  ],
  exports: [
    RouterModule,
    FlashMessagesModule
  ]
})
export class AppRoutingModule {
  static forRoot(): ModuleWithProviders<AppSharedModule> {
    return {
      ngModule: AppSharedModule
    };
  }
}
