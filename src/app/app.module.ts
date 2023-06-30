import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FilenavComponent } from './filenav/filenav.component';
import { FilegroupComponent } from './filegroup/filegroup.component';
import { FileopenComponent } from './fileopen/fileopen.component';
import { TitleComponent } from './title/title.component';
import { TextareaComponent } from './textarea/textarea.component';
import { GeneratedQuestionComponent } from './generated-question/generated-question.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { ApplikationComponent } from './applikation/applikation.component';
import {RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: "home", component: ApplikationComponent},
  {path: "", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent},
  {path: "", component: RegisterComponent, pathMatch: "full"}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilenavComponent,
    FilegroupComponent,
    LoginComponent,
    ApplikationComponent,
    RegisterComponent,
    FileopenComponent,
    TitleComponent,
    TextareaComponent,
    GeneratedQuestionComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
