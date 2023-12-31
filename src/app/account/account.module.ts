import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { SmartComponent } from './smart/smart.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowComponent,
    SmartComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
