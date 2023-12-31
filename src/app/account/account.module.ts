import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccHomeComponent } from './acc-home/acc-home.component';
import { AccShowComponent } from './acc-show/acc-show.component';
import { AccSmartComponent } from './acc-smart/acc-smart.component';


@NgModule({
  declarations: [
    AccHomeComponent,
    AccShowComponent,
    AccSmartComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
