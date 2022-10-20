import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule, AppRoutingModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
