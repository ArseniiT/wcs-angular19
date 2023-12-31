import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartComponent } from './smart/smart.component';

const routes: Routes = [
  {path: 'home', component: SmartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
