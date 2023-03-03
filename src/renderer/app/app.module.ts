import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TailwindTmplComponent } from './tailwind-tmpl/tailwind-tmpl.component';
@NgModule({
  declarations: [AppComponent, TailwindTmplComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
