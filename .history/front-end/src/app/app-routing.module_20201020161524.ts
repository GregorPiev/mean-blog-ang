import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { AuthGuard } from './auth.guard';
import { PostComponent } from './post/post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'reg', component: RegComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'update/:id', component: UpdatePostComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
