import {Output,EventEmitter} from "@angular/core";
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent {
  @Input() title: string;
  @Output() titleChange = new EventEmitter<string>();
  showComponent: boolean = true;

  onChange(event: any) {
    this.titleChange.emit(event.target.value);
    // console.log("title.cp.ts, onChange: " + event.target.value);
  }

}
