import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccSmartComponent } from './acc-smart/acc-smart.component';
import { AccHomeComponent } from './acc-home/acc-home.component';

const routes: Routes = [
  {path: 'home/:id', component: AccHomeComponent}
  // {path: 'home/:id', component: AccSmartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
