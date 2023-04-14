import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './modules/user-module/demo/demo.component';
import { LoginComponent } from './modules/user-module/login/login.component';
import { AuthGuard } from './services/auth-services/authGuard';
import { Demo1Component } from './modules/user-module/demo1/demo1.component';
import { Demo2Component } from './modules/user-module/demo2/demo2.component';

const routes: Routes = [
  {path: '', redirectTo: 'login' ,pathMatch:'full'},
  { path: 'demo', component: DemoComponent, canActivate: [AuthGuard] },
  { path: 'demo1', component: Demo1Component, canActivate: [AuthGuard] },
  { path: 'demo2', component: Demo2Component, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
