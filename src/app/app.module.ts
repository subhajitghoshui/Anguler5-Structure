import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { layoutModule } from './layouts/layout.module';
import { pageModule } from './pages/page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    layoutModule,
    pageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
