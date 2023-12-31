import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { SmartComponent } from './smart/smart.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    HomeComponent,
    SmartComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
