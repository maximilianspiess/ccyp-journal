import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FilenavComponent } from './filenav/filenav.component';
import { FilegroupComponent } from './filegroup/filegroup.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FilenavComponent,
    FilegroupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
