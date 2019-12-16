import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { TabsModule as MkTabsModule, BoxModule, DropdownModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MkTabsModule,
    BoxModule,
    DropdownModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
