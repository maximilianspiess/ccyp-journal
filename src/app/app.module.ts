import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FilenavComponent } from './filenav/filenav.component';
import { FileopenComponent } from './fileopen/fileopen.component';
import { TitleComponent } from './title/title.component';
import { TextareaComponent } from './textarea/textarea.component';
import { GeneratedQuestionComponent } from './generated-question/generated-question.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FilenavComponent,
    FileopenComponent,
    TitleComponent,
    TextareaComponent,
    GeneratedQuestionComponent,
    QuestionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
