
import { HttpClientModule } from '@angular/common/http';
import { CARTService } from './Services/cart.service';

import { LoginComponent } from './+login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { AnnouncementComponent } from './announcement/announcement.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from './Services/northwind.service';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule, GridModule, BrowserAnimationsModule,
    HttpClientModule, FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AnnouncementComponent
  ],
  bootstrap: [AppComponent],
  providers: [CARTService, CategoriesService]
})
export class AppModule {}
