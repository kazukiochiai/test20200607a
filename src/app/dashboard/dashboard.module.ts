import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component'; // <-- NgModel lives here
import { DashboardRoutingModule } from './dashboad-routing.module';
import { HeroSearchComponent } from '../hero-search/hero-search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
