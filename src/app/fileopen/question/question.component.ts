import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent {

  @Input() question: string;

  showComponent: boolean = true;

  onChange(event: any) {
  }

}
