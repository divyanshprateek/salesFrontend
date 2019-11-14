import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { SalesModule } from './sales/sales.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sales',
    pathMatch: 'full'
  },
  {
    path: 'sales',
    component: SalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SalesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
