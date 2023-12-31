import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccSmartComponent } from './acc-smart/acc-smart.component';

const routes: Routes = [
  {path: 'home/:id', component: AccSmartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
