import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-generated-question',
  templateUrl: './generated-question.component.html',
  styleUrls: ['./generated-question.component.sass']
})

@Injectable({
  providedIn: 'root'
})

export class GeneratedQuestionComponent {
  showComponent: boolean = true;

  data = null;
  question = null;
  private url: string = "http://localhost:8080/getRandomQuestion"

  constructor(private http: HttpClient) {
  }

  newQuestion(){
    this.http.get<any>(this.url).subscribe(response => {
      this.data = response;
      this.question = this.data.question_text;
    })
  }

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(response => {
      this.data = response;
      this.question = this.data.question_text;
    })
  }
}
