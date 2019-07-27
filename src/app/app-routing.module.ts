import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormOneComponent, DialogContentExampleDialog, DialogOverviewExampleDialog, TablePaginationExample } from './reactive-form-one/reactive-form-one.component';
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
  },
  {
    path: 'dialog',
    component: DialogContentExampleDialog
  },
  {
    path: 'dialogOverview',
    component: DialogOverviewExampleDialog
  },
  {
    path: 'DataTable',
    component: TablePaginationExample
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
