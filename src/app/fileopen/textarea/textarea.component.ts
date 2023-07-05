import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class TextareaComponent {
  @Input() textArea: string;
  @Output() textAreaChange = new EventEmitter<any>();
  showComponent: boolean = true;

  onChange(event: any) {
    this.textAreaChange.emit(event.target.value);
    // console.log("textarea.cp.ts, onChange: " + event.target.value);
  }
}

