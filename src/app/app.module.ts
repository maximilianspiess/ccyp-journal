import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FilenavComponent } from './filenav/filenav.component';
import { FilegroupComponent } from './filegroup/filegroup.component';
import { LoginComponent } from './login/login.component';
import { ApplikationComponent } from './applikation/applikation.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: "home", component: ApplikationComponent},
  {path: "", component: LoginComponent, pathMatch: "full"}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilenavComponent,
    FilegroupComponent,
    LoginComponent,
    ApplikationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
