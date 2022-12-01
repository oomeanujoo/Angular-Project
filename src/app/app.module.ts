import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule, AppRoutingModule, CommonModule, HomeModule],
  declarations: [AppComponent, TestComponent, NavComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
