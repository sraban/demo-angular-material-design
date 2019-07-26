import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormOneComponent } from './reactive-form-one/reactive-form-one.component';
import { ReactiveFormTwoComponent } from './reactive-form-two/reactive-form-two.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  }, {
    path: 'p1',
    component: ReactiveFormOneComponent
  },
  {
    path: 'login',
    component: ReactiveFormTwoComponent
  },
  {
    path: 'register',
    component: ReactiveFormTwoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
