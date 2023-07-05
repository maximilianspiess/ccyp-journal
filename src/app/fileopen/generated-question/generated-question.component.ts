import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-generated-question',
  templateUrl: './generated-question.component.html',
  styleUrls: ['./generated-question.component.sass']
})

export class GeneratedQuestionComponent {
  @Input() genQuestion: string;
  @Output() genQuestionChange = new EventEmitter<string>();
  showComponent: boolean = true;

  onChange(event: any) {
    this.genQuestionChange.emit(event.target.value);
    // console.log("genQuestion.cp.ts, onChange: " + event.target.value);
  }


  // http: HttpClient;
  // showComponent: boolean = true;
  //
  // data = null;
  // question = null;
  //
  // private url: string = "http://localhost:8080/getRandomQuestion"
  // ngOnInit() {
  //   this.http.get<any>(this.url).subscribe(response => {
  //     this.data = response;
  //     this.question = this.data.question_text;
  //   })
  // }
  //
  // newQuestion(){
  //   this.http.get<any>(this.url).subscribe(response => {
  //     this.data = response;
  //     this.question = this.data.question_text;
  //   })
  // }

}
