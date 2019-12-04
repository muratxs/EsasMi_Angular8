
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { MainNavComponent } from '../nav/main-nav/main-nav.component';



@NgModule({
  declarations: [MainLayoutComponent, MainNavComponent, HomeComponent, AboutUsComponent, ContactComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class MainModule { }
