import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent {

  @Input() question: string;
  @Output() questionChange = new EventEmitter<any>();
  showComponent: boolean = true;

  onChange(event: any) {
    this.questionChange.emit(event.target.value);
    // console.log("question.cp.ts, onChange: " + event.target.value);
  }

}
